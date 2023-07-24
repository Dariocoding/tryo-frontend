"use client";
import classNames from "classnames";
import * as React from "react";
import { IconType } from "react-icons";
import { FaAffiliatetheme } from "react-icons/fa";
import { Else, If, Then } from "react-if";

interface IWidgetDashboardProps {
  title: string;
  icon: IconType;
  r$?: boolean;
  isBalance?: boolean;
  classNameContainer?: string;
  iconBackground: IconType;
}

const WidgetDashboard: React.FunctionComponent<IWidgetDashboardProps> = (props) => {
  const {
    title,
    icon: Icon,
    r$,
    isBalance,
    classNameContainer,
    iconBackground: IconBackground,
  } = props;
  return (
    <div
      className={classNames(
        "tile !bg-opacity-30 backdrop-blur-md backdrop-filter !rounded-md",
        classNameContainer
      )}
    >
      <div className="absolute top-0 -z-[1] right-4 bottom-0 my-auto flex items-center text-gray-600 lg:text-6xl text-3xl">
        {IconBackground && <IconBackground />}
      </div>

      <div className="flex items-center gap-x-2">
        <div className="bg-amber-500/10 flex items-center p-1 justify-center rounded-full w-7 h-7 mb-2">
          <Icon className="text-lg text-[#34d2c5]" />
        </div>
        <h3 className="text-base font-semibold uppercase tracking-wider flex items-center flex-wrap gap-1.5">
          <If condition={r$}>
            <Then>
              <span className="flex items-start gap-0.5">
                R$ 0,00 <span className="text-[0.70rem] leading-4">QTD 0</span>
              </span>
            </Then>
            <Else>R$ 0,00</Else>
          </If>
        </h3>
      </div>
      <div>
        <span className="text-xs font-normal">
          <If condition={r$}>
            <Then>Fee: R$ 0,00</Then>
          </If>
          <If condition={isBalance}>
            <Then>Available for Withdraw: 0,00</Then>
          </If>
        </span>
      </div>

      <div>
        <span className={classNames("uppercase font-normal", isBalance ? "text-xs" : "text-sm")}>
          <If condition={isBalance}>
            <Then>Available for Withdraw: 0,00</Then>
          </If>

          <If condition={r$}>
            <Then>{title}</Then>
          </If>
        </span>
      </div>
    </div>
  );
};

export default WidgetDashboard;
