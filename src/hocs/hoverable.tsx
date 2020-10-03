import React, { useState, MouseEvent, ReactElement } from 'react'
import { isMouseDevise, isTouchDevise } from '../libs/ua'

export type ExternalProps = {
  className?: string
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  onTouchStart?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}

export type InjectedProps = {
  className: string
  onMouseEnter: (e: MouseEvent) => void
  onMouseLeave: (e: MouseEvent) => void
  onTouchStart: (e: TouchEvent) => void
  onTouchEnd: (e: TouchEvent) => void
}

type Options = {
  hoverClassName?: string
}

export const useHoverable: any = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseEnter = (e: MouseEvent) => {
    const { onMouseEnter } = props
    if (onMouseEnter) onMouseEnter(e)
    if (isTouchDevise) return
    setIsHover(true)
  }

  const onMouseLeave = (e: MouseEvent) => {
    const { onMouseLeave } = props
    if (onMouseLeave) onMouseLeave(e)
    if (isTouchDevise) return
    setIsHover(false)
  }

  const onTouchStart = (e: TouchEvent) => {
    const { onTouchStart } = props
    if (onTouchStart) onTouchStart(e)
    if (isMouseDevise) return
    setIsHover(true)
  }

  const onTouchEnd = (e: TouchEvent) => {
    const { onTouchStart } = props
    if (onTouchStart) onTouchStart(e)
    if (isMouseDevise) return
    setIsHover(false)
  }

  return {
    isHover: isHover,
    className: props.className,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    ...props,
  }

  return [
    isHover,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    ...props,
  ]
}
// export const useHoverable: React.FC = ({
//   WrappedComponent,
//   ...props
// }): ReactElement => {
//   const [isHover, setIsHover] = useState(false)

//   return (
//     <WrappedComponent
//       {...props}
//       className={`${isHover ? hoverClassName : ''} ${
//         this.props.className || ''
//       }`}
//       onMouseEnter={this.onMouseEnter}
//       onMouseLeave={this.onMouseLeave}
//       onTouchStart={this.onTouchStart}
//       onTouchEnd={this.onTouchEnd}
//     />
//   )
// }
