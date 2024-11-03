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
  title: "Mahmudul Hasan | Web Expert",
  description:
    "Experienced Software Engineer specialized in web technologies. 6+ years of experience building web applications for clients across the globe, bringing digital ideas to life.",
  keywords:
    "mahmud,hasan,mahmudul hasab,mahmuddul hassan,software,engineer,engineering,developer,laravel developer,php developer,fullstack developer,javascript,typescript,react,nextjs",
  openGraph: {
    title: "Mahmudul Hasan | Software engineer passionate about solutions",
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
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID!}
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
