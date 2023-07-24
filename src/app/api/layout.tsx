import type { Metadata } from "next";
import { logoSite } from "@/utils";

export const metadata: Metadata = {
  title: "Tryo - API",
  description: "Tryo - API",
  icons: logoSite,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
