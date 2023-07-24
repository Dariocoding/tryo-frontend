import { imagesPaths } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type AuthLayoutConfig = {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  areYouLogin: {
    text: React.ReactNode;
    link: string;
    textLink: React.ReactNode;
  };
};

interface IAuthLayoutProps {
  children?: React.ReactNode;
  config: AuthLayoutConfig;
}

const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
  const { children, config } = props;
  const { subtitle, title, areYouLogin } = config;
  return (
    <div className="auth-background flex flex-col min-h-screen md:p-8">
      <div className="p-8 mb-14">
        <Link href={"/"}>
          <h1 className="text-gray-100 text-3xl font-medium tracking-widest inline">
            <Image
              {...imagesPaths.logoFull}
              width={80}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
          </h1>
        </Link>
      </div>
      <div className="p-8 md:w-9/12 w-full mx-auto flex text-center flex-col justify-center">
        <h3 className="text-gray-300 uppercase text-sm font-bold mb-2">{subtitle}</h3>
        <h1 className="md:text-6xl text-4xl text-white font-bold mb-2">
          {title}
          <span className="text-cyan-500">.</span>
        </h1>
        <span className="text-gray-300 font-medium">
          {areYouLogin.text}{" "}
          <Link href={areYouLogin.link} className="text-cyan-500 hover:underline">
            {areYouLogin.textLink}
          </Link>
        </span>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
