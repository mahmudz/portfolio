import BackButton from "@/components/back-button";
import ExternalLink from "@/components/external-link";
import ProjectTypeBadge from "@/components/project-type-badge";
import SanityImage from "@/components/ui/SanityImg";
import { dateFormat } from "@/lib/utils";
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

      <section>
        {project.coverImage ? (
          <SanityImage
            height={480}
            width={720}
            src={project.coverImage}
            className="border rounded-md w-full"
            alt=""
          />
        ) : (
          <div className="bg-gray-50 dark:bg-gray-900 border text-4xl min-h-80 max-h-96 w-full overflow-hidden rounded-md flex justify-center items-center">
            <h1 className="m-0">{project.name}</h1>
          </div>
        )}

        <div className="py-6 space-y-2">
          <nav className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            {project.projectUrl && <ExternalLink href={project.projectUrl} />}
          </nav>

          <div className="flex justify-between">
            {project.type && (
              <div className="text-muted-foreground flex gap-2">
                Type: <ProjectTypeBadge project={project} expanded />
              </div>
            )}

            {(project.year?.start || project.year?.end) && (
              <div className="text-muted-foreground">
                Year:{" "}
                {project.year.start &&
                  dateFormat(project.year.start, { year: "numeric" })}
                {project.year.end &&
                  " - ".concat(
                    dateFormat(project.year.end, { year: "numeric" })
                  )}
              </div>
            )}
          </div>
        </div>

        <article className="prose max-w-none dark:prose-invert">
          <PortableText value={project.description} />
        </article>
      </section>
    </div>
  );
}
