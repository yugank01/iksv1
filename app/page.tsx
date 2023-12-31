import Image from "next/image";
import Link from "next/link";
import footerGradient from "../public/mediumGradient.png";
import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import CardsSection from "@/components/landing-page/CardsSection";
import HowItWork from "@/components/landing-page/HowItWork";
import Missions from "@/components/landing-page/Missions";
import ExploreSolutions from "@/components/landing-page/ExploreSolution";
import ToolSection from "@/components/landing-page/ToolsSection";
import SdkSection from "@/components/landing-page/sdk";
import FooterSection from "@/components/landing-page/FooterSection";
export default function Home() {
  return (
    <>
      <div className="gradient-bg text-white w-full overflow-hidden">
        <Navbar />
        <div className="w-full flex justify-end">
          <div className="grad1 blur-[140px] flex h-[1200px] w-[660px] absolute"></div>
        </div>
        <HeroSection />
        <div className="relative">
          <Image
            src="/patners.png"
            width="1500"
            height="100"
            alt="Patners of IKS"
          />
        </div>
        <div>
          <div className="grad2 absolute blur-[400px] w-full h-[800px] z-[-1]"></div>
        </div>
        <div id="hotevent">
          <h1 className="text-5xl my-20 mx-12 ">HOT EVENT</h1>
          <CardsSection />
        </div>
        <div>
          <div className="grad2 blur-[220px] absolute w-full h-[700px]"></div>
        </div>
        <div className="relative">
          <h1 className="text-6xl text-center w-full font-semibold">
            How it works
          </h1>
          <HowItWork />
        </div>
        <Missions />
        <ExploreSolutions />
        <ToolSection />
        <SdkSection />
        <FooterSection />
      </div>
    </>
  );
}
