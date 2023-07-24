import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import TableWithdrawl from "./TableWithdrawl";

export default function WithdrawlPage() {
  return (
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
  );
}
