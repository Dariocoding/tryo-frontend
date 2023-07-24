import { DataSidebar, dataSidebar } from "@/layouts/DashboardLayout/data/data";

export const findSidebarItem = (path: string): DataSidebar => {
  let sidebar = dataSidebar.find((sidebar) => sidebar.path === path) as DataSidebar;

  if (!sidebar) {
    const menus = dataSidebar.filter((sidebar) => sidebar.menu);
    menus.forEach(({ menu }) => {
      const found = menu?.find((sidebar) => sidebar.path === path);
      if (found) sidebar = found;
    });
  }

  return sidebar;
};
