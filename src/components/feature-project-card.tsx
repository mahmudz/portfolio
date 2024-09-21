import { ProjectType } from "@/types";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export function FeaturedProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        <Link className="link" href={`/projects/${project.slug}`}>
          {project.name}
        </Link>
        <p className="text-slate-700 dark:text-slate-300">{project.tagline}</p>
      </div>

      <div className="hover:translate-x-1 transition">
        {project.projectUrl && (
          <Link
            className="link transform relative"
            href={project.projectUrl}
            aria-label={`Visit ${project.projectUrl}`}
            target="_blank"
          >
            <ArrowUpRightIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
