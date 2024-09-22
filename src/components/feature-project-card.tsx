import { ProjectType } from "@/types";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import ProjectTypeBadge from "./project-type-badge";

export function FeaturedProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2 h-6">
          <Link className="link truncate" href={`/projects/${project.slug}`}>
            {project.name}
          </Link>

          <ProjectTypeBadge project={project} />
        </div>
        <p className="text-slate-700 dark:text-slate-300 pt-1">
          {project.tagline}
        </p>
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
