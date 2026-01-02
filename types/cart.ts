export interface BoardConfiguration {
  widthCm: number;
  lengthCm: number;
  areaSqM: number;
  boardTypeId: string;
  boardTypeName?: string;
  materialId: string;
  materialName?: string;
  colorId?: string;
  colorName?: string;
  edgeBandingId?: string;
  edgeBandingName?: string;
}

export type ProductConfiguration = BoardConfiguration | Record<string, any>;

export interface CartItem {
  id: string;

  productId: string;

  name: string;

  description?: string;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  configuration?: ProductConfiguration;

  createdAt: string;

  thumbnailUrl?: string;
}

export type CartItemInput = Omit<CartItem, "id" | "totalPrice" | "createdAt">;

export interface CartTotals {
  subtotal: number;

  itemCount: number;

  lineItemCount: number;

  shipping?: number;

  tax?: number;

  discount?: number;

  total?: number;
}

export interface CartState {
  items: CartItem[];
  totals: CartTotals;
}

export interface CartActions {
  /** Add a new item or increment quantity if identical item exists */
  addItem: (item: CartItemInput) => void;

  /** Remove an item by its ID */
  removeItem: (id: string) => void;

  /** Update quantity of an existing item */
  updateQuantity: (id: string, quantity: number) => void;

  /** Clear all items from cart */
  clearCart: () => void;

  /** Check if an item with given config already exists */
  findSimilarItem: (item: CartItemInput) => CartItem | undefined;
}

export interface CartContextValue extends CartState, CartActions {}
