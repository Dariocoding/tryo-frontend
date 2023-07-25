import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import { FaUserPlus } from "react-icons/fa";
import FormUser from "../FormUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - Users - Create",
  description: "Tryo - Users - Create",
  icons: logoSite,
};

export default function CreateUserPage() {
  return (
    <WrapperDashboard
      title={"Create user"}
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
          label: "Create user",
          icon: <FaUserPlus />,
        },
      ]}
      icon={<FaUserPlus />}
    >
      <FormUser />
    </WrapperDashboard>
  );
}
