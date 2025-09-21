"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { github } from "@/data/contribution-graph-theme";
import { useState, useEffect } from "react";
import YearButton from "./year-button";
import { cn, getGitHubYears } from "@/lib/utils";
import { ChartNoAxesColumnIncreasingIcon, GithubIcon } from "lucide-react";
import EmptyState from "./empty-state";
import ActivityOverview from "./activity-overview";
import Link from "next/link";

export default function ContributionGraph() {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  // Set theme only after rendering to avoid mismatch between client and server
  // https://github.com/vercel/next.js/issues/10608#issuecomment-589073831
  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear) {
    return (
      <EmptyState
        icon={<ChartNoAxesColumnIncreasingIcon />}
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="hidden md:block border dark:border-zinc-800 border-zinc-200 p-4 rounded-lg max-w-fit max-h-fit overflow-auto">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={serverTheme}
          blockSize={9}
          year={selectedYear}
        />
      </div>

      <div className="block md:hidden">
        <ActivityOverview year={selectedYear} />
      </div>

      <div className="flex flex-wrap gap-2">
        <div
          className={cn(
            `text-center px-2 py-1 border-b duration-100 text-sm font-medium`,
            {
              "border-orange-400 dark:border-orange-200 text-gray-400":
                selectedYear == undefined,
              "dark:text-white":
                selectedYear != undefined,
            }
          )}
        >
          Last year
        </div>

        {years.slice(0, 4).map((year: number) => (
          <YearButton
            key={year}
            year={year}
            currentYear={selectedYear}
            onClick={() => setSelectedYear(year)}
          />
        ))}
        <Link
          href={"https://github.com/mahmudz"}
          target="_blank"
          className={`flex justify-center items-center px-2 py-1 border-b hover:border-[#88c257] duration-100`}
        >
          <GithubIcon size={17} />
        </Link>
      </div>
    </div>
  );
}
