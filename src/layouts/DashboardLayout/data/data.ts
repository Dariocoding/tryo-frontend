import { IconType } from "react-icons/lib";
import { BsGrid1X2Fill } from "react-icons/bs";
import { AiFillApi, AiFillFileText } from "react-icons/ai";
import { FaServer, FaExchangeAlt, FaFileInvoiceDollar, FaUsers } from "react-icons/fa";
import { validPaths } from "@/utils";

export interface CollapseItem {
  path: string;
  title: string;
}

export interface DataSidebar {
  type: "menu" | "item" | "item-collapse";
  title: string;
  icon?: IconType;
  path?: string;
  menu?: DataSidebar[];
  collapsedItems?: CollapseItem[];
}

export const dataSidebar: DataSidebar[] = [
  { type: "item", title: "Dashboard", icon: BsGrid1X2Fill, path: validPaths.dashboard.path },
  {
    type: "menu",
    title: "Main menu",
    menu: [
      {
        type: "item",
        title: "Transactions",
        path: validPaths.transactions.path,
        icon: FaServer,
      },
      { type: "item", title: "Merchant", path: validPaths.merchant.path, icon: FaExchangeAlt },
      {
        type: "item",
        title: "Withdrawl",
        path: validPaths.withdrawl.path,
        icon: FaFileInvoiceDollar,
      },
      { type: "item", title: "API", path: validPaths.api.path, icon: AiFillApi },
      { type: "item", title: "Users", path: validPaths.users.path, icon: FaUsers },
      { type: "item", title: "Logs", path: validPaths.logs.path, icon: AiFillFileText },
    ],
  },
];

/* home: { path: "/" },
login: { path: "/login" },
signup: { path: "/signup" },
dashboard: { path: "/dashboard" },
api: { path: "/api" },
withdrawl: { path: "/withdrawl" },
logs: { path: "/logs" },
users: { path: "/users" },
transactions: { path: "/transactions" },
merchant: { path: "/merchant" }, */
