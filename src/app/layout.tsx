import "../styles/index.css";
import "../styles/buttons.styles.css";
import "../styles/form.styles.css";
import "../styles/table.styles.css";
import "react-datepicker/dist/react-datepicker.css";
import type { Metadata } from "next";
import { logoSite } from "@/utils";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Tryo",
  description: "Tryo",
  icons: logoSite,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
