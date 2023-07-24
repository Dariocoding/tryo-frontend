"use client";
import ButtonFormik from "@/components/@forms/Button";
import InputFormik, { IInputFormikProps } from "@/components/@forms/Input";
import { Form, Formik } from "formik";
import Link from "next/link";
import * as React from "react";
import * as yup from "yup";

interface IFormLoginProps {}

const INITIAL_VALUES = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const configInputDefaults: Pick<IInputFormikProps, "autoComplete" | "showError" | "showSuccess"> = {
  autoComplete: "off",
  showSuccess: false,
  showError: false,
};

const FormLogin: React.FunctionComponent<IFormLoginProps> = (props) => {
  const {} = props;
  const onSubmit = () => {};
  return (
    <Formik onSubmit={onSubmit} initialValues={INITIAL_VALUES} validationSchema={validationSchema}>
      <Form className="max-w-md mx-auto">
        <InputFormik
          name="username"
          placeholder="Correo electrónico"
          classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
          {...configInputDefaults}
        />
        <InputFormik
          type="password"
          name="password"
          placeholder="Contraseña"
          classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
          {...configInputDefaults}
        />

        <div className=" flex justify-end mb-6">
          <Link
            href="#"
            className="text-gray-400 font-medium text-end hover:text-gray-300 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <ButtonFormik className="btn-secondary btn-pill w-full">Iniciar sesión</ButtonFormik>
      </Form>
    </Formik>
  );
};

export default FormLogin;
