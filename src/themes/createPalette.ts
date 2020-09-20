export type PaletteProps = {
  TEXT_BLACK?: string
  TEXT_GREY?: string
  TEXT_DISABLED?: string
  TEXT_LINK?: string
  BORDER?: string
  BACKGROUND?: string
  COLUMN?: string
  MAIN?: string
  DANGER?: string
  WARNING?: string
  SCRIM?: string
  OVERLAY?: string
  OUTLINE?: string
}

export const defaultPalette = {
  TEXT_BLACK: 'rgba(0, 0, 0, 0.87)',
  MAIN: '6b9e7c',
  secondary: '19857b',
}

export const createPalette = (usePalette: PaletteProps = {}) => {}
