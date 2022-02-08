import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import DarkModeToggleSwitch from './DarkModeToggleSwitch'
import SocialButtons from './SocialButtons'

interface LayoutContainerProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin-right: auto;
      margin-left: auto;
      max-width: 1024px;
      padding: 0 20px;

      @media ${theme.devices.mobileM} {
        padding: 0 12px;
      }
    `
  }}
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
      font-family: 'Hughs';
      font-size: 100px;

      color: ${theme.foreground};

      @media ${theme.devices.mobileL} {
        font-size: 80px;
      }
    `
  }}
`

const Navigation = styled.nav`
  font-family: 'Oxygen', sans-serif;
  font-size: 24px;
  font-weight: 200;

  > a {
    color: ${({ theme }) => theme.foreground};

    &:hover {
      &::after {
        content: ' < ';
      }

      &::before {
        content: ' > ';
      }
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 40px;
`

const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link href="/">l2oy.dev</Link>
        </Logo>
        <Navigation>
          <Link href="/about">About Me</Link>
        </Navigation>
        <DarkModeToggleSwitch />
      </Header>
      <div>{children}</div>
      <Footer>
        <SocialButtons isHorizontal />
      </Footer>
    </Wrapper>
  )
}

export default LayoutContainer
