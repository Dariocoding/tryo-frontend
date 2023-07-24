import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import TableTransactions from "./TableTransactions";

export default function TransactionsPage() {
  return (
    <WrapperDashboard
      title={"Transactions"}
      breadcrumb={[
        {
          label: "Dashboard",
          path: validPaths.dashboard.path,
          icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
        },
        { label: "Transactions", icon: findSidebarItem(validPaths.transactions.path)?.icon?.({}) },
      ]}
      icon={findSidebarItem(validPaths.transactions.path)?.icon?.({})}
    >
      <TableTransactions />
    </WrapperDashboard>
  );
}
