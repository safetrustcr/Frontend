<<<<<<< HEAD
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
=======
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
>>>>>>> upstream/develop

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
