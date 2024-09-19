"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon, SunMediumIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="max-w-3xl m-auto p-6 flex items-center justify-between">
        <Link href="/">
          <span>LOGO</span>
        </Link>

        <div className="flex gap-4">
          <Link href={"#"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"#"}>Projects</Link>
        </div>

        <div>
          <div className="relative">
            <motion.div
              className={cn(
                "size-4 -z-10 bg-white absolute rounded-full left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2",
                { "bg-slate-900": darkMode }
              )}
              transition={{ duration: 0.2 }}
              animate={{
                scale: 50,
              }}
            />

            <Button
              onClick={() => {
                setDarkMode((state) => !state);
                setTheme(darkMode ? "light" : "dark");
              }}
              size="icon"
              variant="outline"
              className="rounded-full cursor-pointer dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-200"
            >
              <AnimatePresence>
                {darkMode ? (
                  <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 90 }}
                    exit={{ rotate: 90 }}
                  >
                    <SunMediumIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: -45, opacity: 1 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 0 }}
                  >
                    <MoonIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
