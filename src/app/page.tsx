'use client';

import {ArrowRightIcon, StarIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import {Button, Horizon, config, FrameConnector, IconButton} from "nebula-ds-react-library";
import {ReactNode, useEffect} from "react";
import nebula from "../../public/nebula.png"
import vulcan from "../../public/vulcan.png"
import mattyxLogo from "../../public/mattyx.png"
import {useBreakpoint} from '@react-awesome/use-breakpoint'
import Image from "next/image";
import {FramePanel} from "@/components/FramePanel";
import Starfield from "@/components/Starfield";
import {AboutMe} from "@/components/AboutMe";
import {ShowcaseProjects} from "@/components/ShowcaseProjects";
import {Footer} from "@/components/Footer";
import {SectionContent} from "@/components/SectionContent";
import {Hero} from "@/components/Hero";

export default function Home() {

  useEffect(() => {
    console.log(config.tw.generateTailwindCompatibleTheme());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background-primary">
      <Hero/>

      <Horizon
        color={config.lightJsTokens.nbBlack}
        numLines={15}
        lineThickness={13}
        distance={15}
        distanceGrowthFactor={1.2}
        thicknessDecayFactor={0.9}
        className="w-full"
      />

      <div className="px-5 w-full my-36 flex flex-col gap-28">
        {/*projects section*/}
        <section id="projects" className="w-full">
          <SectionContent>
            <ShowcaseProjects/>
          </SectionContent>
        </section>

        <section className="w-full">
          <SectionContent className="">
            <AboutMe/>
          </SectionContent>
        </section>
      </div>

      <Horizon
        color={config.lightJsTokens.nbBlack}
        numLines={15}
        lineThickness={13}
        distance={15}
        distanceGrowthFactor={1.2}
        thicknessDecayFactor={0.9}
        className="w-full"
        inverse
      />
      <Footer className={'min-h-screen'}/>
    </main>
  )
}

