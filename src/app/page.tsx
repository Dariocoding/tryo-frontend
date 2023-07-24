import HeroHome from "./home/HeroHome";
import WhatIsTryo from "./home/WhatIsTryo";
import HowItWorks from "./home/HowItWorks";
import StartNow from "./home/StartNow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <div className="flex-grow">
        <HeroHome />
        <WhatIsTryo />
        <HowItWorks />
        <StartNow />
      </div>
      <Footer />
    </div>
  );
}
