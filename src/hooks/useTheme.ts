import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export type Theme = 'test'

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}
