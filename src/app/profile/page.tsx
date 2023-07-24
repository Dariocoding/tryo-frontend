import DashboardLayout from "@/layouts/DashboardLayout";
import { logoSite } from "@/utils";
import { Metadata } from "next";
import TileDataUser from "./TileDataUser";
import HeaderProfile from "./Header";

export const metadata: Metadata = {
  title: "Tryo - Profile",
  description: "Tryo - Profile",
  icons: logoSite,
};

export default function profilePage() {
  return (
    <DashboardLayout>
      <HeaderProfile />
      <TileDataUser />
    </DashboardLayout>
  );
}
