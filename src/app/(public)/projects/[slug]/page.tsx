import BackButton from "@/components/back-button";
import ExternalLink from "@/components/external-link";
import { getProject } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  return (
    <div>
      <nav className="flex justify-between items-center pb-6">
        <BackButton />
      </nav>

      <article className="prose max-w-none dark:prose-invert">
        <div className="bg-gray-900 border min-h-80 max-h-96 w-full overflow-hidden rounded-md flex justify-center items-center">
          {project.coverImage ? (
            <img src={project.coverImage} className="" alt="" />
          ) : (
            <h1 className="m-0">{project.name}</h1>
          )}
        </div>

        <nav className="flex justify-between items-center">
          <h4>{project.name}</h4>
          {project.projectUrl && <ExternalLink href={project.projectUrl} />}
        </nav>

        <PortableText value={project.description} />
      </article>
    </div>
  );
}
