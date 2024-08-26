import {ComponentProps, ReactNode} from "react";

type Props = ComponentProps<'section'>

export const SectionContent = (props: Props) => {
  return (
    <section className={`container mx-auto w-full flex flex-col h-full px-3 ${props.className}`}>
      {props.children}
    </section>
  )
}
