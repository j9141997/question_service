import { useState, MouseEvent } from 'react'
import { isMouseDevice, isTouchDevice } from '../libs/ua'

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
    if (isMouseDevice) return
    setIsHover(true)
  }

  const onMouseLeave = (e: MouseEvent) => {
    const { onMouseLeave } = props
    if (onMouseLeave) onMouseLeave(e)
    if (isMouseDevice) return
    setIsHover(false)
  }

  const onTouchStart = (e: TouchEvent) => {
    const { onTouchStart } = props
    if (onTouchStart) onTouchStart(e)
    if (isTouchDevice) return
    setIsHover(true)
  }

  const onTouchEnd = (e: TouchEvent) => {
    const { onTouchEnd } = props
    if (onTouchEnd) onTouchEnd(e)
    if (isTouchDevice) return
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
}
