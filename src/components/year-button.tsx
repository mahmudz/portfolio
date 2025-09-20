import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-center px-2 py-1 border-b border-transparentk:hover:border-orange-700 hover:border-orange-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-secondary-color bg-secondary-color dark:text-slate-400 text-white border-orange-200"
          : "dark:bg-primary-bg dark:text-white text-slate-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
