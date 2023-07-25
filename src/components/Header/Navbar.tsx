"use client";
import Link from "next/link";
import * as React from "react";
import { useSession, signOut } from "next-auth/react";
import { If, Then, Else } from "react-if";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { validPaths } from "@/utils";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-grow ">
      <ul className="flex flex-grow justify-end flex-wrap items-center md:mt-0 mt-2">
        <If condition={Boolean(session)}>
          <Then>
            <li>
              <Link href="/profile" className="font-medium">
                <FaUser className="w-6 h-6 p-px  hover:text-primaryHover rounded-full border-2 border-primary flex-shrink-0 -mr-1" />
              </Link>
            </li>

            <li>
              <button type="button" onClick={() => signOut()} className="btn btn-sm">
                <span>Cerrar sesión</span>
                <FaSignOutAlt />
              </button>
            </li>
          </Then>
          <Else>
            <li>
              <Link
                href={validPaths.login.path}
                className="font-bold bg-white px-7 py-2 text-black flex items-center transition duration-150 ease-in-out"
              >
                Log In
              </Link>
            </li>

            <li>
              <Link href={validPaths.signup.path} className="ml-3 btn-sm">
                <span className="text-primary hover:text-primaryHover font-bold transition">
                  Sign Up
                </span>
              </Link>
            </li>
          </Else>
        </If>
      </ul>
    </nav>
  );
};

export default Navbar;
