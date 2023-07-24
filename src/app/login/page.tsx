import AuthLayout from "@/layouts/AuthLayout";
import { logoSite, validPaths } from "@/utils";
import { Metadata } from "next";
import React from "react";
import FormLogin from "./FormLogin";

export const metadata: Metadata = {
  title: "Tryo - Login",
  description: "Tryo",
  icons: logoSite,
};

export default function Login() {
  const onSubmit = () => {};
  return (
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
      <FormLogin />
    </AuthLayout>
  );
}
