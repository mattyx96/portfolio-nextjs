import {Button, FrameConnector, IconButton} from "nebula-ds-react-library";
import {ArrowRightIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import {useBreakpoint} from "@react-awesome/use-breakpoint";
import {ReactNode} from "react";

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

  return (
    <div className={`flex flex-col ${props.className}`}>

      {/*project header*/}
      <div className="flex w-full gap-4 justify-between items-center lg:!items-end">
        {props.inverse && (
          <>
            <div className="flex gap-4 items-center">
              {props.renderHeader}
            </div>
            <FrameConnector className="hidden md:!flex scale-[-1]" firstNode={{hidden: true}}/>
          </>)}
        {props.renderTitle}
        {!props.inverse && (
          <>
            <FrameConnector className="hidden md:!flex scale-[-1]" secondNode={{hidden: true}}/>
            <div className="flex gap-4 items-center">
              {props.renderHeader}
            </div>
          </>)}
      </div>

      {/*project content*/}
      <div className="flex h-full items-stretch">
        {!props.inverse &&
          <FrameConnector className="hidden md:!flex items-stretch" vertical firstNode={{hidden: true}}/>}

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
