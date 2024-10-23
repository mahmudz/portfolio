import Link from "next/link";

function AvailableForWork() {
  return (
    <Link
      className="flex items-center gap-2 px-3 rounded-full border w-fit m-0 dark:bg-gray-900 dark:hover:border-gray-600 cursor-pointer"
      href={`mailto:hello@mahmudz.dev`}
    >
      <div className="size-2 rounded-full bg-green-400 relative">
        <div className="size-2 bg-green-500 animate-ping z-10 absolute rounded-full"></div>
      </div>
      <span className="text-sm text-muted-foreground">Available for work</span>
    </Link>
  );
}

export default AvailableForWork;
