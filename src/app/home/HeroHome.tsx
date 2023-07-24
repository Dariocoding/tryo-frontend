import { validPaths } from "@/utils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface IHeroHomeProps {}

const HeroHome: React.FunctionComponent<IHeroHomeProps> = (props) => {
  const {} = props;
  return (
    <div className="relative z-10" id="hero-home">
      <section className={classNames("overflow-hidden", "h-[650px]", "lg:h-[80vh] z-20")}>
        <span className="absolute w-full h-full bg-[url(/images/gradient-hero-home.png)] -z-10 bg-cover lg:bg-center bg-hero-mobile" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-40 pb-12 lg:pt-58 xl:pt-72 md:pt-50 md:pb-20">
            <div className="pb-12 md:pb-16">
              <h1 className="md:text-4xl text-3xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-6 md:leading-10 leading-7 text-gray-50 ">
                <span className="block mb-3">Un Gateway de pagos</span>
                <span className="block mb-3">instantáneos para sus</span>
                <span className="block">negocios en Brasil</span>
              </h1>
              <div className="max-w-3xl">
                <p className="text-xl text-gray-50 mb-10">
                  Administra tus ganancias en cripto y
                  <br /> gestioná tus pagos desde el mundo.
                </p>
                <div className="max-w-xs sm:max-w-none sm:flex">
                  <Link href={validPaths.login.path}>
                    <span className="cursor-pointer bg-primary font-bold px-4 py-3">
                      Quiero saber más
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:block hidden z-20">
        <div className="right">
          <span className="absolute xl:-top-2 top-4 right-24 z-20">
            <Image
              src={"/images/out-of-box/3-3.png"}
              className={" animate-floating xl:w-56 w-40"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-10 right-0 z-10">
            <Image
              src={"/images/out-of-box/2.png"}
              className={"xl:w-[28rem] w-[20rem]"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[4rem] xl:-right-32 -right-20 z-20">
            <Image
              src={"/images/out-of-box/1-2.png"}
              className={"xl:w-72 w-56"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[20rem] -right-16 z-20">
            <Image
              src={"/images/out-of-box/5.png"}
              className={"xl:w-72 w-56 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[28rem] xl:right-72 right-56 z-20">
            <Image
              src={"/images/out-of-box/7.png"}
              className={"xl:w-52 w-44 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[41rem] right-44 z-20 xl:inline hidden">
            <Image
              src={"/images/out-of-box/5.png"}
              className={"xl:w-52 w-40 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[15rem] right-0 z-10">
            <Image
              src={"/images/out-of-box/9.png"}
              className={"xl:w-96 w-72"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[38rem] right-16 z-20 xl:inline hidden">
            <Image
              src={"/images/out-of-box/1-2.png"}
              className={"w-32 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[50rem] -right-16 z-20 xl:inline hidden">
            <Image
              src={"/images/out-of-box/5.png"}
              className={"w-48 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
        </div>

        <div className="left">
          <span className="absolute top-[40rem] xl:-left-16 -left-12 z-20">
            <Image
              src={"/images/out-of-box/1-2.png"}
              className={"xl:w-40 w-32 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>

          <span className="absolute top-[47rem] left-28 z-10">
            <Image
              src={"/images/out-of-box/1.png"}
              className={"w-16 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[46rem] left-0 z-20  xl:inline-block hidden">
            <Image
              src={"/images/out-of-box/3.png"}
              className={"w-40 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
        </div>
      </div>

      <div className="left-mobile h-full w-full absolute top-0 -z-10 lg:hidden block">
        <div className="relative">
          <span className="absolute top-[20rem] left-0">
            <Image
              src={"/images/out-of-box-mobile/1.png"}
              className={"w-40"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[34rem] left-0">
            <Image
              src={"/images/out-of-box-mobile/5.png"}
              className={"w-16 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
        </div>
      </div>
      <div className="right-mobile h-full w-full absolute top-0 -z-10 lg:hidden block">
        <div className="relative">
          <span className="absolute top-[5rem] right-0 z-20">
            <Image
              src={"/images/out-of-box-mobile/3.png"}
              className={"w-16 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[12rem] right-0 z-10">
            <Image
              src={"/images/out-of-box-mobile/2.png"}
              className={"w-10 sm:w-28"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
          <span className="absolute top-[24rem] right-0 z-10">
            <Image
              src={"/images/out-of-box-mobile/6.png"}
              className={"w-20 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>

          <span className="absolute top-[34rem] right-0 z-10">
            <Image
              src={"/images/out-of-box-mobile/4.png"}
              className={"w-16 animate-floating"}
              alt={""}
              width={175}
              height={175}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
