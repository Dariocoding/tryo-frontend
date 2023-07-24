import classNames from "classnames";
import * as React from "react";
import { If, Else, Then } from "react-if";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
  const {} = props;
  const pathname = usePathname();
  const [refHero, viewHero, entryHero] = useInView({
    threshold: 0.1,
  });
  const [refWhatIsTryo, viewHowItWorks, entryHowItWorks] = useInView({ threshold: 0.1 });
  const [refHowItWorks, viewItsIncredible, entryHowItsIncredible] = useInView({
    threshold: 0.1,
  });

  const uniqueWhatIsSelected = viewHero;
  const uniqueHowItWorksIsSelected = viewHowItWorks && !viewHero;
  const uniqueWhyIsIncredibleIsSelected = !viewHowItWorks && viewItsIncredible;

  const onClickLi = (opt?: IntersectionObserverEntry) => {
    opt && opt.target.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    const heroHomeEl = document.getElementById("hero-home");
    const whatIsTryoEl = document.getElementById("what-is-tryo");
    const howItWorksEl = document.getElementById("how-it-works");

    if (heroHomeEl && whatIsTryoEl && howItWorksEl) {
      refWhatIsTryo(whatIsTryoEl);
      refHowItWorks(howItWorksEl);
      refHero(heroHomeEl);
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <nav className="flex-grow lg:ml-4 lg:w-auto w-full lg:mt-2 mt-3 z-10 lg:block hidden">
      <ul className="flex flex-grow lg:justify-end md:space-x-3 justify-center items-center overflow-auto">
        <Li selected={uniqueWhatIsSelected} onClickLi={() => onClickLi(entryHero)}>
          ¿Qué es Tryo?
        </Li>
        <Li selected={uniqueHowItWorksIsSelected} onClickLi={() => onClickLi(entryHowItWorks)}>
          ¿Cómo funciona?
        </Li>
        <Li
          selected={uniqueWhyIsIncredibleIsSelected}
          onClickLi={() => onClickLi(entryHowItsIncredible)}
        >
          ¿Por qué es increíble?
        </Li>
      </ul>
      <span className="odd"></span>
    </nav>
  );
};

interface ILiProps {
  children?: React.ReactNode;
  selected: boolean;
  onClickLi(): void;
}

const aClassName = classNames(
  "px-2",
  "py-1",
  "flex",
  "flex-col",
  "items-center",
  "transition",
  "duration-150",
  "ease-in-out",
  "lg:text-lg",
  "text-xs",
  "font-medium",
  "cursor-pointer group"
);

const Li: React.FC<ILiProps> = (props) => {
  const pathname = usePathname();
  const { selected, onClickLi } = props;

  const classAnimatedSpan = classNames(
    "transition-all h-1 bg-primary duration-300",
    { "w-full": selected },
    { "w-0 group-hover:w-full": !selected }
  );

  return (
    <li>
      <If condition={pathname === "/"}>
        <Then>
          <span onClick={onClickLi} className={aClassName}>
            <span>{props.children}</span>
            <span className={classAnimatedSpan} />
          </span>
        </Then>
        <Else>
          <Link href={"/"} className={aClassName}>
            <span>{props.children}</span>
            <span className={classAnimatedSpan} />
          </Link>
        </Else>
      </If>
    </li>
  );
};

export default Navigation;
