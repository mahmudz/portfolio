export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none dark:prose-invert prose-h1:first:mt-0">
      {children}
    </div>
  );
}
