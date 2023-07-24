import DashboardLayout from "@/layouts/DashboardLayout";
import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import { Metadata } from "next";
import TableLogs from "./TableLogs";

export const metadata: Metadata = {
  title: "Tryo - Logs",
  description: "Tryo - Logs",
  icons: logoSite,
};

export default function LogsPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Logs"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          { label: "Logs", icon: findSidebarItem(validPaths.logs.path)?.icon?.({}) },
        ]}
        icon={findSidebarItem(validPaths.logs.path)?.icon?.({})}
      >
        <TableLogs />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
