import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import FormSignUp from "./FormSignUp";
import { Metadata } from "next";
import { logoSite } from "@/utils";

export const metadata: Metadata = {
  title: "Tryo - SignUp",
  description: "Tryo",
  icons: logoSite,
};

export default function SignUp() {
  const onSubmit = () => {};
  return (
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
      <FormSignUp />
    </AuthLayout>
  );
}
