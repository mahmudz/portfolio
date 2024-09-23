"use client";

import { FeaturedProjectCard } from "@/components/feature-project-card";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectsIndexPage() {
  const [loading, setLoading] = useState(false);
  const [lastId, setLastId] = useState<string | null>("");
  const [projects, setProjects] = useState<ProjectType[]>([]);

  async function loadProjects() {
    setLoading(true);

    await setTimeout(() => {}, 5000);
    const results = await getProjects(lastId);

    if (results.length > 0) {
      setProjects((state) => [...state, ...results]);
      setLastId(() => results[results.length - 1]._id);
    } else {
      setLastId(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section>
      <h2 className="font-semibold pb-2">Projects</h2>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <FeaturedProjectCard key={index} project={project} />
        ))}
      </div>

      {lastId != null && (
        <div className="flex justify-center pt-6">
          <button
            onClick={loadProjects}
            className="link px-4 py-2 flex gap-2 items-center"
          >
            {loading && <Loader2Icon size={18} className="animate-spin" />} Load
            More
          </button>
        </div>
      )}
    </section>
  );
}
