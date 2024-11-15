import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// WHAT DOES THIS DO???
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
