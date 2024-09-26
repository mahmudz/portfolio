import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormat(
  datetime: string,
  options?: Intl.DateTimeFormatOptions | undefined
) {
  return Intl.DateTimeFormat("en", options).format(new Date(datetime));
}
