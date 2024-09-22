import ArticlesSection from "@/components/pages/home/articles-section";
import IntroSection from "@/components/pages/home/intro-section";
import ProjectsSection from "@/components/pages/home/projects-section";
import WorksSection from "@/components/pages/home/works-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <IntroSection />

      <ProjectsSection />

      <WorksSection />

      <ArticlesSection />
    </div>
  );
}
