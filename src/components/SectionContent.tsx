import {ReactNode} from "react";

export const SectionContent = (props: {
  className?: string;
  children: ReactNode
}) => {
  return (
    <div className={`container mx-auto w-full flex flex-col h-full px-3 ${props.className}`}>
      {props.children}
    </div>
  )
}
