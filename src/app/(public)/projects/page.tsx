import { FeaturedProjectCard } from "@/components/feature-project-card";
import { getProjects } from "@/sanity/sanity.query";

export default async function ProjectsIndexPage() {
  const projects = await getProjects();

  return (
    <section>
      <h2 className="font-semibold">Projects</h2>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <FeaturedProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
