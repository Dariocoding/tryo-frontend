import * as React from "react";
import { Avatar, Tooltip } from "@nextui-org/react";
import { FaDashcube } from "react-icons/fa";

interface ISidebarFooterProps {}

const SidebarFooter: React.FunctionComponent<ISidebarFooterProps> = (props) => {
  return (
    <div className="flex items-center justify-center gap-4 pt-8 pb-4 md:pt-0 md:pb-0 px-4">
      <Tooltip content={"Settings"} rounded color="primary">
        <FaDashcube />
      </Tooltip>
      <Tooltip content={"Adjustments"} rounded color="primary">
        <FaDashcube />
      </Tooltip>
      <Tooltip content={"Profile"} rounded color="primary">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size={"sm"} />
      </Tooltip>
    </div>
  );
};

export default SidebarFooter;
/* 
<Sidebar.Footer>
<Tooltip content={"Settings"} rounded color="primary">
  <SettingsIcon />
</Tooltip>
<Tooltip content={"Adjustments"} rounded color="primary">
  <FilterIcon />
</Tooltip>
<Tooltip content={"Profile"} rounded color="primary">
  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size={"sm"} />
</Tooltip>
</Sidebar.Footer> */
/* 
export const Footer = styled('div', {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'gap': '$12',
    'pt': '$18',
    'pb': '$8',
    '@md': {
       pt: 0,
       pb: 0,
    },
    'px': '$8',
 }); */
