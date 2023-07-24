"use client";
import ButtonFormik from "@/components/@forms/Button";
import InputFormik from "@/components/@forms/Input";
import { Form, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { FaSave } from "react-icons/fa";

interface IFormUpdateUrlCallbackProps {}

const FormUpdateUrlCallback: React.FC<IFormUpdateUrlCallbackProps> = (props) => {
  const {} = props;

  const INITIAL_VALUES = {
    urlCallBackDeposit: "",
    headerDeposit: "",
  };

  const onSubmit = (values: typeof INITIAL_VALUES, actions: FormikHelpers<any>) => {
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      <Form className="tile !p-0">
        <div className="p-4 border-b border-slate-700 mb-3">
          <h4 className="mb-0">URL CALLBACK</h4>
        </div>
        <div className="p-4">
          <div className="grid lg:grid-cols-2 gap-3 form-group">
            <InputFormik
              name="urlCallBackDeposit"
              label={"URL Callback Deposit"}
              classNameInput="form-control-sm"
              className="w-full !mb-0"
            />

            <InputFormik
              name="headerDeposit"
              label={"URL Callback Withdraw"}
              classNameInput="form-control-sm"
              className="w-full !mb-0"
            />
          </div>

          <ButtonFormik className="btn-secondary btn-sm gap-1" full>
            <FaSave /> Update URL Callback
          </ButtonFormik>
        </div>
      </Form>
    </Formik>
  );
};

export default FormUpdateUrlCallback;
