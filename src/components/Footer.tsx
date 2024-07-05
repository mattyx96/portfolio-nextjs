import {Button, FrameConnector} from "nebula-ds-react-library";
import Image from "next/image";
import mattyxLogo from "../../public/mattyx.png";
import {SectionContent} from "@/components/SectionContent";

export const Footer = (props: {
  className?: string;
}) => {
  return (
    <footer className={`w-full h-full bg-black py-10 flex flex-col justify-between ${props.className}`}>
      {/*projects section title*/}
      <SectionContent className="w-full flex flex-col gap-4 items-start my-10">
        <div className="w-full flex gap-4 items-center">
          <h2 className="text-10 md:text-12 text-background-primary">
            Keep in touch
          </h2>
          <FrameConnector className="w-full" bridge={{className: '!bg-core-2-300'}} divider/>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-centerr gap-4">
          {contacts.map(contact => (
            <Button
              className="hover:!ring-background-contrast-primary-50 active:!ring-button-background-secondary !text-background-contrast-primary-50"
              key={contact.name} variant="text" text={contact.name}
              onClick={() => window.open(contact.url)}/>
          ))}
        </div>
      </SectionContent>
      <div className="col-span-full md:col-span-1 flex justify-center items-center">
        <Image className="h-32 w-auto" src={mattyxLogo} alt="mattyx logo"/>
      </div>
    </footer>
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
