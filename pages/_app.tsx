import { FC, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from '../styles/globalStyles'
import { darkTheme, lightTheme } from '../styles/themes'
import LayoutContainer from '../components/LayoutContainer'

import '../styles/fonts.css'

// Styled components v6 needs this to behave like v5 without showing the special props warning / error
function shouldForwardProp(propName: any, target: any) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(false)

  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
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
    </StyleSheetManager>
  )
}

export default MyApp
