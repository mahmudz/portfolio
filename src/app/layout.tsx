import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mahmudul Hasan",
  description: "Maybe a good developer",
  openGraph: {
    title: "Mahmudul Hasan | Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="/favicon-light.png"
        sizes="any"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/favicon-dark.png"
        sizes="any"
        media="(prefers-color-scheme: dark)"
      />
      <script
        defer
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="490c0b19-c0bd-4841-8232-ab0ad1dd0a48"
      ></script>
      <body className={cn(font.className, "transition scroll-smooth")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
