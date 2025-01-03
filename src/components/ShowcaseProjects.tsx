import {Button, FrameConnector, IconButton, Text, Paper} from "nebula-ds-react-library";
import {ArrowRightIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import nebula from "../../public/nebula.png";
import constellation from "../../public/constellation.png";
import {useBreakpoint} from "@react-awesome/use-breakpoint";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

const FramePanel = dynamic(() => import('nebula-ds-react-library').then(l => l.FramePanel), {
    ssr: false,
})

export const ShowcaseProjects = (props: {
    className?: string;
}) => {
    const breakpoint = useBreakpoint()

    const isMobile = Boolean(breakpoint.smallerOrEqual('sm'))
    const isDesktop = Boolean(breakpoint.greater('lg'))

    const NebulaActions = () => (<>
        <a href="https://github.com/mattyx96/nebula-ds-react-library" target="_blank">
            <IconButton
                size={isDesktop ? 'M' : 'S'} variant="outlined" icon={<CodeBracketIcon/>}
            />
        </a>
        <a href="https://nebula.irongalaxy.space" target="_blank" className="!w-full lg:!w-fit">
            <Button
                size={isDesktop ? 'M' : 'S'} rounded="R" text="Open" rightIcon={<ArrowRightIcon/>}
                className="!w-full lg:!w-fit"
            />
        </a>
    </>)

    const ConstellationActions = () => (<>
        <a href="https://github.com/mattyx96/constellation-starter" target="_blank" className="!w-full lg:!w-fit">
            <Button
                size={isDesktop ? 'M' : 'S'} rounded="L" text="Open" rightIcon={<CodeBracketIcon/>}
                className="!w-full lg:!w-fit"
            />
        </a>
    </>)

    return (
        <div className={`${props.className}`} id="projects">
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
                renderHeader={!isMobile && <NebulaActions/>}
                renderFooter={isMobile && <NebulaActions/>}
            >
                <div className="px-4 pt-8 -mb-0 pb-10 lg:pb-0 lg:-mb-8 grid grid-cols-5">
                    <div className="col-span-full md:col-span-3">
                        <Text variant="body1">Inspired by the 1970s space age style, Bauhaus design, and the LCARS UI
                            from Star
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
                                    <strong>React Component Library:</strong> Easily fits into modern web apps for
                                    simple
                                    implementation.
                                </Text>
                            </li>
                            <br/>
                            <li>
                                <Text variant="body1">
                                    <strong>Centralized Design Tokens Repository:</strong> A single source for all
                                    design
                                    properties,
                                    exporting tokens in CSS, JavaScript, and Tailwind CSS formats using Tokens Studio,
                                    ensuring
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


            {/* constellation */}
            <div className="relative">
                <FramePanel
                    inverse
                    className="mt-28"
                    title="Constellation"
                    renderHeader={!isMobile && <ConstellationActions/>}
                    renderFooter={isMobile && <ConstellationActions/>}
                >
                    <div className="px-4 pt-8 -mb-0 pb-10 lg:pb-0 lg:-mb-8 grid grid-cols-5">
                        <div
                            className="w-full h-full col-span-full md:col-span-2 flex justify-center items-center order-last md:order-first">
                            <Image className="h-12 md:h-16 w-auto" src={constellation} alt="constellation logo"/>
                        </div>
                        <div className=" col-span-full md:col-span-3">
                            <Text variant="body1">This project presents a <strong>framework-agnostic</strong> approach
                                to <strong>frontend
                                    development</strong>, inspired by <strong>clean architecture</strong> principles and
                                the <strong>Redux
                                    Flux pattern</strong>. Key features include:</Text>
                            <ul>
                                <br/>
                                <li>
                                    <Text variant="body1"><strong>Modular structure</strong>: The architecture is
                                        "<strong>sliced</strong>," allowing for better
                                        separation of concerns and easier maintenance.
                                    </Text>
                                </li>
                                <br/>
                                <li>
                                    <Text variant="body1">
                                        <strong>Framework flexibility</strong>: While it includes <strong>React</strong>,
                                        the core concepts
                                        can be applied to other frontend frameworks.
                                    </Text>
                                </li>
                                <br/>
                                <li>
                                    <Text variant="body1">
                                        <strong>State management</strong>: Utilizes <strong>Zustand</strong> for
                                        efficient and simple state
                                        handling.
                                    </Text>
                                </li>
                                <br/>
                                <li>
                                    <Text variant="body1">
                                        <strong>Styling</strong>: Incorporates <strong>TailwindCSS</strong> for rapid
                                        and consistent UI
                                        development.
                                    </Text>
                                </li>
                                <br/>
                                <li>
                                    <Text variant="body1">
                                        <strong>Clean Architecture</strong> influence: Promotes separation of business
                                        logic from UI
                                        components, enhancing testability and scalability.
                                    </Text>
                                </li>
                                <br/>
                                <li>
                                    <Text variant="body1">
                                        <strong>Flux-inspired data flow</strong>: Implements unidirectional data flow,
                                        improving
                                        predictability and debugging.
                                    </Text>
                                </li>
                            </ul>
                            <br/>
                            <Text variant="body1">This architecture aims to provide a robust foundation for
                                building <strong>complex
                                    frontend
                                    applications</strong> with
                                improved <strong>maintainability</strong>, <strong>scalability</strong>,
                                and <strong>developer experience</strong>.</Text>
                            <br/>
                        </div>
                    </div>
                </FramePanel>
            </div>
        </div>
    )
}
