import "@/app/globals.css";
import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
