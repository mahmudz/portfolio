import { ProjectType } from "@/types";
import Link from "next/link";
import SanityImage from "./ui/SanityImg";

function FeaturedProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link className="group cursor-pointer" href={`/projects/${project.slug}`}>
      <div className="rounded-md overflow-hidden">
        {project.coverImage ? (
          <SanityImage
            height={200}
            width={400}
            className="object-cover w-full h-56 group-hover:scale-105 transition"
            src={project.coverImage}
            alt=""
          />
        ) : (
          <div className="w-full h-56 bg-gray-50 dark:bg-gray-900 flex items-center justify-center group-hover:scale-105 transition text-4xl">
            {project.name}
          </div>
        )}
      </div>
      <div className="pt-2">
        <h4 className="link truncate">{project.name}</h4>
        <p className="text-slate-700 dark:text-slate-300">{project.tagline}</p>
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
