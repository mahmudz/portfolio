import { FeaturedProjectCard } from "@/components/feature-project-card";
import { getFeaturedProjects } from "@/sanity/sanity.query";
import Link from "next/link";

export default async function ProjectsSection() {
  const projects = await getFeaturedProjects();

  return (
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
  );
}
