import { type ClassValue, clsx } from "clsx";
import { ReactNode } from "react";
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

export function slugify(text: string | ReactNode) {
  return text
    ?.toString()
    .toLowerCase()
    .replaceAll(/[^-\w]+/g, "-")
    .replaceAll(/--+/g, "-")
    .replace(/^-|-$/g, "")
}