import { WorkType } from "@/types";
import Link from "next/link";

export default function WorkCard({ work }: { work: WorkType }) {
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        {work.url && (
          <Link className="link" href={work.url}>
            {work.companyName}
          </Link>
        )}
        {!work.url && <p className="link">{work.companyName}</p>}
        <p>{work.jobTitle}</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <span className="text-gray-400">
          {work.startDate &&
            Intl.DateTimeFormat("en", {
              month: "short",
              year: "numeric",
            }).format(new Date(work.startDate))}{" "}
          -{" "}
          {work.endDate
            ? Intl.DateTimeFormat("en", {
                month: "short",
                year: "numeric",
              }).format(new Date(work.endDate))
            : "Present"}
        </span>
      </div>
    </div>
  );
}
