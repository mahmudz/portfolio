import { ArticleListCard } from "@/components/article-list-card";
import { getArticles } from "@/sanity/sanity.query";

export default async function ArticleIndexPage() {
  const articles = await getArticles();

  return (
    <section>
      <h2 className="font-semibold pb-2">Articles</h2>

      <div className="space-y-2">
        {articles.length === 0 && (
          <p className="text-muted-foreground">Nothing here yet.</p>
        )}
        {articles.map((article, index) => (
          <ArticleListCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
