import AuthLayout from "@/layouts/AuthLayout";
import { logoSite, validPaths } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - Login",
  description: "Tryo",
  icons: logoSite,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AuthLayout
          config={{
            subtitle: "Ingresa a la plataforma",
            title: "Inicia sesión",
            areYouLogin: {
              text: "¿No estás registrado?",
              textLink: "¡Regístrate!",
              link: validPaths.signup.path,
            },
          }}
        >
          {children}
        </AuthLayout>
      </body>
    </html>
  );
}
