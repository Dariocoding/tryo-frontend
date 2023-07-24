"use client";
import InputFormik from "@/components/@forms/Input";
import { Form, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { faker } from "@faker-js/faker";
import ButtonFormik from "@/components/@forms/Button";
import { FaKey } from "react-icons/fa";

interface IFormUpdateTokenProps {}

const FormUpdateToken: React.FunctionComponent<IFormUpdateTokenProps> = (props) => {
  const {} = props;

  const INITIAL_VALUES = {
    urlProduction: faker.internet.domainName(),
    headerDeposit: faker.internet.domainName(),
  };
  const onSubmit = (values: typeof INITIAL_VALUES, actions: FormikHelpers<any>) => {
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      <Form className="tile">
        <div className="grid lg:grid-cols-2 gap-3 form-group">
          <div className="flex items-end">
            <div className="bg-gray-600 rounded-l-lg h-[36px] text-sm py-2 px-3">baseUrl</div>

            <InputFormik
              name="urlProduction"
              label={"URL PRODUCTION"}
              classNameInput="form-control-sm !rounded-l-none"
              className="w-full !mb-0"
            />
          </div>
          <div className="flex items-end">
            <div className="bg-gray-600 rounded-l-lg h-[36px] text-sm py-2 px-3">Token</div>

            <InputFormik
              name="headerDeposit"
              label={"HEADER DEPOSIT"}
              classNameInput="form-control-sm !rounded-l-none"
              className="w-full !mb-0"
            />
          </div>
        </div>

        <ButtonFormik className="btn-secondary btn-sm gap-1" full>
          <FaKey /> Update Token
        </ButtonFormik>
      </Form>
    </Formik>
  );
};

export default FormUpdateToken;
