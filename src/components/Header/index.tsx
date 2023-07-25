"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaBars } from "react-icons/fa";
import DrawerHeader from "./DrawerHeader";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import { imagesPaths, validPaths } from "@/utils";
import classNames from "classnames";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [top, setTop] = React.useState(true);
  const [navBarMobile, setNavBarMobile] = React.useState(false);

  // detect whether user has scrolled the page down by 10px
  React.useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <React.Fragment>
      <header
        className={classNames(
          "fixed w-full z-30 transition duration-300 ease-in-out bg-slate-800 text-white",
          !top && "shadow-lg"
        )}
      >
        <span
          onClick={() => setNavBarMobile(true)}
          className="lg:hidden cursor-pointer flex text-sm items-center absolute top-0 right-0 h-full px-4 text-black bg-[#C7FFBE]"
        >
          <FaBars size={18} />
        </span>
        <div className="max-w-[90rem] mx-auto px-2 sm:px-6 md:mt-0 mt-2">
          <div className="flex items-center md:flex-row flex-col justify-between md:h-16 lg:h-20 h-10 md:mt-0 mt-4">
            <div className="flex-shrink-0 lg:mr-4 flex lg:w-[70%] items-center lg:flex-row flex-col w-full">
              <div className="block h-full w-full lg:w-auto text-start font-semibold text-2xl lg:text-3xl ">
                <div className="flex justify-between items-center px-3">
                  <Link href={validPaths.home.path} className="relative">
                    <span className="flex items-center">
                      <span className="relative md:w-20 md:h-10 h-7 w-14">
                        <Image
                          {...imagesPaths.logoFull}
                          width={75}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              <Navigation />
            </div>

            <div className="lg:block hidden">
              <Navbar />
            </div>
          </div>
        </div>
      </header>

      <DrawerHeader onClose={() => setNavBarMobile(false)} isOpen={navBarMobile} />
    </React.Fragment>
  );
};

export default Header;
