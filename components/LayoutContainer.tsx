import { FC } from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

interface LayoutContainerProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1024px;
  /* background-color: palevioletred; */
`

const Header = styled.header`
  background-color: #4bb885;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
`

const Logo = styled.div``

const Navigation = styled.nav`
  > span {
    &::before {
      content: ' // ';
    }
  }
`

const ToggleThemeButton = styled.button`
  /* align-self: flex-end; */
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #eea03a;
`

const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  const darkMode = useDarkMode()

  return (
    <Wrapper>
      <Header>
        <Logo>l2oy Logo</Logo>
        <Navigation>
          <span>About me</span>
          <span>Contact</span>
        </Navigation>
        <ToggleThemeButton onClick={darkMode.toggle}>
          Toggle theme
        </ToggleThemeButton>
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
