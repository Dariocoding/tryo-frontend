import * as React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { getServerSessionAuth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { validPaths } from "@/utils";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = async (props) => {
  const {} = props;
  const session = await getServerSessionAuth();

  if (!session) {
    redirect(validPaths.login.path);
  }

  return (
    <div className="flex">
      <Sidebar />
      <Navbar>{props.children}</Navbar>
    </div>
  );
};

export default DashboardLayout;
