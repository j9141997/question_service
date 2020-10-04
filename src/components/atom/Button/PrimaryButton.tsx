import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../../hooks/useTheme'

import {
  AnchorProps,
  BaseButton,
  BaseButtonAnchor,
  ButtonProps,
} from './BaseButton'

export const PrimaryButton: FC<ButtonProps> = (props) => {
  const theme = useTheme()
  return <PrimaryStyleButton themes={theme} {...props} />
}
// for debug message
PrimaryButton.displayName = 'PrimaryButton'

export const PrimaryButtonAnchor: FC<AnchorProps> = (props) => {
  const theme = useTheme()
  return <PrimaryStyleButtonAnchor themes={theme} {...props} />
}
// for debug message
PrimaryButtonAnchor.displayName = 'PrimaryButtonAnchor'

const primaryStyle = css`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes

    return css`
      color: #fff;
      border: none;
      background-color: ${palette.MAIN};
      color: #fff;

      &.hover {
        background-color: ${palette.hoverColor(palette.MAIN)};
      }

      &[disabled] {
        background-color: ${palette.disableColor(palette.MAIN)};
        color: ${palette.disableColor('#fff')};
      }
    `
  }}
`

const PrimaryStyleButton = styled(BaseButton)`
  ${primaryStyle}
`

const PrimaryStyleButtonAnchor = styled(BaseButtonAnchor)`
  ${primaryStyle}
`
