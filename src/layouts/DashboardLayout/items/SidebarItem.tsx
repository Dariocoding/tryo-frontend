import * as React from "react";
import { DataSidebar } from "../data/data";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface ISidebarItemProps {
  item: DataSidebar;
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = (props) => {
  const { item } = props;
  const pathname = usePathname();
  const isActive = item.path === pathname;
  return (
    <Link href={item.path || ""}>
      <div
        className={classNames(
          "flex gap-4 w-full min-h-[44px] h-full items-center px-4 rounded-lg cursor-pointer transition",
          isActive &&
            "bg-blue-600 bg-opacity-30 backdrop-blur-md backdrop-filter hover:bg-opacity-50",
          !isActive &&
            "hover:bg-blue-600 hover:bg-opacity-30 hover:backdrop-blur-md hover:backdrop-filter group"
        )}
      >
        {item.icon && (
          <item.icon
            className={classNames(
              isActive && "text-blue-300",
              !isActive && "text-white group-hover:text-blue-300 transition"
            )}
          />
        )}
        <span className="font-normal text-base text-gray-100">
          {item.title}
          {/*   <Text
            span
            weight={"normal"}
            size={"$base"}
            css={{
              color: "$accents9",
            }}
          >
            {title}
          </Text> */}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;

/* import { Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { Flex } from "../styles/flex";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <NextLink href={href}>
      <Link
        css={{
          color: "$accents9",
          maxWidth: "100%",
        }}
      >
        <Flex
          onClick={handleClick}
          css={{
            gap: "$6",
            width: "100%",
            minHeight: "44px",
            height: "100%",
            alignItems: "center",
            px: "$7",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.15s ease",
            "&:active": {
              transform: "scale(0.98)",
            },
            ...(isActive
              ? {
                  bg: "$blue200",
                  "& svg path": {
                    fill: "$blue600",
                  },
                }
              : { "&:hover": { bg: "$accents2" } }),
          }}
          align={"center"}
        >
          {icon}
          <Text
            span
            weight={"normal"}
            size={"$base"}
            css={{
              color: "$accents9",
            }}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
 */
