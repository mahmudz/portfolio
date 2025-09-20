import { ArticleType } from "@/types";
import Link from "next/link";

export function ArticleListCard({ article }: { article: ArticleType }) {
  return (
    <div className="py-2 flex justify-between">
      <div>
        <Link className="link" href={`/articles/${article.slug}`}>
          {article.title}
        </Link>
        <p className="text-slate-700 dark:text-slate-300">
          {article.time_requires_to_read}
        </p>
      </div>

      <time className="text-gray-500 dark:text-gray-400 text-sm">
        {Intl.DateTimeFormat("en", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(article.date))}
      </time>
    </div>
  );
}
