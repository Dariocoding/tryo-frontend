import * as React from "react";
import styled from "styled-components";
import colors from "tailwindcss/colors";
import { useSidebarStore } from "../store/sidebarStore";

interface IBurgerButtonProps {}

const BurgerButton: React.FunctionComponent<IBurgerButtonProps> = (props) => {
  const {} = props;
  const { collapsed, setCollapsed } = useSidebarStore();
  const toggleCollapse = () => setCollapsed(!collapsed);
  return (
    <StyledBurgerButton className="md:!hidden" onClick={toggleCollapse}>
      <div />
      <div />
    </StyledBurgerButton>
  );
};

export default BurgerButton;

const StyledBurgerButton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 202;
  &:focus {
    outline: none;
  }

  & div {
    width: 22px;
    height: 1px;
    background-color: ${colors.slate[200]};
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;
    &:first-child {
      transform: translateY(-4px) rotate(0deg);
      height: 1px;
      margin-top: 10px;
    }
    &:nth-child(2) {
      transform: translateY(4px) rotate(0deg);
      height: 1px;
      margin-bottom: 10px;
    }
  }
`;

/*  const StyledBurgerButton = styled('button', {
    'position': 'absolute',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'space-around',
 
    'width': '22px',
    'height': '22px',
    'background': 'transparent',
    'border': 'none',
    'cursor': 'pointer',
    'padding': '0',
    'zIndex': '202',
    '&:focus': {
       outline: 'none',
    },
    '& div': {
       'width': '22px',
       'height': '1px',
       'background': '$accents9',
       'borderRadius': '10px',
       'transition': 'all 0.3s ease',
       'position': 'relative',
       'transformOrigin': '1px',
 
       '&:first-child': {
          transform: 'translateY(-4px) rotate(0deg)',
          height: '1px',
          marginTop: '10px',
       },
       '&:nth-child(2)': {
          transform: 'translateY(4px) rotate(0deg)',
          height: '1px',
          marginBottom: '10px',
       },
    },
    'variants': {
       open: {
          true: {
             '& div': {
                '&:first-child': {
                   marginTop: '0px',
                   transform: 'translateY(1px) rotate(45deg)',
                },
                '&:nth-child(2)': {
                   marginBottom: '0px',
                   transform: 'translateY(4px) rotate(-45deg)',
                },
             },
          },
       },
    },
 });
  
 */
