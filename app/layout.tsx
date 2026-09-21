import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markition Tech | Custom Software & Business Systems",
  description:
    "Markition Tech designs and develops custom software, business systems, CRM, ERP, web platforms, mobile applications, and integrations that help businesses operate smarter and scale with confidence.",
  icons: {
    icon: "/favicon.ico"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
