import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { FC } from 'react'

interface SocialButtonProps {
  isHorizontal?: boolean
}

const StyledSocialButtons = styled.ul<SocialButtonProps>`
  ${({ theme, isHorizontal }) => {
    return css`
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: ${isHorizontal ? 'row' : 'column'};
      gap: 30px;

      > li {
        list-style-type: none;
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.foreground};

        > a {
          align-items: center;
          display: flex;
          gap: 20px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    `
  }}
`

const SocialButtons: FC<SocialButtonProps> = ({ isHorizontal }) => {
  return (
    <StyledSocialButtons isHorizontal={isHorizontal}>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
          {!isHorizontal && 'roy@roy.dev'}
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          {!isHorizontal && 'royholliger'}
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          {!isHorizontal && '@royholliger'}
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          {!isHorizontal && 'rholliger'}
        </a>
      </li>
    </StyledSocialButtons>
  )
}

export default SocialButtons
