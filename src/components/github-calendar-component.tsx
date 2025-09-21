import ContributionGraph from "./contribution-graph";

export default function GithubCalendarComponent() {
  return (
    <section>
      <div className="pb-4 flex justify-between items-center gap-3">
        <h4 className="font-semibold">Contribution Graph</h4>
        <div className="h-px flex-1 dark:bg-gray-800 bg-border"></div>
      </div>

      <ContributionGraph />
    </section>
  );
}
