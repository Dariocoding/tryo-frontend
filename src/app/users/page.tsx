import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import TableUsers from "./TableUsers";
import { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Tryo - Users",
  description: "Tryo - Users",
  icons: logoSite,
};

export default function UsersPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Users"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          { label: "Users", icon: findSidebarItem(validPaths.users.path)?.icon?.({}) },
        ]}
        icon={findSidebarItem(validPaths.users.path)?.icon?.({})}
      >
        <TableUsers />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
