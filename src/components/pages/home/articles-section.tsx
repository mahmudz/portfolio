import { ArticleListCard } from "@/components/article-list-card";
import { getArticles } from "@/sanity/sanity.query";
import Link from "next/link";

export default async function ArticlesSection() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-8">
      {articles.length > 0 && (
        <section>
          <div className="pb-4 flex justify-between items-center gap-3">
            <h4 className="font-semibold">Writings</h4>
            <div className="h-px flex-1 bg-slate-800"></div>
            <Link className="link" href={"/articles"}>
              View all
            </Link>
          </div>

          <div className="space-y-2">
            {articles.map((article, index) => (
              <ArticleListCard key={index} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
