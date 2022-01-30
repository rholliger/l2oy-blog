import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import DarkModeToggleSwitch from './DarkModeToggleSwitch'

interface LayoutContainerProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1024px;
  padding: 0 20px;
`

const Header = styled.header`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 0 40px 0;
      gap: 24px;

      @media ${theme.devices.tablet} {
        flex-direction: column;
        padding: 60px 0 40px 0;
      }
    `
  }}
`

const Logo = styled.div`
  ${({ theme }) => {
    return css`
      /* font-family: 'Plom-Praeng';
      font-size: 120px; */

      /* font-family: 'AginoeSans';
      font-size: 80px; */

      /* font-family: 'Hughs';
      font-size: 100px; */

      /* font-family: 'SimvoniItalic';
      font-size: 100px; */

      font-family: 'Conthrax', sans-serif;
      font-size: 74px;

      color: ${theme.foreground};

      @media ${theme.devices.mobileL} {
        font-size: 50px;
      }
    `
  }}
`

const Navigation = styled.nav`
  > span {
    &::before {
      content: ' // ';
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`

const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link href="/">l2oy.dev</Link>
        </Logo>
        <Navigation>
          <span>About me</span>
          <span>Contact</span>
        </Navigation>
        <DarkModeToggleSwitch />
      </Header>
      <div>{children}</div>
      <Footer>
        <span>Twitter</span>
        <span>Github</span>
      </Footer>
    </Wrapper>
  )
}

export default LayoutContainer
