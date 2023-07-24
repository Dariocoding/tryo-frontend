import { validPaths } from "@/utils";
import Link from "next/link";
import * as React from "react";

const StartNow: React.FunctionComponent = () => {
  return (
    <section className={"bg-primary"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-black text-lg ">
          <h4 className="text-xl md:text-4xl font-semibold leading-tighter text-center tracking-tighter mb-6 leading-10">
            ¿Listo para tomar el control cripto de su negocio?
          </h4>
          <p className="text-gray-500 text-center mb-8">Administra tus negocios desde el mundo</p>

          <div className="flex justify-center items-center">
            <Link
              href={validPaths.login.path}
              className="btn shadow-none bg-slate-800 text-white  rounded-none"
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartNow;
