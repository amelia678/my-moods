import light from './light'
import dark from './dark'
import { Theme } from '@material-ui/core'

const themes: { [key: string]: Theme } = {
  light,
  dark,
}

export default function getThemeByName(theme: string): Theme {
  return themes[theme]
}
