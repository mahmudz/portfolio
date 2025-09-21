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
      className={`text-center hover:text-gray-400 px-2 py-1 border-b dark:hover:border-orange-200 hover:border-orange-400 duration-100 text-sm font-medium ${
        year === currentYear
          ? "border-orange-400 dark:border-orange-200 text-gray-400"
          : "dark:text-white"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
