import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const fonts = ['-apple-system', 'Roboto', 'Noto Sans JP', 'sans-serif']

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontFamily: `-apple-system, Roboto, 'Noto Sans JP', sans-serif`
    }
  }
}

Wordpress2016.headerFontFamily = fonts
Wordpress2016.bodyFontFamily = fonts

Wordpress2016.googleFonts = [
  {
    name: 'Noto Sans JP',
    styles: ['400'],
  },
  {
    name: 'Noto Sans JP',
    styles: ['700'],
  },
  {
    name: 'Roboto',
    styles: ['400']
  }
]

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
