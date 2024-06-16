'use client';

import {ArrowRightIcon, StarIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import {Button, Horizon, config, FrameConnector, IconButton} from "nebula-ds-react-library";
import {ReactNode} from "react";
import nebula from "../../public/nebula.png"
import vulcan from "../../public/vulcan.png"
import mattyxLogo from "../../public/mattyx.png"
import {useBreakpoint} from '@react-awesome/use-breakpoint'
import Image from "next/image";
import {FramePanel} from "@/components/FramePanel";

export default function Home() {

  const breakpoint = useBreakpoint()

  const isDesktop = Boolean(breakpoint.greater('md'))

  const openURL = (url: string) => {
    window.open(url, '_blank')?.focus();
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-background-primary">
      <section className="h-screen w-full bg-black flex items-center justify-center md:!justify-start">
        <SectionContent className="justify-center !w-fit md:!w-full">
          <h1 className="text-background-contrast-primary-50 text-11 md:text-12 leading-10">
            Hi, I'm Matteo
          </h1>
          <p className="text-background-contrast-primary-50">
            I’m developing web experiences
          </p>
          <div className="w-full flex justify-center md:!justify-start">
            <Button
              className="w-fit mt-8 hover:!ring-background-contrast-primary-50 active:!ring-button-background-secondary"
              rounded="RBottom" size="M" text="check-it" onClick={() => {
              document?.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}/>
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
      />

      {/*projects section*/}
      <section id="projects" className="w-full mt-28">
        <SectionContent className="!min-h-screen">

          {/*projects section title*/}
          <div className="w-full flex gap-4 items-center">
            <h2 className="text-10 md:text-12">
              Showcase
            </h2>
            <FrameConnector className="w-full" divider/>
          </div>

          {/*project*/}
          <FramePanel
            className="mt-28"
            renderHeader={<>
              <IconButton
                size={isDesktop ? 'M' : 'S'} variant="outlined" icon={<CodeBracketIcon/>}
                onClick={() => openURL('https://github.com/mattyx96/nebula-ds-react-library')}
              />
              <Button
                size={isDesktop ? 'M' : 'S'} rounded="R" text="Open" rightIcon={<ArrowRightIcon/>}
                onClick={() => openURL('https://nebula-ds-react-library.irongalaxy.space/')}
              />
            </>}
            renderTitle={<div className={"flex flex-wrap gap-2 items-center sm:items-end"}>
              <h3 className="text-7 sm:text-10  font-orbitron-0">Nebula Design System</h3>
              {/*<h3 className="sm:text-9 text-5">Design-System</h3>*/}
            </div>}
          >
            <div className="px-4 py-8 grid grid-cols-3 gap-10 md:grid-cols-5">
              <p className="col-span-3">
                Inspired by the <strong>space age aesthetics</strong> of the 1970s, <strong>Bauhaus</strong>,
                and the iconic <strong>LCARS UI</strong> from Star Trek, I developed a visually captivating <strong>design
                system</strong>.
                <br/><br/>
                This system comprises a crafted <strong>Figma UI
                library</strong> showcasing an array of reusable components. Complementing the UI library is a
                <strong>React component library</strong>, enabling developers to seamlessly integrate the design
                system into their applications.
                <br/><br/>
                At the core of this project lies a centralized <strong>design tokens repository</strong>, which serves
                as the single source of truth for all design properties. <br/> Leveraging <strong>Tokens
                Studio</strong>, the
                repository exports tokens in various formats,
                including <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>, ensuring
                consistency and scalability across platforms.
                <br/><br/>
                This <strong>design system</strong> offers a harmonious blend of aesthetics and functionality,
                seamlessly bridging the gap between visionary design and practical implementation. By carefully curating
                the best elements from <strong>space age design</strong>, <strong>Bauhaus principles</strong>, and the
                iconic <strong>LCARS UI</strong>, this project delivers a truly immersive and cohesive user experience.
              </p>

              <div className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center">
                <Image className="h-32 w-auto" src={nebula} alt="nebula logo"/>
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
            <div className="col-span-full md:col-span-2">
              <p>As a <strong>software engineer</strong> with a keen eye for <strong>UX design</strong>, I believe in
                the transformative power of technology, especially when guided by thoughtful design that prioritizes
                people. My journey began at university, where I co-founded a startup and developed an <strong>Android
                  app</strong>, honing my skills in <strong>client-side development</strong> and <strong>UI
                  design</strong>.</p>
              <br/>
              <p>After graduating, I worked as a <strong>full-stack software engineer</strong> but soon realized that my
                passion extended deeply into product design. While my roots were in engineering, I discovered a natural
                inclination towards design—a skill evident from my childhood days of constructing <strong>LEGO
                  creations</strong> without instructions. Driven by this realization, I took a sabbatical year to
                immerse myself in <strong>design principles</strong>.</p>
              <br/>
              <p>During my career, I have worked on various projects as a <strong>Software Engineer</strong>, <strong>Project
                Manager</strong>, <strong>Lead Developer</strong>, and <strong>UX Designer</strong>. Recently, I have
                focused on mastering <strong>software architecture</strong> and structuring codebases efficiently. I
                have become proficient in <strong>React</strong> and other <strong>frontend frameworks</strong>, as well
                as end-to-end testing with tools like <strong>Cypress</strong>.</p>
              <br/>
              <p>Today, as a senior engineer with a strong foundation in software engineering and a keen interest
                in <strong>design systems</strong>, I am committed to continuous improvement and delivering high-quality
                products. My technical expertise, combined with an understanding of design, allows me to create robust
                and intuitive solutions. I strive to always improve and do better, ensuring that technology serves to
                make the world a better place by putting people at the center.</p>
            </div>
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
      <footer className="w-full h-full bg-black py-10">
        <SectionContent className="grid grid-cols-1">
          <div className="col-span-full md:col-span-1 flex justify-center items-center">
            <Image className="h-32 w-auto" src={mattyxLogo} alt="mattyx logo"/>
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
