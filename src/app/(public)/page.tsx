import { ArticleListCard } from "@/components/article-list-card";
import { FeaturedProjectCard } from "@/components/feature-project-card";
import WorkCard from "@/components/work-card";
import {
  getProfile,
  getFeaturedProjects,
  getWorks,
  getArticles,
} from "@/sanity/sanity.query";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function Home() {
  const profile = await getProfile();
  const articles = await getArticles();
  const works = await getWorks();
  const projects = await getFeaturedProjects();

  return (
    <div className="flex flex-col gap-8">
      <article className="prose dark:prose-invert">
        <p>
          Hi, I'm <em>{profile.nickName}</em> 👋.
        </p>
        <PortableText value={profile.shortBio} />
      </article>

      <section>
        <div className="pb-2 flex justify-between items-center">
          <p className="font-semibold">Projects</p>
          <Link className="link" href={"/projects"}>
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="font-semibold pb-2">Work</h4>

        <div className="space-y-2">
          {works.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </section>

      <section>
        <div className="pb-2 flex justify-between items-center">
          <h4 className="font-semibold">Writings</h4>
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
    </div>
  );
}
