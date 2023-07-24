"use client";
import classNames from "classnames";
import * as React from "react";
import Image from "next/image";
import HowItWorksStep from "./Step";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { imagesPaths } from "@/utils";
import { infoIconsData, stepHowItWorksData } from "./data";

gsap.registerPlugin(ScrollTrigger);

interface IHowItWorksProps {}

const HowItWorks: React.FC<IHowItWorksProps> = (props) => {
  const {} = props;
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: true,

        end: () => "+=" + (ref.current?.offsetHeight || 0) * 2,
        start: 1350,
      },
    });

    tl.to(".section-0", { duration: 7, opacity: 0, display: "none" });
    tl.to(".section-1", { duration: 7, opacity: 1 });
    tl.to(".section-1", { duration: 7, opacity: 0, display: "none" });
    tl.to(".section-2", { duration: 7, opacity: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className={classNames(
        "overflow-hidden",
        "bg-[url(/images/how-it-works-gradient.png)] bg-cover bg-center"
      )}
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 relative md:mt-32">
        <div className="container-animation md:h-[60vh] h-[90vh] overflow-hidden" ref={ref}>
          {stepHowItWorksData.map((step, key) => (
            <HowItWorksStep step={step} key={key} index={key} />
          ))}
        </div>

        <h4 className="text-2xl text-center md:text-6xl md:my-20 mb-12 mt-12 font-semibold leading-tighter tracking-tighter leading-10 text-white">
          ¿Cómo usarla?
        </h4>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-x-12 gap-x-6 md:gap-y-32 gap-y-12 text-center text-white mb-24">
          {infoIconsData.map((info, idx) => (
            <div key={idx}>
              <span className="flex justify-center items-center">
                <Image {...info.image} width={100} height={100} className={"w-56 h-28"} />
              </span>
              <h6 className="text-lg font-bold">{info.title}</h6>
              <p>{info.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-center">
          <span>
            <Image
              {...imagesPaths.logoGradient}
              width={75}
              height={75}
              style={{ width: "auto", height: "auto" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
