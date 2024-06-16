'use client';

import {ArrowRightIcon, StarIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import {Button, Horizon, config, FrameConnector, IconButton} from "nebula-ds-react-library";
import {ReactNode} from "react";
import nebula from "../../public/nebula.png"
import vulcan from "../../public/vulcan.png"
import vulcanSign from "../../public/vulcan_sign.png"
import {useBreakpoint} from '@react-awesome/use-breakpoint'
import Image from "next/image";
import {FramePanel} from "@/components/FramePanel";

export default function Home() {

  const breakpoint = useBreakpoint()

  const isDesktop = Boolean(breakpoint.greater('md'))

  return (
    <main className="flex min-h-screen flex-col items-center bg-background-primary">
      <section className="h-screen w-full bg-black">
        <SectionContent className="justify-center">
          <h1 className="text-background-contrast-primary-50">
            Hi, I'm Gary
          </h1>
          <p className="text-background-contrast-primary-50">
            I’m developing web experiences
          </p>
          <Button
            className="w-fit mt-8 hover:!ring-background-contrast-primary-50 active:!ring-button-background-secondary"
            rounded="RBottom" size="M" text="check-it"/>
        </SectionContent>
      </section>
      <Horizon
        color={config.lightJsTokens.nbBlack}
        numLines={15}
        lineThickness={13}
        distance={15}
        distanceGrowthFactor={1.2}
        thicknessDecayFactor={0.9}
        className="w-full"
      />

      {/*projects section*/}
      <section className="w-full mt-28">
        <SectionContent className="!min-h-screen">

          {/*projects section title*/}
          <div className="w-full flex gap-4 items-center">
            <h2>
              Showcase
            </h2>
            <FrameConnector className="w-full" divider/>
          </div>

          {/*project*/}
          <FramePanel
            className="mt-28"
            renderHeader={<>
              <IconButton size={isDesktop ? 'M' : 'S'} variant="outlined" icon={<CodeBracketIcon/>}/>
              <Button size={isDesktop ? 'M' : 'S'} rounded="R" text="Open" rightIcon={<ArrowRightIcon/>}/>
            </>}
            renderTitle={<div className={"flex flex-wrap gap-2 items-center sm:items-end"}>
              <h3 className="text-7 sm:text-10  font-orbitron-0">Nebula Design System</h3>
              {/*<h3 className="sm:text-9 text-5">Design-System</h3>*/}
            </div>}
          >
            <div className="px-4 py-8 grid grid-cols-3 gap-10 md:grid-cols-5">
              <p className="col-span-3 text-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet, etiam vehicula odio blandit leo
                phasellus pellentesque, varius convallis gravida commodo rhoncus iaculis laoreet. Cursus augue
                congue
                interdum luctus rhoncus ac quam per lacus orci vitae pharetra litora tortor penatibus potenti morbi,
                nullam ligula dapibus inceptos netus ornare arcu facilisi ullamcorper pretium at varius est primis
                duis. Suspendisse suscipit accumsan nam purus dapibus sociosqu, torquent vulputate parturient
                inceptos
                habitant vivamus, velit massa vehicula class curabitur. Felis pellentesque ut facilisi volutpat
                nascetur sollicitudin luctus ante rhoncus varius, arcu neque platea ad eu porta molestie morbi non,
                class etiam himenaeos nisl fames egestas proin commodo aenean. Pretium malesuada ullamcorper at
                mauris
                magnis auctor ridiculus nostra egestas quisque dictumst, id dui ornare sodales ac fermentum eros
                facilisis tempor faucibus, netus nam pellentesque tempus nisi elementum torquent risus class
                sed.
              </p>

              <div className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center">
                <Image className="h-48 w-auto" src={nebula} alt="nebula logo"/>
              </div>
            </div>
          </FramePanel>

          <FramePanel
            className="mt-10"
            renderHeader={<>
              <Button size={isDesktop ? 'M' : 'S'} rounded="L" text="Open" rightIcon={<ArrowRightIcon/>}/>
              <IconButton size={isDesktop ? 'M' : 'S'} variant="outlined" icon={<CodeBracketIcon/>}/>
            </>}
            renderTitle={<h3 className="text-7 sm:text-10  font-orbitron-0">Nebula Design System</h3>}
            inverse={isDesktop}
          >
            <div className="px-4 py-8 grid grid-cols-3 gap-10 md:grid-cols-5">
              <p className="col-span-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet, etiam vehicula odio blandit leo
                phasellus pellentesque, varius convallis gravida commodo rhoncus iaculis laoreet. Cursus augue
                congue
                interdum luctus rhoncus ac quam per lacus orci vitae pharetra litora tortor penatibus potenti morbi,
                nullam ligula dapibus inceptos netus ornare arcu facilisi ullamcorper pretium at varius est primis
                duis. Suspendisse suscipit accumsan nam purus dapibus sociosqu, torquent vulputate parturient
                inceptos
                habitant vivamus, velit massa vehicula class curabitur. Felis pellentesque ut facilisi volutpat
                nascetur sollicitudin luctus ante rhoncus varius, arcu neque platea ad eu porta molestie morbi non,
                class etiam himenaeos nisl fames egestas proin commodo aenean. Pretium malesuada ullamcorper at
                mauris
                magnis auctor ridiculus nostra egestas quisque dictumst, id dui ornare sodales ac fermentum eros
                facilisis tempor faucibus, netus nam pellentesque tempus nisi elementum torquent risus class
                sed.
              </p>

              <div className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center">
                <Image className="h-48 w-auto" src={nebula} alt="nebula logo"/>
              </div>
            </div>
          </FramePanel>
        </SectionContent>
      </section>

      <section className="w-full mt-28">
        <SectionContent className="!min-h-screen">

          {/*projects section title*/}
          <div className="w-full flex gap-4 items-center">
            <h2>
              About me
            </h2>
            <FrameConnector className="w-full" divider/>
          </div>
          <div className="grid grid-cols-3 mt-14">
            <p className="col-span-full md:col-span-2">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet,
              etiam vehicula
              odio blandit leo
              phasellus pellentesque, varius convallis gravida commodo rhoncus iaculis laoreet. Cursus augue
              congue
              interdum luctus rhoncus ac quam per lacus orci vitae pharetra litora tortor penatibus potenti morbi,
              nullam ligula dapibus inceptos netus ornare arcu facilisi ullamcorper pretium at varius est primis
              duis. Suspendisse suscipit accumsan nam purus dapibus sociosqu, torquent vulputate parturient
              inceptos
              habitant vivamus, velit massa vehicula class curabitur. Felis pellentesque ut facilisi volutpat
              nascetur sollicitudin luctus ante rhoncus varius, arcu neque platea ad eu porta molestie morbi non,
              class etiam himenaeos nisl fames egestas proin commodo aenean. Pretium malesuada ullamcorper at
              mauris
              magnis auctor ridiculus nostra egestas quisque dictumst, id dui ornare sodales ac fermentum eros
              facilisis tempor faucibus, netus nam pellentesque tempus nisi elementum torquent risus class
              sed.</p>
            <div className="w-full h-full col-span-full md:col-span-1 flex justify-center items-center">
              <Image className="h-56 w-auto" src={vulcan} alt="nebula logo"/>
            </div>
          </div>
        </SectionContent>
      </section>

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
      <footer className="w-full h-full bg-black">
        <SectionContent className="grid grid-cols-3">
          <div className="col-span-full md:col-span-1 flex justify-center items-center">
            <Image className="h-56 w-auto" src={vulcanSign} alt="nebula logo"/>
          </div>
          <div className="col-span-full md:col-span-1 flex justify-center items-center">
            <h2 className="text-background-contrast-primary-50">footer content</h2>
          </div>
        </SectionContent>
      </footer>
    </main>
  )
}

const SectionContent = (props: {
  className?: string;
  children: ReactNode
}) => {
  return (
    <div className={`container mx-auto w-full flex flex-col h-full px-3 ${props.className}`}>
      {props.children}
    </div>
  )
}
