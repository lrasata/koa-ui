import type { DeepPartial } from "./types.ts";

export function deepMerge<T>(target: T, source: DeepPartial<T>): T {
  const output = { ...target };

  for (const key in source) {
    if (!source.hasOwnProperty(key)) continue;

    const sourceValue = source[key];
    const targetValue = target[key];

    if (
      typeof sourceValue === "object" &&
      sourceValue !== null &&
      !Array.isArray(sourceValue)
    ) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else if (sourceValue !== undefined) {
      output[key] = sourceValue as any;
    }
  }

  return output;
}
