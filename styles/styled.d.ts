import 'styled-components'

import { Measures } from './measures'
import { Responsive } from './responsive'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    toggleBorder: string
    background: string
    foreground: string
    mainShadow: string
    postItemShadow: string
    devices: Responsive
    measures: Measures
  }
}
