export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      <div className="max-w-3xl py-20 px-6 m-auto">{children}</div>
    </main>
  );
}
