"use client";
import * as React from "react";
import { useSidebarStore } from "../store/sidebarStore";
import SidebarOverlay from "./SidebarOverlay";
import SidebarWrapper from "./Wrapper";
import SidebarHeader from "./SidebarHeader";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DataSidebar, dataSidebar } from "../data/data";
import SidebarMenu from "../items/SidebarMenu";
import { Case, Else, If, Switch, Then } from "react-if";
import SidebarItem from "../items/SidebarItem";
import SidebarFooter from "./SidebarFooter";

interface ISidebarProps {}

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const { collapsed } = useSidebarStore();
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <aside className="h-screen z-[202] sticky top-0">
          <If condition={collapsed}>
            <Then>
              <SidebarOverlay />
            </Then>
          </If>
          <SidebarWrapper>
            <div className="flex gap-4 items-center px-6">
              <SidebarHeader />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-2 mt-8 px-4">{dataSidebar.map(renderSidebar)}</div>
            </div>
            <SidebarFooter />
          </SidebarWrapper>
        </aside>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

const renderSidebar = (item: DataSidebar, key: number) => (
  <Switch key={key}>
    <Case condition={item.type === "item"}>
      <SidebarItem item={item} />
    </Case>
    <Case condition={item.type === "menu"}>
      <SidebarMenu title={item.title}>
        {item.menu?.map?.((menuItem, idx: number) => (
          <React.Fragment key={idx}>
            {menuItem.type === "item" && <SidebarItem item={menuItem} key={idx} />}
            {menuItem.type === "item-collapse" && null}
          </React.Fragment>
        ))}
      </SidebarMenu>
    </Case>
    <Case condition={item.type === "item-collapse"}></Case>
  </Switch>
);

export default Sidebar;
