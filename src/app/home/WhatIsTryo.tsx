import { imagesPaths } from "@/utils";
import Image from "next/image";
import * as React from "react";

interface IWhatIsTryoProps {}

const WhatIsTryo: React.FunctionComponent<IWhatIsTryoProps> = (props) => {
  const {} = props;
  return (
    <div className="relative" id="what-is-tryo">
      <section className={"bg-[#ffacb4]"}>
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:py-28 py-14">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <span className="relative lg:w-96 lg:h-96 mx-auto lg:mt-0 mt-6 w-72 h-72 lg:order-1 order-2">
              <Image
                {...imagesPaths.exchangeIllustration}
                width={300}
                height={300}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            <div className="text-gray-50 text-lg lg:order-2 order-1">
              <h4 className="text-2xl md:text-6xl font-semibold leading-tighter tracking-tighter mb-6 leading-10">
                ¿Qué es Tryo?
              </h4>
              <p>
                Un gateway de pagos con poder cripto que te permite administrar tus pagos en Brasil
                desde el mundo.
              </p>
              <br />
              <p>
                Un sistema de administración que permite recibir pagos en reales desde tu web (Vía
                Pix) y convertirlos a cripto al instante.
              </p>
              <br />
              <p>
                Con un simple y fácil sistema de monitoreo de pagos, pagos a usuarios,
                transferencias y conversiones a cualquier moneda del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:block hidden">
        <span className="absolute xl:top-28 top-16 xl:-left-12 -left-14">
          <Image
            src={"/images/out-of-box/5.png"}
            className={"xl:w-48 w-40"}
            width={175}
            height={175}
            alt={""}
          />
        </span>
      </div>
    </div>
  );
};

export default WhatIsTryo;
