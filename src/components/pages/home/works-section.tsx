import WorkCard from "@/components/work-card";
import { getWorks } from "@/sanity/sanity.query";

export default async function WorksSection() {
  const works = await getWorks();

  return (
    <section>
      <div className="pb-4 flex justify-between items-center gap-3">
        <h4 className="font-semibold">Work</h4>
        <div className="h-px flex-1 dark:bg-gray-800 bg-border"></div>
      </div>

      <div className="space-y-2">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
