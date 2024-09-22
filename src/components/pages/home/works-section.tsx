import WorkCard from "@/components/work-card";
import { getWorks } from "@/sanity/sanity.query";

export default async function WorksSection() {
  const works = await getWorks();

  return (
    <section>
      <h4 className="font-semibold pb-2">Work</h4>

      <div className="space-y-2">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
