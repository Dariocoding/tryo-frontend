import * as React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = (props) => {
  const {} = props;
  return (
    <div className="flex">
      <Sidebar />
      <Navbar>{props.children}</Navbar>
    </div>
  );
};

export default DashboardLayout;
