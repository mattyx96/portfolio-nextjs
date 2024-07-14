import {FrameConnector} from "nebula-ds-react-library";
import {useBreakpoint} from "@react-awesome/use-breakpoint";
import {ReactNode, useRef} from "react";

type Props = {
  className?: string
  children: ReactNode
  renderHeader: ReactNode
  renderTitle: ReactNode
  inverse?: boolean
  //add renderFooter
  //add renderSide
}

export const FramePanel = (props: Props) => {
  const breakpoint = useBreakpoint()
  const frameConnector = useRef<HTMLDivElement>(null)


  return (
    <div className={`flex flex-col ${props.className}`}>

      {/*project header*/}
      <div className="flex w-full gap-4 justify-between items-center md:items-start">
        {props.inverse && (
          <>
            <div className="flex gap-4 items-center">
              {props.renderHeader}
            </div>
            <div ref={frameConnector}>
              <FrameConnector className="hidden md:!flex scale-[-1]" firstNode={{hidden: false}}/>
            </div>
          </>)}
        <div className="lg:pb-5">
          {props.renderTitle}
        </div>
        {!props.inverse && (
          <>
            <div className="flex flex-1" ref={frameConnector}>
              <FrameConnector className="!flex scale-[-1]"
                              divider={breakpoint.smaller('md')}
                              secondNode={{hidden: breakpoint.smaller('md') || (frameConnector.current?.clientWidth || 0) < 200}}/>
            </div>
            <div className="flex gap-4 items-center">
              {props.renderHeader}
            </div>
          </>)}
      </div>

      {/*project content*/}
      <div className="flex h-full items-stretch">
        {!props.inverse &&
          <FrameConnector className="hidden md:!flex items-stretch" vertical
                          firstNode={{hidden: (frameConnector.current?.clientWidth || 0) < 200}}/>}

        {/*body*/}
        <div className="flex flex-1 flex-col gap-4">
          {props.children}
          <FrameConnector divider/>
        </div>

        {props.inverse &&
          <FrameConnector className="hidden md:!flex items-stretch scale-[-1]" vertical
                          secondNode={{hidden: true}}/>}
      </div>
    </div>
  )
}
