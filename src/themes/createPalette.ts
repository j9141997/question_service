export type PaletteProps = {
  TEXT_BLACK?: string
  TEXT_DISABLED?: string
  TEXT_LINK?: string
  BORDER?: string
  BACKGROUND?: string
  COLUMN?: string
  MAIN?: string
  DANGER?: string
  WARNING?: string
  OVERLAY?: string
}

export const defaultPalette = {
  TEXT_BLACK: 'rgba(0, 0, 0, 0.87)',
  TEXT_DISABLED: '#c1c1c1',
  TEXT_LINK: '#007bc2',
  MAIN: '#6b9e7c',
  BORDER: '#8e8e93',
}

export const createPalette = (usePalette: PaletteProps = {}) => {
  const created: Created
}
