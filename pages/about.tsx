import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styled, { css } from 'styled-components'

import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PostContent from '../components/PostContent'
import { getAllPostSlugs, getBio, getPost } from '../sanity/api'
import { urlFor } from '../sanity/utils'
import SocialButtons from '../components/SocialButtons'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface AuthorProps {
  image: SanityImageSource
  bio: any
}

const StyledDiv = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.measures.gap.horizontal}px;
      margin: 40px 0;
      background-color: ${theme.background};
      color: ${theme.text};
      box-shadow: ${theme.mainShadow};

      display: flex;
      gap: 50px;

      @media ${theme.devices.tablet} {
        padding: 20px;
      }

      @media ${theme.devices.mobileXL} {
        flex-direction: column;
        gap: 0px;
      }
    `
  }}
`

const StyledLeftContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;

      @media ${theme.devices.mobileXL} {
        flex-direction: row;
        justify-content: space-evenly;
        margin: 20px 0 40px 0;
      }

      @media ${theme.devices.mobileL} {
        flex-direction: column;
        margin: 20px 0 40px 0;
      }
    `
  }}
`

const StyledContactInfos = styled.div`
  > div {
    font-family: 'Oxygen', sans-serif;
    font-weight: 600;
    font-size: 20px;
  }
`

const StyledContactList = styled.div`
  font-size: 10px;
`

const StyledContactIcon = styled(FontAwesomeIcon)`
  /* color: ${({ theme }) => theme.foreground}; */
`

const StyledAuthorImage = styled.img`
  ${({ theme }) => {
    return css`
      border-radius: 300px;
      height: 220px;

      @media ${theme.devices.tablet} {
        height: 140px;
      }

      @media ${theme.devices.mobileXL} {
        height: 200px;
      }
    `
  }}
`

const StyledText = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  text-align: left;

  > div > div {
    margin: 30px 0;
  }

  h3 {
    font-size: 40px;
    line-height: 54px;
    margin: 0;
    font-family: 'Oxygen', sans-serif;
  }
`

const Posts: NextPage<AuthorProps> = ({ bio, image }) => {
  return (
    <StyledDiv>
      <StyledLeftContainer>
        <StyledAuthorImage
          src={
            image &&
            urlFor(image)
              .crop('entropy')
              .fit('crop')
              .width(220)
              .height(220)
              .url()
          }
        />
        <StyledContactInfos>
          <SocialButtons />
        </StyledContactInfos>
      </StyledLeftContainer>
      <StyledText>
        <PostContent content={bio} />
      </StyledText>
    </StyledDiv>
  )
}

export const getStaticProps: GetStaticProps<AuthorProps> = async () => {
  const author = await getBio()

  return {
    props: {
      ...author,
    },
  }
}

export default Posts
