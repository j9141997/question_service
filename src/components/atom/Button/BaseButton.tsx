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

export const buttonFactory: fc
