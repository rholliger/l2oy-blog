import { FC, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globalStyles'
import { darkTheme, lightTheme } from '../styles/themes'
import LayoutContainer from '../components/LayoutContainer'
import useDarkMode from 'use-dark-mode'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(false)

  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isMounted && (
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      )}
    </ThemeProvider>
  )
}

export default MyApp
