import { ProjectListCard } from "@/components/project-list-card";
import { getProjects } from "@/sanity/sanity.query";

export default async function ProjectsIndexPage() {
  const projects = await getProjects();

  return (
    <section>
      <h2 className="font-semibold pb-2">Projects</h2>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <ProjectListCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
