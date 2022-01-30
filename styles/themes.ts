import { measures } from './measures'
import { devices } from './responsive'

const generalTheme = {
  devices,
  measures,
}

const lightTheme = {
  ...generalTheme,
  body: '#ECF0F1',
  text: '#172417',
  toggleBorder: '#ECF0F1',
  background: '#fff',
  foreground: '#172417',
  mainShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  postItemShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  devices,
}

const darkTheme = {
  ...generalTheme,
  body: '#121212',
  text: '#ECF0F1',
  toggleBorder: '#6B8096',
  background: '#172417',
  foreground: '#ff9760',
  mainShadow:
    '0 10px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
  postItemShadow:
    'rgba(13, 13, 13, 0.6) 0px 30px 25px -5px, rgba(10, 10, 10, 0.3) 0px 10px 10px -5px',
  devices,
}

export { lightTheme, darkTheme }
