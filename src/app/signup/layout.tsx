import AuthLayout from "@/layouts/AuthLayout";
import { logoSite } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - SignUp",
  description: "Tryo",
  icons: logoSite,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AuthLayout
          config={{
            subtitle: "Registrate en la plataforma",
            title: "Regístrate",
            areYouLogin: {
              text: "¿Ya estás registrado?",
              textLink: "¡Inicia sesión!",
              link: "/login",
            },
          }}
        >
          {children}
        </AuthLayout>
      </body>
    </html>
  );
}
