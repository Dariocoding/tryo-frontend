import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import WrapperForms from "./WrapperForms";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function ApiPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Merchant API"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          { label: "Merchant API", icon: findSidebarItem(validPaths.api.path)?.icon?.({}) },
        ]}
        icon={findSidebarItem(validPaths.api.path)?.icon?.({})}
      >
        <WrapperForms />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
