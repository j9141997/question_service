import React, { MouseEvent } from 'react'
import { isMouseDevise, isTouchDevise } from '../libs/ua'

export type ExternalProps = {
  className?: string
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  onTouchStart?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}
