import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import TableWithdrawl from "./TableWithdrawl";
import { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Tryo - Withdrawl",
  description: "Tryo - Withdrawl",
  icons: logoSite,
};

export default function WithdrawlPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Withdrawl"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          { label: "Withdrawl", icon: findSidebarItem(validPaths.withdrawl.path)?.icon?.({}) },
        ]}
        icon={findSidebarItem(validPaths.withdrawl.path)?.icon?.({})}
      >
        <TableWithdrawl />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
