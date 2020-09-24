export type PaletteProps = {
  TEXT_BLACK?: string
  TEXT_DISABLED?: string
  TEXT_LINK?: string
  BORDER?: string
  BACKGROUND?: string
  MAIN?: string
  DANGER?: string
}

export const defaultPalette = {
  TEXT_BLACK: 'rgba(0, 0, 0, 0.87)',
  TEXT_DISABLED: '#c1c1c1',
  TEXT_LINK: '#007bc2',
  BORDER: '#8e8e93',
  BACKGROUND: '#fff',
  MAIN: '#6b9e7c',
  DANGER: '#ff8800',
}

export const createPalette = (usePalette: PaletteProps = {}) => {}
