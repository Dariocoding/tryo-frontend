import ButtonFormik from "@/components/@forms/Button";
import InputFormik from "@/components/@forms/Input";
import { Form, Formik } from "formik";
import * as React from "react";
import { FaSave } from "react-icons/fa";
import * as yup from "yup";

interface IFormProfileDataProps {}

const validationSchema = yup.object({});

const FormProfileData: React.FunctionComponent<IFormProfileDataProps> = (props) => {
  const {} = props;
  const INITIAL_VALUES = {};
  const onSubmit = () => {};
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className="grid lg:grid-cols-2 gap-x-3">
          <InputFormik name="name" placeholder="Enter name" label={"Name"} />
          <InputFormik name="email" placeholder="Enter Email" label={"Email"} />

          <InputFormik
            name="password"
            type="password"
            placeholder="Enter new password"
            label={"Password"}
          />

          <InputFormik
            name="confirmPassword"
            type="password"
            placeholder="Enter confirm password"
            label={"Confirm password"}
          />
        </div>

        <ButtonFormik full className="btn-secondary btn-sm gap-2 !mb-0">
          <FaSave /> Save
        </ButtonFormik>
      </Form>
    </Formik>
  );
};

export default FormProfileData;
