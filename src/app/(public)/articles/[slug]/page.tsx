import BackButton from "@/components/back-button";
import { CustomPortableText } from "@/components/custom-portable-text";
import { getArticle } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";

export default async function ArticleDetails({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  return (
    <div>
      <nav className="flex justify-between items-center pb-6">
        <BackButton />
      </nav>

      <article className="prose max-w-none dark:prose-invert">
        <h3>{article.title}</h3>

        <PortableText value={article.body} components={CustomPortableText} />
      </article>
    </div>
  );
}
