"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import {
  CartItem,
  CartItemInput,
  CartTotals,
  CartContextValue,
} from "@/types/cart";
import {
  generateCartItemId,
  areItemsSimilar,
  calculateItemTotal,
  validateQuantity,
} from "@/lib/cartUtils";

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

const CART_STORAGE_KEY = "carpentry-cart";

export function CartProvider({ children }: CartProviderProps) {
  // Initialize cart state with hydration safety
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Validate each item has required fields
          const validItems = parsed.filter(
            (item) =>
              item.id &&
              item.name &&
              item.configuration &&
              typeof item.quantity === "number" &&
              typeof item.unitPrice === "number"
          );
          setItems(validItems);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      // Clear corrupted data
      localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes (only after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    if (typeof window === "undefined") return;

    try {
      if (items.length === 0) {
        localStorage.removeItem(CART_STORAGE_KEY);
      } else {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      }
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items, isHydrated]);

  const totals = useMemo((): CartTotals => {
    const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const lineItemCount = items.length;

    return {
      subtotal,
      itemCount,
      lineItemCount,
    };
  }, [items]);

  const findSimilarItem = useCallback(
    (item: CartItemInput): CartItem | undefined => {
      return items.find((existingItem) => areItemsSimilar(item, existingItem));
    },
    [items]
  );

  const addItem = useCallback(
    (itemInput: CartItemInput) => {
      const validatedQuantity = validateQuantity(itemInput.quantity);

      const existingItem = findSimilarItem(itemInput);

      if (existingItem) {
        updateQuantity(
          existingItem.id,
          existingItem.quantity + validatedQuantity
        );
      } else {
        const newItem: CartItem = {
          ...itemInput,
          id: generateCartItemId(),
          quantity: validatedQuantity,
          totalPrice: calculateItemTotal(
            itemInput.unitPrice,
            validatedQuantity
          ),
          createdAt: new Date().toISOString(),
        };

        setItems((prev) => [...prev, newItem]);
      }
    },
    [findSimilarItem]
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    const validatedQuantity = validateQuantity(quantity);

    if (validatedQuantity < 1) {
      removeItem(id);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: validatedQuantity,
            totalPrice: calculateItemTotal(item.unitPrice, validatedQuantity),
          };
        }
        return item;
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const contextValue = useMemo<CartContextValue>(
    () => ({
      items,
      totals,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      findSimilarItem,
    }),
    [
      items,
      totals,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      findSimilarItem,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
