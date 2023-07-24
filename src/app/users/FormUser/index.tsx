"use client";
import ButtonFormik from "@/components/@forms/Button";
import InputFormik from "@/components/@forms/Input";
import { validPaths } from "@/utils";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import * as React from "react";
import { FaChevronLeft, FaSave } from "react-icons/fa";
import * as yup from "yup";
import PermissionsUserTable from "./PermissionsTable";

interface IFormUserProps {}

export const permissions = [
  {
    title: "Dashboard",
    permissions: [{ description: "User Data", value: false, id: "user-data" }],
  },
  {
    title: "Transactions",
    permissions: [
      { description: "Date", value: false, id: "transactions-date" },
      { description: "Order ID", value: false, id: "transactions-order-id" },
      { description: "Method", value: false, id: "transactions-method" },
      { description: "Bank", value: false, id: "transactions-bank" },
      { description: "Type", value: false, id: "transactions-type" },
      { description: "Fees", value: false, id: "transactions-fees" },
      { description: "Status", value: false, id: "transactions-status" },
      { description: "Show Dashboard", value: false, id: "transactions-show-dashboard" },
      { description: "Amount", value: false, id: "transactions-amount" },
    ],
  },

  {
    title: "Info Clients",
    permissions: [{ description: "Show Info Clients", value: false, id: "info-clients-show" }],
  },
  {
    title: "Users",
    permissions: [{ description: "Create users", value: false, id: "users-create" }],
  },
  {
    title: "Page Api",
    permissions: [
      { description: "Show Page Api", value: false, id: "page-api-show" },
      { description: "Show Api Keys", value: false, id: "show-api-key" },
      {
        description: "Create/Edit Api Keys (Deposit/Withdraw)",
        value: false,
        id: "create-edit-api-keys",
      },
      {
        description: "Download Pack JSON (Postman)",
        value: false,
        id: "download-pack-json-postman",
      },
    ],
  },
  {
    title: "Page List",
    permissions: [{ description: "Export table to XLS", value: false, id: "export-table-to-xls" }],
  },
];

const FormUser: React.FunctionComponent<IFormUserProps> = (props) => {
  const {} = props;

  const INITIAL_VALUES = { name: "", email: "", password: "", permissions };

  const onSubmit = (values: any, actions: FormikHelpers<any>) => {};

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email not valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be longer than 6 characters"),
  });

  return (
    <Formik onSubmit={onSubmit} initialValues={INITIAL_VALUES} validationSchema={validationSchema}>
      <Form>
        <div className="grid lg:grid-cols-5 gap-x-4">
          <div className="lg:col-span-2">
            <div className="tile !p-0">
              <div className="p-4 border-b border-slate-700">
                <h5>User data</h5>
              </div>
              <div className="p-4">
                <div className="grid lg:grid-cols-2 gap-x-3">
                  <InputFormik name="name" label={"Name"} placeholder={"Enter name"} />
                  <InputFormik name="email" label={"Email"} placeholder={"Enter password"} />
                </div>

                <InputFormik
                  name="password"
                  type="password"
                  label={"Password"}
                  placeholder={"Enter password"}
                  className="!mb-0"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="tile !p-0">
              <div className="p-4 border-b border-slate-700">
                <h5>Choose the options available to the user</h5>
              </div>
              <PermissionsUserTable />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-1 mt-4 flex-wrap">
          <Link href={validPaths.users.path} className="btn btn-warning btn-sm gap-1">
            <FaChevronLeft /> Go Back
          </Link>
          <ButtonFormik className="btn-secondary btn-sm gap-1 lg:!px-8">
            <FaSave /> Save
          </ButtonFormik>
        </div>
      </Form>
    </Formik>
  );
};

export default FormUser;
