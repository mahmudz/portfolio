import { cn } from "@/lib/utils";
import { WorkType } from "@/types";
import Link from "next/link";

function formatWorkDate(date: string) {
  return Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function WorkCard({ work }: { work: WorkType }) {
  const workStart = work.startDate && formatWorkDate(work.startDate);
  const workEnd = work.endDate ? formatWorkDate(work.endDate) : "Present";

  return (
    <div className="py-2 md:flex justify-between items-center">
      <div>
        <div className="flex justify-between flex-1">
          {work.url && (
            <Link className="link" href={work.url}>
              {work.companyName}
            </Link>
          )}
          {!work.url && (
            <p className="text-amber-600 dark:text-orange-200">
              {work.companyName}
            </p>
          )}
          <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap md:hidden">
            {workStart} -{" "}
            <span
              className={cn({
                "text-green-400 uppercase": workEnd == "Present",
              })}
            >
              {workEnd}
            </span>
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-300">{work.jobTitle}</p>

        <p className="text-sm whitespace-break-spaces pr-4 text-gray-500 dark:text-gray-400">
          {work.description}
        </p>
      </div>

      <div className="md:flex justify-between items-center gap-2 hidden">
        <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {workStart} -{" "}
          <span
            className={cn({
              "text-green-400 uppercase": workEnd == "Present",
            })}
          >
            {workEnd}
          </span>
        </span>
      </div>
    </div>
  );
}
