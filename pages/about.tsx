import { GetStaticProps, NextPage } from 'next/types'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import PostContent from '../components/PostContent'
import { getBio } from '../sanity/api'
import { urlFor } from '../sanity/utils'
import SocialButtons from '../components/SocialButtons'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import MetaTags from '../components/MetaTags'

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

const StyledImageContainer = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
`

const Posts: NextPage<AuthorProps> = ({ bio, image }) => {
  return (
    <StyledDiv>
      <MetaTags
        title="About me | Roy.dev"
        description="My name is Roy Holliger and I'm from Zurich, Switzerland. I'm what people would call a geek. In the world of Information Technology I feel at home. Welcome to my Blog about Tech."
      />
      <StyledLeftContainer>
        <StyledImageContainer>
          {image && (
            <Image
              src={urlFor(image).fit('crop').width(400).height(400).url()}
              fill={true}
              alt="Portrait of Roy Holliger"
            />
          )}
        </StyledImageContainer>
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
