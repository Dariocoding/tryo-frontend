import WrapperDashboard from "@/layouts/WrapperDashboard";
import Widgets from "./Widget/Widgets";
import TableDashboard from "./TableDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - Dashboard",
  description: "Tryo - Dashboard",
  icons: logoSite,
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        icon={findSidebarItem(validPaths.dashboard.path)?.icon?.({})}
        title="Dashboard"
      >
        <Widgets />
        <TableDashboard />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
