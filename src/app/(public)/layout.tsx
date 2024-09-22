import NavLogo from "@/components/nav-logo";
import Link from "next/link";

export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      <nav className="max-w-3xl pt-10 px-6 m-auto flex justify-between items-center">
        <NavLogo />

        <div className="flex gap-4">
          <Link href="/about" className="link">
            /about
          </Link>
          <Link href="/projects" className="link">
            /projects
          </Link>
          <Link href="/articles" className="link">
            /articles
          </Link>
        </div>
      </nav>
      <div className="max-w-3xl py-10 px-6 m-auto">{children}</div>
    </main>
  );
}
