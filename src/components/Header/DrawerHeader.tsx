"use client";
import { validPaths } from "@/utils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useSession } from "next-auth/react";
import { Else, If, Then } from "react-if";

interface IDrawerHeaderProps {
  isOpen: boolean;
  onClose(): void;
}

const DrawerHeader: React.FunctionComponent<IDrawerHeaderProps> = (props) => {
  const { isOpen, onClose } = props;
  const { data: session } = useSession();

  return (
    <div className="lg:hidden block">
      <div
        className={classNames(
          "fixed z-40 h-screen p-4 overflow-y-auto bg-slate-800 w-full left-0 top-0 transition-transform",
          isOpen ? "transform-none" : "-translate-x-full"
        )}
        aria-labelledby="drawer-label"
      >
        <h5 className="inline-flex items-center mb-4 text-base font-semibold">
          <Image src={"/images/logo-completo.png"} alt={"Logo tryo"} width={100} height={50} />
        </h5>

        <button
          type="button"
          aria-controls="drawer-example"
          onClick={onClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <ul className="flex flex-grow flex-col lg:justify-end space-y-2 mt-12 justify-center items-center overflow-auto text-white">
          <li>
            <Link href={validPaths.home.path}>
              <span className={link}>Inicio </span>
            </Link>
          </li>

          <If condition={session === null}>
            <Then>
              <li>
                <Link href={validPaths.login.path}>
                  <span className={link} onClick={() => onClose()}>
                    Iniciar sesión{" "}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={validPaths.signup.path}>
                  <span className={link} onClick={() => onClose()}>
                    Registrarse{" "}
                  </span>
                </Link>
              </li>
            </Then>
            <Else>
              <li>
                <Link href={validPaths.dashboard.path}>
                  <span className={link} onClick={() => onClose()}>
                    Dashboard{" "}
                  </span>
                </Link>
              </li>
            </Else>
          </If>
        </ul>
      </div>
    </div>
  );
};

export default DrawerHeader;

const link = classNames(
  "px-2",
  "py-1",
  "flex",
  "items-center",
  "transition",
  "duration-150",
  "ease-in-out",
  "text-lg",
  "font-medium",
  "cursor-pointer",
  "btn btn-sm"
);
