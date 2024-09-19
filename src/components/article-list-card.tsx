import { ArticleType } from "@/types";
import Link from "next/link";

export function ArticleListCard({ article }: { article: ArticleType }) {
  return (
    <div className="py-2 dark:text-slate-300">
      <div>
        <Link className="link" href={`/articles/${article.slug}`}>
          {article.title}
        </Link>
        <p>{article.time_requires_to_read}</p>
      </div>
    </div>
  );
}
