import styled, { css } from 'styled-components'
import { faMeteor, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const StyledErrorPageContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40vh;
      gap: 60px;
      margin: 80px;

      @media ${theme.devices.tablet} {
        flex-direction: column;
        margin: 60px 20px;
        height: 100%;
      }
    `
  }}
`

const StyledErrorTextContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      @media ${theme.devices.tablet} {
        align-items: center;
        gap: 12px;
      }
    `
  }}
`

const StyledErrorPageTitle = styled.h3`
  color: ${({ theme }) => theme.foreground};
  font-family: 'Hughs', sans-serif;
  font-size: 100px;
  margin: 0px;
`

const StyledErrorPageText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
`

const StyledErrorBackButton = styled.span`
  color: ${({ theme }) => theme.foreground};
  font-family: 'Lato', sans-serif;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 300;

  > span {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.foreground};
    padding: 14px 20px;

    svg {
      margin-right: 8px;
    }
  }
`

const StyledMeteorIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.foreground};
`

const ErrorPage = () => (
  <StyledErrorPageContainer>
    <StyledMeteorIcon icon={faMeteor} size="10x" />
    <StyledErrorTextContainer>
      <StyledErrorPageTitle>404</StyledErrorPageTitle>
      <StyledErrorPageText>
        Two scenarios could&apos;ve happened here: Either this page was
        obliterated by a massive meteor or there was never something here
        before. If it&apos;s the first one: <b>PANIC!</b>, if it&apos;s the
        second one either click on the logo or on the link down below to go back
        to a better place.
      </StyledErrorPageText>
      <StyledErrorBackButton>
        <Link href="/" passHref>
          <span>
            <FontAwesomeIcon icon={faHome} size="1x" />
            Back to Home
          </span>
        </Link>
      </StyledErrorBackButton>
    </StyledErrorTextContainer>
  </StyledErrorPageContainer>
)

export default ErrorPage
