import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import DarkModeToggleSwitch from './DarkModeToggleSwitch'

interface LayoutContainerProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1024px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px;
`

const Logo = styled.div``

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
          <Link href="/">l2oy Logo</Link>
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
