import * as React from "react";
import { useSidebarStore } from "../store/sidebarStore";

interface ISidebarOverlayProps {}

const SidebarOverlay: React.FunctionComponent<ISidebarOverlayProps> = (props) => {
  const setCollapsed = useSidebarStore((state) => state.setCollapsed);
  return (
    <div
      onClick={() => setCollapsed(false)}
      className="fixed inset-0 z-[201] transition-opacity ease-linear duration-300 opacity-80 md:hidden md:z-auto md:opacity-100 bg-[rgb(15_23_42_/_0.3)]"
    />
  );
};

export default SidebarOverlay;
