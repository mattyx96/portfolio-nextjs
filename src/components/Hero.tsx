import {Button, config} from "nebula-ds-react-library";
import {SectionContent} from "@/components/SectionContent";
import Starfield from "@/components/Starfield";

export const Hero = () => {
  return (
    <Starfield backgroundColor={config.lightJsTokens.nbBlack} speedFactor={0.008}>
      <section className="h-screen w-full flex items-center justify-center md:!justify-start">
        <SectionContent className="justify-center !w-fit md:!w-full">
          <h1 className="text-background-contrast-primary-50 text-11 md:text-12 leading-10 text-center md:!text-left">
            Hi, I'm Matteo
          </h1>
          <small className="text-background-contrast-primary-50 text-center md:!text-left">
            A.k.a. Gary
          </small>
          <p className="text-background-contrast-primary-50 mt-10 text-center md:!text-left">
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
    </Starfield>
  )
}
