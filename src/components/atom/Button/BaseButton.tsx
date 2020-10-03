import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../../hooks/useTheme'
import { REPLCommand } from 'repl'

type Tag = 'button' | 'a'
type Size = 'default' | 's'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps
export type AnchorProps = React.ButtonHTMLAttributes<HTMLAnchorElement> &
  BaseProps

export type BaseProps = {
  size?: Size
  className?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  square?: boolean
  wide?: boolean
}


export const buttonFactory: <T extends BaseProps>(tag: Tag) => FC<T> = (
  tag
) => {
  // const Tag =

  return ({
    size = 'default',
    className = '',
    square = false,
    children = '',
    prefix = '',
    suffix = '',
    ...props
  }) => {
    const theme = useTheme()

    // prettier-ignore
    const classNames = `${size} ${className} ${square ? 'square' : ''} ${prefix ? 'prefix' : ''} ${suffix ? 'suffix' : ''}`

    return (
      
    )
  }
}
