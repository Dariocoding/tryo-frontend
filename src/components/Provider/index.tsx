"use client";
import * as React from "react";
import { SessionProvider } from "next-auth/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { imagesPaths } from "@/utils";
import Image from "next/image";

interface IProviderProps {
  children?: React.ReactNode;
  className?: string;
}

const Provider: React.FunctionComponent<IProviderProps> = (props) => {
  const { className } = props;
  const router = useRouter();
  const path = usePathname();
  const [loading, setLoading] = React.useState(false);
  // To stop the first page transitioning in, unless you want that, in which case remove this bit of logic
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);

  React.useEffect(() => {
    // Bind react router navigation event to all a tags
    const onClick = (e: any) => {
      const target = e.target as HTMLElement;

      var foundTarget = target;

      if (target.tagName.toLowerCase() !== "a" && target.tagName.toLowerCase() !== "button") {
        const closestAnchor = target.closest("a");
        if (closestAnchor) {
          foundTarget = closestAnchor;
        }
      }
      const lcTagName = foundTarget.tagName.toLowerCase();

      if (lcTagName === "a" || lcTagName === "button") {
        const href = foundTarget.getAttribute("href");
        if (href && href.startsWith("/")) {
          e.preventDefault();
          if (href !== path) {
            setLoading(true);
          }
          router.push(href);
        }
      }
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [router, path]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
    setIsInitialLoading(false);
  }, [path]);

  const isLoading = !isInitialLoading && loading;

  return (
    <SessionProvider>
      <div
        className={classNames(
          "absolute top-0 h-screen flex items-center justify-center w-full bg-black",
          !isLoading && "hidden"
        )}
      >
        <Image {...imagesPaths.logoGradient} width={90} height={70} />
      </div>
      <motion.div
        style={{ height: isLoading ? "0" : "100%", ...(isLoading ? { overflow: "hidden" } : {}) }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        {props.children}
      </motion.div>
    </SessionProvider>
  );
};

export default Provider;
