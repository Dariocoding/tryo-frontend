import * as React from "react";

interface ISidebarMenuProps {
  title: string;
  children?: React.ReactNode;
}

const SidebarMenu: React.FunctionComponent<ISidebarMenuProps> = (props) => {
  const { title } = props;
  return (
    <div className="flex flex-col gap-2 mt-2">
      <span className="text-sm font-normal leading-4 mb-1">{title}</span>
      {props.children}
    </div>
  );
};

export default SidebarMenu;
