import { type ClassValue, clsx } from "clsx";
import test from "node:test";
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
  if (text instanceof Array) {
    text = text?.[0]?.props.text
  }

  return text
    ?.toString()
    .toLowerCase()
    .replaceAll(/[^-\w]+/g, "-")
    .replaceAll(/--+/g, "-")
    .replace(/^-|-$/g, "")
}

/**
 * This function generates an array of years from the iniital year a user joins GitHub to the current year.
 * if joinYear = 2020, result = [2020, 2021, 2022, 2023, 2024] 
 */
export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}