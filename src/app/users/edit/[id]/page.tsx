import { FaChevronLeft, FaUserEdit } from "react-icons/fa";
import FormUser from "../../FormUser";
import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, validPaths } from "@/utils";
import Link from "next/link";

export default function EditUserPage() {
  return (
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
  );
}
