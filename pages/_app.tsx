import { FC, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from '../styles/globalStyles'
import { darkTheme, lightTheme } from '../styles/themes'
import LayoutContainer from '../components/LayoutContainer'

import '../styles/fonts.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(false)

  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
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
