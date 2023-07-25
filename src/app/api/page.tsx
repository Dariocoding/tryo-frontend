import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import WrapperForms from "./WrapperForms";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - API",
  description: "Tryo - API",
  icons: logoSite,
};

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
