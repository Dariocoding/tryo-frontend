import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import TableUsers from "./TableUsers";

export default function UsersPage() {
  return (
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
  );
}
