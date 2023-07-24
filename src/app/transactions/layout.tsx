import type { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";
import { logoSite } from "@/utils";

export const metadata: Metadata = {
  title: "Tryo - Transactions",
  description: "Tryo - Transactions",
  icons: logoSite,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
