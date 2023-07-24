import * as React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useSidebarStore } from "../store/sidebarStore";

interface ISidebarWrapperProps {
  children?: React.ReactNode;
}

const SidebarWrapper: React.FunctionComponent<ISidebarWrapperProps> = (props) => {
  const {} = props;
  const { collapsed } = useSidebarStore();
  const className = classNames(
    "bg-black transition-transform duration-200 ease-linear",
    "h-full fixed translate-x-[-100%]  py-6 px-4",
    "w-[16rem] shrink-0 z-[202] overflow-y-auto border-r border-[#262626]",
    "md:mr-0 md:flex flex-col md:static md:h-screen md:translate-x-0",
    collapsed ? "!ml-0 !inherit !translate-x-0" : ""
  );

  return <Wrapper className={className}>{props.children}</Wrapper>;
};

export default SidebarWrapper;

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* export const SidebarWrapper = styled('div', {
    'flexDirection': 'column',
    'py': '$10',
    'px': '$6',
    '@md': {
       marginLeft: '0',
       display: 'flex',
       position: 'static',
       height: '100vh',
       transform: 'translateX(0)',
    },
    'variants': {
       collapsed: {
          true: {
             display: 'inherit',
             marginLeft: '0 ',
             transform: 'translateX(0)',
          },
       },
    },
 }); */
