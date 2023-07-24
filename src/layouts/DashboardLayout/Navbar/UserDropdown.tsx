import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
import { validPaths } from "@/utils";
import { signOut } from "next-auth/react";

export const UserDropdown = () => {
  const router = useRouter();

  const onAction = (e: React.Key) => {
    if (e === "profile") router.push(validPaths.profile.path);
    if (e === "logout") signOut();
  };

  return (
    <Dropdown placement="bottom-right" isBordered disableShadow>
      <Navbar.Item>
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </Dropdown.Trigger>
      </Navbar.Item>
      <Dropdown.Menu aria-label="User menu actions" onAction={onAction}>
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Dario Flores
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            zoey@example.com
          </Text>
        </Dropdown.Item>

        <Dropdown.Item key="logout" withDivider color="error">
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
