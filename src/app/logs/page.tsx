import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";

export default function LogsPage() {
  return (
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
    ></WrapperDashboard>
  );
}
