export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none prose-invert prose-h1:first:mt-0">
      {children}
    </div>
  );
}
