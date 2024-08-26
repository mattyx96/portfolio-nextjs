import {Button, config, FrameConnector, Text} from "nebula-ds-react-library";
import Image from "next/image";
import mattyxLogo from "../../public/mattyx.png";
import {SectionContent} from "@/components/SectionContent";
import Starfield from "@/components/Starfield";

export const Footer = (props: {
  className?: string;
}) => {
  return (
    <Starfield backgroundColor={config.lightJsTokens.nbBlack} className="" speedFactor={0.008}>
      <footer className={`w-full h-full py-10 flex flex-col justify-between ${props.className}`}>
        {/*projects section title*/}
        <SectionContent className="w-full flex flex-col gap-4 items-start my-10">
          <div className="w-full flex gap-4 items-center">
            <Text component="h1" variant="display2" className="!text-background-primary !text-10 md:!text-11">
              Keep in touch
            </Text>
            <FrameConnector className="w-full" bridge={{className: '!bg-core-2-300'}} divider/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-centerr gap-10 mt-10 w-3/4 mx-auto">
            {contacts.map(contact => (
              <Button
                className="hover:!ring-background-contrast-primary-50 active:!ring-button-background-secondary !text-background-contrast-primary-50"
                key={contact.name} variant="standard" text={contact.name}
                onClick={() => window.open(contact.url)}/>
            ))}
          </div>
        </SectionContent>
        <div className="col-span-full md:col-span-1 flex justify-center items-center">
          <Image className="h-16 md:h-24 w-auto" src={mattyxLogo} alt="mattyx logo"/>
        </div>
      </footer>
    </Starfield>
  )
}

const contacts = [
  {
    name: 'LinkedIn',
    url:
      'https://www.linkedin.com/in/slippin-gary/',
  }, {
    name: 'GitHub',
    url:
      'https://github.com/mattyx96/',
  }, {
    name: 'Email',
    url:
      'mailto:matteoomicini.dev@gmail.com',
  }
] as const
