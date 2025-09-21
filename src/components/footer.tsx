"use client";

import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="max-w-3xl px-6 m-auto pt-10">
      <div className="flex justify-between items-center py-5 border-t">
        <small className="text-gray-500">© 2025 Mahmudul Hasan</small>
        <button
          onClick={toggleTheme}
          className="active:scale-98 relative flex size-6 cursor-pointer items-center justify-center rounded-lg transition-[colors,transform] duration-200 after:absolute after:-inset-4 after:content-[''] hover:bg-gray-200 dark:hover:bg-slate-800"
          type="button"
          aria-label="Switch theme"
        >
          <div className="size-2 rounded-full bg-gray-600 dark:bg-gray-200"></div>
        </button>
      </div>
    </footer>
  );
}
