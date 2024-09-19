import { ArticleListCard } from "@/components/article-list-card";
import { getArticles } from "@/sanity/sanity.query";

export default async function ArticleIndexPage() {
  const articles = await getArticles();

  return (
    <section>
      <h2 className="font-semibold">Articles</h2>

      <div className="space-y-2">
        {articles.map((article, index) => (
          <ArticleListCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
