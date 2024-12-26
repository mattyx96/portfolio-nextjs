'use client';

import {Horizon, config} from "nebula-ds-react-library";
import {useEffect} from "react";
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
            <Horizon className="w-full"/>

            <div className="max-w-7xl mx-auto px-5 w-full my-36 flex flex-col gap-36">
                {/*projects section*/}
                <SectionContent id="projects" className="w-full">
                    <ShowcaseProjects/>
                </SectionContent>

                <section className="w-full">
                    <SectionContent>
                        <AboutMe/>
                    </SectionContent>
                </section>
            </div>

            <Horizon className="w-full" inverse/>
            <Footer className={'min-h-screen px-5'}/>
        </main>
    )
}

