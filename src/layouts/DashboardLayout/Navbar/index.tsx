"use client";
import * as React from "react";
import { Navbar as NavbarNextUi } from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";
import BurgerButton from "./BurguerButton";

interface INavbarProps {
  children?: React.ReactNode;
}

const collapseItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const {} = props;
  return (
    <div className="relative flex flex-col flex-[1_1_auto] overflow-y-auto overflow-x-auto">
      <NavbarNextUi
        isBordered
        css={{
          borderBottom: "1px solid $border",
          justifyContent: "flex-end",
          width: "100%",
          "@md": {
            justifyContent: "flex-end",
          },

          "& .nextui-navbar-container": {
            border: "none",
            maxWidth: "100%",

            gap: "$6",
            "@md": {
              justifyContent: "flex-end",
            },
          },
        }}
      >
        <NavbarNextUi.Content showIn={"md"}>
          <BurgerButton />
        </NavbarNextUi.Content>
        <NavbarNextUi.Content>
          <UserDropdown />
        </NavbarNextUi.Content>

        <NavbarNextUi.Collapse>
          {collapseItems.map((item, index) => (
            <NavbarNextUi.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              {item}
            </NavbarNextUi.CollapseItem>
          ))}
        </NavbarNextUi.Collapse>
      </NavbarNextUi>
      {props.children}
    </div>
  );
};

export default Navbar;
