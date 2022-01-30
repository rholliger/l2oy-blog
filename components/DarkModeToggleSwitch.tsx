import styled, { css } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { faMoon, fas, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Slider = styled.span`
  ${({ theme }) => {
    return css`
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.text};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 22px;

      &:before {
        position: absolute;
        content: '';
        height: 14px;
        width: 14px;
        left: 4px;
        bottom: 4px;
        background-color: ${theme.background};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
    `
  }}
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      &:before {
        -webkit-transform: translateX(22px);
        -ms-transform: translateX(22px);
        transform: translateX(22px);
      }
    }
  }
`

const IconContainer = styled.span`
  cursor: pointer;
  margin: 12px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: -0.23em;
`

const ModeToggle = () => {
  const darkMode = useDarkMode()

  console.log('mode toggle')

  return (
    <span>
      <IconContainer onClick={darkMode.toggle}>
        <StyledIcon icon={faSun} />
      </IconContainer>
      <Switch>
        <input
          type="checkbox"
          onChange={darkMode.toggle}
          checked={darkMode.value}
        />
        <Slider />
      </Switch>
      <IconContainer onClick={darkMode.toggle}>
        <StyledIcon icon={faMoon} />
      </IconContainer>
    </span>
  )
}

export default ModeToggle
