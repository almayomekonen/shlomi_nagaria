"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { BoardConfiguration } from "@/types/boards";
import {
  boardTypes,
  materialOptions,
  colorOptions,
  edgeBandingOptions,
} from "@/data/boardsData";

import BoardDimensionsForm from "./BoardDimensionsForm";
import BoardTypeSelector from "./BoardTypeSelector";
import MaterialSelector from "./MaterialSelector";
import ColorSelector from "./ColorSelector";
import EdgeBandingSelector from "./EdgeBandingSelector";
import OrderSummaryActions from "./OrderSummaryActions";

interface ProductPageProps {
  title: string;
  description: string;
  mainImage: string;
  galleryImages?: string[];
  features?: string[];
  breadcrumb?: { label: string; href?: string }[];
}

export default function ProductPage({
  title,
  description,
  mainImage,
  galleryImages = [],
  features = [],
  breadcrumb = [],
}: ProductPageProps) {
  const [config, setConfig] = useState<BoardConfiguration>({
    width: null,
    length: null,
    boardTypeId: null,
    materialId: null,
    colorId: null,
    edgeBandingId: null,
  });

  // Calculate progress percentage
  const calculateProgress = () => {
    let filled = 0;
    const total = 6;
    if (config.width) filled++;
    if (config.length) filled++;
    if (config.boardTypeId) filled++;
    if (config.materialId) filled++;
    if (config.colorId) filled++;
    if (config.edgeBandingId) filled++;
    return Math.round((filled / total) * 100);
  };

  const progress = calculateProgress();
  const isComplete = progress === 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600 transition-colors">
              דף הבית
            </a>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4 rotate-180" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="bg-gray-100 p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    התקדמות הזמנה
                  </span>
                  <span className="text-sm font-bold text-primary-600">
                    {progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {progress < 100 && (
                  <p className="text-xs text-gray-500 mt-2">
                    עוד {6 - Math.round(progress / 16.67)} שדות למילוי
                  </p>
                )}
                {isComplete && (
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    ✓ מוכן להזמנה!
                  </p>
                )}
              </div>

              <div className="relative flex-1 min-h-[300px]">
                <img
                  src={mainImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  ⚡ משלוח ב-5 ימים
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://wa.me/972525090556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg transition-all"
                  >
                    <span>💬</span>
                    <span>עזרה מהירה</span>
                  </a>
                </div>
              </div>

              {galleryImages.length > 0 && (
                <div className="p-4 grid grid-cols-4 gap-2 bg-gray-50">
                  {galleryImages.slice(0, 4).map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-500 cursor-pointer transition-all"
                    >
                      <img
                        src={img}
                        alt={`דוגמה ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {features.length > 0 && (
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    ✓ מה כלול?
                  </h3>
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h1 className="heading-lg text-gray-900 mb-4">{title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            <BoardDimensionsForm
              width={config.width}
              length={config.length}
              onWidthChange={(value) => setConfig({ ...config, width: value })}
              onLengthChange={(value) => setConfig({ ...config, length: value })}
            />

            <BoardTypeSelector
              boardTypes={boardTypes}
              selectedId={config.boardTypeId}
              onSelect={(id) => setConfig({ ...config, boardTypeId: id })}
            />

            <MaterialSelector
              materials={materialOptions}
              selectedId={config.materialId}
              onSelect={(id) => setConfig({ ...config, materialId: id })}
            />

            <ColorSelector
              colors={colorOptions}
              selectedId={config.colorId}
              onSelect={(id) => setConfig({ ...config, colorId: id })}
            />

            <EdgeBandingSelector
              options={edgeBandingOptions}
              selectedId={config.edgeBandingId}
              onSelect={(id) => setConfig({ ...config, edgeBandingId: id })}
            />

            <div className="sticky bottom-0 lg:relative bg-gray-50 lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0 py-4 lg:py-0 shadow-lg lg:shadow-none">
              <OrderSummaryActions config={config} />
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>טיפים חשובים</span>
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>מדדו פעמיים, הזמינו פעם אחת</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>התייעצו איתנו בווטסאפ לפני ההזמנה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>אפשר להזמין דוגמאות קטנות לפני הזמנה גדולה</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">למה לבחור בנו?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">מחיר הוגן</h4>
                    <p className="text-sm opacity-90">ללא עמלות נסתרות</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">איכות מובטחת</h4>
                    <p className="text-sm opacity-90">חומרים פרימיום בלבד</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">משלוח מהיר</h4>
                    <p className="text-sm opacity-90">5 ימי עבודה לכל הארץ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">ייעוץ חינם</h4>
                    <p className="text-sm opacity-90">זמינים בווטסאפ 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

