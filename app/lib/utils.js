import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names and resolves Tailwind conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}