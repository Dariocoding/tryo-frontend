import * as React from "react";
import { FaCircle } from "react-icons/fa";
import { StepHowItWorksData } from "./data";
import Image from "next/image";
import classNames from "classnames";

const arr = [0, 1, 2];

interface IHowItWorksStepProps {
  step: StepHowItWorksData;
  index: number;
}

const HowItWorksStep: React.FunctionComponent<IHowItWorksStepProps> = (props) => {
  const { step, index } = props;
  const isFirst = index !== 0;
  const selectedCircle = (i: number) => (i === index ? "#c7ffbe" : "#ffff");

  return (
    <div
      className={classNames(
        `grid md:grid-cols-2 grid-cols-1 section-${index} max-w-4xl mx-auto`,
        isFirst && "opacity-0"
      )}
    >
      <div className="text-gray-50 step-wrapper text-lg md:my-6 my-2 lg:mb-0 mb-4">
        <h4 className="text-5xl text-[#FFACB4] md:mt-12 mt-6 font-semibold tracking-tighter md:mb-12 mb-4 leading-10">
          {step.title}
        </h4>

        <h4 className="text-2xl text-[#FFACB4] md:mt-12 mt-6 font-semibold tracking-tighter md:mb-12 mb-4 leading-10">
          {step.subtitle}
        </h4>
        <p className="text-xl">
          {step.content.map((content, idx) => (
            <span key={idx} className={classNames("block font-semibold mb-2")}>
              {content}
            </span>
          ))}
        </p>

        <span className="flex space-x-6 md:mt-12 mt-6 md:text-base text-xs">
          {arr.map((i) => (
            <FaCircle color={selectedCircle(i)} key={i} />
          ))}
        </span>
      </div>
      <div className={"flex flex-col md:items-center space-y-24 step-wrapper md:justify-center"}>
        <span>
          <Image className={"md:w-full w-9/12 mx-auto"} {...step.image} width={300} height={300} />
        </span>
      </div>
    </div>
  );
};

export default HowItWorksStep;
