import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import { FaChevronLeft, FaUserPlus } from "react-icons/fa";
import FormUser from "../FormUser";
import Link from "next/link";

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
