import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import TableTransactions from "./TableTransactions";
import { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Tryo - Transactions",
  description: "Tryo - Transactions",
  icons: logoSite,
};

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Transactions"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          {
            label: "Transactions",
            icon: findSidebarItem(validPaths.transactions.path)?.icon?.({}),
          },
        ]}
        icon={findSidebarItem(validPaths.transactions.path)?.icon?.({})}
      >
        <TableTransactions />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
