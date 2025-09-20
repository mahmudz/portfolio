import { CustomPortableText } from "@/components/custom-portable-text";
import { getArticle } from "@/sanity/sanity.query";
import { Heading1 } from "lucide-react";
import { PortableText } from "next-sanity";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    return <div>Not found.</div>;
  }

  return (
    <div>
      <h1 className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-3xl text-2xl text-zinc-700 my-8">
        {article.title}
      </h1>

      <PortableText value={article.body} components={CustomPortableText} />
    </div>
  );
}
