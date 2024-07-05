import {Button, FrameConnector, IconButton} from "nebula-ds-react-library";
import {FramePanel} from "@/components/FramePanel";
import {ArrowRightIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import nebula from "../../public/nebula.png";
import {useBreakpoint} from "@react-awesome/use-breakpoint";

export const ShowcaseProjects = (props: {
  className?: string;
}) => {
  const breakpoint = useBreakpoint()

  const isDesktop = Boolean(breakpoint.greater('md'))

  const openURL = (url: string) => {
    window.open(url, '_blank')?.focus();
  }
  return (
    <div className={`${props.className}`}>
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
          <div className="col-span-3">
            <p>Inspired by the 1970s space age style, Bauhaus design, and the LCARS UI from Star Trek, I created a
              unique design system that mixes modern and classic design.</p>
            <br/>
            <p>This system includes:</p>
            <br/>
            <ul>
              <li>
                <p>
                  <strong>Figma UI Library:</strong> A set of reusable components to make design
                  easier and keep it
                  consistent.
                </p>
              </li>
              <br/>
              <li>
                <p>
                  <strong>React Component Library:</strong> Easily fits into modern web apps for simple
                  implementation.
                </p>
              </li>
              <br/>
              <li>
                <p>
                  <strong>Centralized Design Tokens Repository:</strong> A single source for all design
                  properties,
                  exporting tokens in CSS, JavaScript, and Tailwind CSS formats using Tokens Studio, ensuring
                  consistency and scalability.
                </p>
              </li>
            </ul>
            <br/>
          </div>

          <div className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center">
            <Image className="h-32 w-auto" src={nebula} alt="nebula logo"/>
          </div>
        </div>
      </FramePanel>
    </div>
  )
}
