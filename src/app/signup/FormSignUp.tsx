"use client";
import ButtonFormik from "@/components/@forms/Button";
import InputFormik from "@/components/@forms/Input";
import { Form, Formik } from "formik";
import * as React from "react";
import * as yup from "yup";

interface IFormSignUpProps {}

const INITIAL_VALUES = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  nombres: yup.string().required("Debes colocar tu nombre"),
  apellidos: yup.string(),
  email: yup.string().required("El correo es requerido").email("Correo inválido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe ser mínimo 6 caractéres"),
});

const FormSignUp: React.FunctionComponent<IFormSignUpProps> = (props) => {
  const onSubmit = () => {};
  return (
    <Formik onSubmit={onSubmit} initialValues={INITIAL_VALUES} validationSchema={validationSchema}>
      <Form className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-3">
          <InputFormik
            name="nombres"
            placeholder="Nombre"
            classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
          />

          <InputFormik
            name="apellidos"
            placeholder="Apellidos"
            classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
          />
        </div>
        <InputFormik
          name="email"
          placeholder="Correo electrónico"
          classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
        />
        <InputFormik
          type="password"
          name="password"
          placeholder="Contraseña"
          classNameInput="!bg-[#343434] !py-3 !px-4 !text-base !border-none !text-gray-100 !rounded-xl"
        />

        <ButtonFormik className="btn-secondary btn-pill w-full">Registrarse</ButtonFormik>
      </Form>
    </Formik>
  );
};

export default FormSignUp;
