import { FaUserEdit } from "react-icons/fa";
import FormUser from "../../FormUser";
import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Tryo - Users - Edit",
  description: "Tryo - Users - Edit",
  icons: logoSite,
};

export default function EditUserPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Edit user"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          {
            label: "Users",
            icon: findSidebarItem(validPaths.users.path)?.icon?.({}),
            path: validPaths.users.path,
          },
          {
            label: "Edit user",
            icon: <FaUserEdit />,
          },
        ]}
        icon={<FaUserEdit />}
      >
        <FormUser />
      </WrapperDashboard>
    </DashboardLayout>
  );
}
