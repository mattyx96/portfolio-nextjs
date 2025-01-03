import {Button, config, Text} from "nebula-ds-react-library";
import {SectionContent} from "@/components/SectionContent";
import StarField from "@/components/StarField";
import {randomPick} from "@/utils";
import {useEffect, useState} from "react";

export const Hero = () => {
    return (
        <StarField backgroundColor={config.lightJsTokens.nbBlack} speedFactor={0.008}>
            <section
                className="h-screen w-full flex items-center justify-center md:pl-10 lg:pl-5 xl:pl-0 md:!justify-start">
                <SectionContent className="justify-center !w-full">
                    <Text component="h1" variant="display1"
                          className="!text-background-contrast-primary-50 text-center md:!text-left">
                        Hi, I'm Matteo
                    </Text>
                    <Text component="span" variant="body5"
                          className="!text-background-contrast-primary-50 text-center md:!text-left">
                        A.k.a. Gary
                    </Text>
                    <Text variant="header6"
                          className="!text-background-contrast-primary-50 mt-10 text-center md:!text-left">
                        I’m developing web experiences
                    </Text>
                    <div className="w-full flex justify-center md:!justify-start">
                        <CTA/>
                    </div>
                </SectionContent>
            </section>
        </StarField>
    )
}

const buttonRoundedVariants = ["L", "Default", "R", "RTop", "RBottom", "LTop", "LBottom"] as const
const CTA = () => {
    const [currentRounded, setCurrentRounded] = useState<typeof buttonRoundedVariants[number]>("R")

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentRounded(prevRounded => {
                const nextRoundedOptions = buttonRoundedVariants.filter(r => r !== prevRounded);
                return randomPick(nextRoundedOptions);
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [currentRounded])

    return (
        <Button
            className={`w-fit mt-8 hover:!ring-background-contrast-primary-50 active:!ring-button-background-secondary transition-all duration-300 ease-in-out`}
            rounded={currentRounded} size="M"
            text="check-it" onClick={() => {
            document?.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
            });
        }}/>)
}
