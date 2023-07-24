import { Metadata } from "next";

export interface ValidPath {
  path: string;
  fnPath?(param: (string | number)[]): string;
}

interface ValidPaths {
  home: ValidPath;
  login: ValidPath;
  signup: ValidPath;
  dashboard: ValidPath;
  api: ValidPath;
  merchant: ValidPath;
  transactions: ValidPath;
  withdrawl: ValidPath;
  logs: ValidPath;
  users: ValidPath;
  profile: ValidPath;
  usersCreate: ValidPath;
  usersEdit: ValidPath;
}

export const validPaths: ValidPaths = {
  home: { path: "/" },
  login: { path: "/login" },
  signup: { path: "/signup" },
  dashboard: { path: "/dashboard" },
  api: { path: "/api" },
  withdrawl: { path: "/withdrawl" },
  logs: { path: "/logs" },
  users: { path: "/users" },
  usersCreate: { path: "/users/create" },
  usersEdit: { path: "/users/edit/:id", fnPath: (arr) => `/users/edit/${arr.join("/")}` },
  transactions: { path: "/transactions" },
  merchant: { path: "/merchant" },
  profile: { path: "/profile" },
};

export const logoSite: Metadata["icons"] = [
  {
    rel: "icon",
    type: "image/ico",
    sizes: "32x32",
    url: "./favicon.ico",
  },
];
