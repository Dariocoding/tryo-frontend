import WrapperDashboard from "@/layouts/WrapperDashboard";
import Widgets from "./Widget/Widgets";
import TableDashboard from "./TableDashboard";
import { findSidebarItem, validPaths } from "@/utils";

export default function DashboardPage() {
  return (
    <WrapperDashboard
      icon={findSidebarItem(validPaths.dashboard.path)?.icon?.({})}
      title="Dashboard"
    >
      <Widgets />
      <TableDashboard />
    </WrapperDashboard>
  );
}
