"use client";

import { AlertCircle } from "lucide-react";

interface BoardDimensionsFormProps {
  width: number | null;
  length: number | null;
  onWidthChange: (value: number | null) => void;
  onLengthChange: (value: number | null) => void;
}

const MIN_SIZE = 6;
const MAX_SIZE = 240;

export default function BoardDimensionsForm({
  width,
  length,
  onWidthChange,
  onLengthChange,
}: BoardDimensionsFormProps) {
  const isWidthValid =
    width === null || (width >= MIN_SIZE && width <= MAX_SIZE);
  const isLengthValid =
    length === null || (length >= MIN_SIZE && length <= MAX_SIZE);

  const handleWidthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      onWidthChange(null);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        onWidthChange(num);
      }
    }
  };

  const handleLengthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      onLengthChange(null);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        onLengthChange(num);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <fieldset>
        <legend className="text-2xl font-bold text-gray-900 mb-2">
          מידות בסנטימטרים{" "}
          <span className="text-red-600" aria-label="שדה חובה">
            *
          </span>
        </legend>
        <p className="text-gray-600 mb-6" id="dimensions-description">
          הזינו את המידות המדויקות של הלוח הרצוי. וודאו שהמידות נמדדו בצורה
          נכונה.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Width Input */}
          <div>
            <label
              htmlFor="width-input"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              רוחב (ס"מ){" "}
              <span className="text-red-600" aria-label="שדה חובה">
                *
              </span>
            </label>
            <input
              id="width-input"
              type="number"
              min={MIN_SIZE}
              max={MAX_SIZE}
              value={width ?? ""}
              onChange={handleWidthInput}
              placeholder="הקלידו רוחב"
              required
              aria-invalid={!isWidthValid}
              aria-describedby={
                !isWidthValid ? "width-error" : "dimensions-description"
              }
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                !isWidthValid
                  ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                  : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
              } focus:outline-none focus:ring-4`}
              dir="ltr"
              style={{ fontSize: "16px" }}
            />
            <div
              id="width-error"
              role="alert"
              aria-live="polite"
              className={`mt-2 ${
                !isWidthValid ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              {!isWidthValid && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>מידה לא תקינה!</span>
                  </div>
                  <p className="text-red-800 text-sm mb-2">
                    הרוחב חייב להיות בין {MIN_SIZE} ל-{MAX_SIZE} ס"מ
                  </p>
                  {width !== null && (
                    <button
                      type="button"
                      onClick={() => {
                        const corrected = Math.max(
                          MIN_SIZE,
                          Math.min(MAX_SIZE, width)
                        );
                        onWidthChange(corrected);
                      }}
                      className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                    >
                      תקן ל-{Math.max(MIN_SIZE, Math.min(MAX_SIZE, width))} ס"מ
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Length Input */}
          <div>
            <label
              htmlFor="length-input"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              אורך (ס"מ){" "}
              <span className="text-red-600" aria-label="שדה חובה">
                *
              </span>
            </label>
            <input
              id="length-input"
              type="number"
              min={MIN_SIZE}
              max={MAX_SIZE}
              value={length ?? ""}
              onChange={handleLengthInput}
              placeholder="הקלידו אורך"
              required
              aria-invalid={!isLengthValid}
              aria-describedby={
                !isLengthValid ? "length-error" : "dimensions-description"
              }
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                !isLengthValid
                  ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                  : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
              } focus:outline-none focus:ring-4`}
              dir="ltr"
              style={{ fontSize: "16px" }}
            />
            <div
              id="length-error"
              role="alert"
              aria-live="polite"
              className={`flex items-center gap-2 mt-2 text-red-600 text-sm min-h-[24px] ${
                !isLengthValid ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              {!isLengthValid && (
                <>
                  <AlertCircle
                    className="w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    ניתן להזמין מידות בין {MIN_SIZE} ל-{MAX_SIZE} ס"מ.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </fieldset>

      {width && length && isWidthValid && isLengthValid && (
        <div
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
          role="status"
          aria-live="polite"
        >
          <p className="text-green-800 flex items-center gap-2">
            <span className="text-green-600 text-xl" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>שטח כולל:</strong> {((width * length) / 10000).toFixed(2)}{" "}
              מ"ר
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
