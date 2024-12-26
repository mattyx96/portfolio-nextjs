import {ComponentProps, ReactNode} from "react";

type Props = ComponentProps<'section'>

export const SectionContent = (props: Props) => {
    return (
        <section className={`max-w-7xl mx-auto lg:px-10 w-full flex flex-col h-full ${props.className}`}>
            {props.children}
        </section>
    )
}
