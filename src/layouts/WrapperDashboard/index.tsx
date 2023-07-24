"use client";
import * as React from "react";
import { Breadcrumbs, Crumb, CrumbLink } from "./Breadcrumb.styles";
import { Text } from "@nextui-org/react";
import { If, Then } from "react-if";
import { IconType } from "react-icons";
import classNames from "classnames";

interface IBreadcrumb {
  icon?: React.ReactNode;
  label: string;
  path?: string;
}

interface IWrapperDashboardProps {
  icon: React.ReactNode | IconType | JSX.Element;
  breadcrumb?: IBreadcrumb[];
  title: React.ReactNode;
  children?: React.ReactNode;
}

const WrapperDashboard: React.FunctionComponent<IWrapperDashboardProps> = (props) => {
  const { title, breadcrumb = [], icon } = props;
  return (
    <div className="flex justify-center flex-col">
      <div className="bg-tile px-4 py-4 flex items-center justify-between flex-wrap">
        <If condition={Boolean(title || icon)}>
          <Text h4 className="flex items-center gap-1.5 text-gray-200 mb-0">
            {icon && typeof icon === "object" && <span>{icon}</span>}
            {icon && typeof icon === "function" && icon({})}
            <span>{title}</span>
          </Text>
        </If>

        <If condition={breadcrumb.length}>
          <Then>
            <Breadcrumbs className="m-0">
              {breadcrumb?.map?.((crumb, key) => (
                <Crumb key={key} className={classNames(!crumb.path && "!cursor-default")}>
                  {crumb.icon}
                  <CrumbLink href={crumb.path || "#"} className={classNames("ml-1")}>
                    {crumb.label}
                  </CrumbLink>
                  {key !== breadcrumb.length - 1 && <Text className="px-1">/</Text>}
                </Crumb>
              ))}
            </Breadcrumbs>
          </Then>
        </If>
      </div>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default WrapperDashboard;
