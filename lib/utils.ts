import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handlingErrorMessage(error: unknown, message: string) {
  console.error(error);
  throw new Error(message);
}
