import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneTime",
  description: "OneTime for shortening url",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
