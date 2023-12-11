import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithubSquare,
  faSquareXTwitter,
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
        color: ${theme.foreground};

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
        <a href="mailto:roy@l2oy.dev" aria-label="Send an E-Mail to Roy">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
          {!isHorizontal && 'roy@l2oy.dev'}
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/roy-holliger/"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Roys LinkedIn Page">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          {!isHorizontal && 'royholliger'}
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/royholliger"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Roys X Page">
          <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
          {!isHorizontal && '@royholliger'}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rholliger"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Roys Github Page">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          {!isHorizontal && 'rholliger'}
        </a>
      </li>
    </StyledSocialButtons>
  )
}

export default SocialButtons
