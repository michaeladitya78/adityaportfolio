// lib/utils.ts
// Shared utility functions used throughout the project.
// Currently exports `cn`, the standard Tailwind class merging helper.

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names safely.
 * Combines clsx (conditional class logic) with tailwind-merge (deduplication)
 * so conflicting utility classes are resolved correctly (e.g., p-2 + p-4 → p-4).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
