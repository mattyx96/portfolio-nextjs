import {Button, FrameConnector, IconButton, Text, FramePanel, Paper} from "nebula-ds-react-library";
import {ArrowRightIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import nebula from "../../public/nebula.png";
import constellation from "../../public/constellation.png";
import {useBreakpoint} from "@react-awesome/use-breakpoint";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";

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
        <Text component="h1" variant="display2" className="!text-10 md:!text-11">
          Showcase
        </Text>
        <FrameConnector className="w-full" divider/>
      </div>

      {/*Nebula DS*/}
      <FramePanel
        className="mt-28"
        title="Nebula Design System"
        renderHeader={
          <>
            <IconButton
              size={isDesktop ? 'M' : 'S'} variant="outlined" icon={<CodeBracketIcon/>}
              onClick={() => openURL('https://github.com/mattyx96/nebula-ds-react-library')}
            />
            <Button
              size={isDesktop ? 'M' : 'S'} rounded="R" text="Open" rightIcon={<ArrowRightIcon/>}
              onClick={() => openURL('https://nebula-ds-react-library.irongalaxy.space/')}
            />
          </>
        }
      >
        <div className="px-4 py-8 grid grid-cols-3 gap-10 md:grid-cols-5">
          <div className="col-span-3">
            <Text variant="body1">Inspired by the 1970s space age style, Bauhaus design, and the LCARS UI from Star
              Trek, I created a
              unique design system that mixes modern and classic design.</Text>
            <br/>
            <Text variant="body1">This system includes:</Text>
            <br/>
            <ul>
              <li>
                <Text variant="body1">
                  <strong>Figma UI Library:</strong> A set of reusable components to make design
                  easier and keep it
                  consistent.
                </Text>
              </li>
              <br/>
              <li>
                <Text variant="body1">
                  <strong>React Component Library:</strong> Easily fits into modern web apps for simple
                  implementation.
                </Text>
              </li>
              <br/>
              <li>
                <Text variant="body1">
                  <strong>Centralized Design Tokens Repository:</strong> A single source for all design
                  properties,
                  exporting tokens in CSS, JavaScript, and Tailwind CSS formats using Tokens Studio, ensuring
                  consistency and scalability.
                </Text>
              </li>
            </ul>
            <br/>
          </div>

          <div className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center">
            <Image className="h-16 md:h-24 w-auto" src={nebula} alt="nebula logo"/>
          </div>
        </div>
      </FramePanel>
    </div>
  )
}
