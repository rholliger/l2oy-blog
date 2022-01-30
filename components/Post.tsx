import { FC } from 'react'
import styled, { css } from 'styled-components'
import { ellipsis } from 'polished'
import dayjs from 'dayjs'
import Link from 'next/link'

import { urlFor } from '../sanity/utils'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { isMobile } from '../utils/device'
import useBreakpoints, { Breakpoint } from '../hooks/useBreakpoints'
import { formattedDate } from '../utils/dates'
import CategoryTags from './CategoryTags'

type PostType = 'full' | 'half'

interface PostMetadata {
  date?: string
  categories?: Category[]
  author?: string
}

interface PostProps {
  type: PostType
  slug: string
  image?: SanityImageSource
  metadata: PostMetadata
  title: string
  lead?: string
}

interface StyledPostProps {
  type: PostType
}

const PostContainer = styled.div<StyledPostProps>`
  ${({ theme, type }) => {
    const halfHorizontal = `calc(50% - ${theme.measures.gap.horizontal / 2}px)`

    return css`
      ${type === 'full' && 'display: flex'};
      background-color: ${theme.background};
      color: ${theme.text};
      width: ${type === 'full' ? '100%' : halfHorizontal};
      cursor: pointer;
      box-shadow: ${theme.postItemShadow};
      transition: box-shadow 0.15s ease-out;

      ${type === 'half' &&
      css`
        @media ${theme.devices.tablet} {
          width: 100%;
        }
      `}
    `
  }}
`

const PostImage = styled.img<StyledPostProps>`
  ${({ theme, type }) => {
    return css`
      ${type === 'full'
        ? css`
            width: calc(50% - ${theme.measures.gap.horizontal / 2}px);
            height: 100%;
            margin-right: ${theme.measures.gap.horizontal / 2}px;
          `
        : css`
            width: 100%;
          `}
    `
  }}
`

const PostTextContainer = styled.div`
  width: 100%;
  max-height: 400px;
  padding: 16px;
`

const PostTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  font-size: 34px;
  font-weight: 700;
  margin: 12px 0;
  color: ${({ theme }) => theme.foreground};
`

const PostLead = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  ${ellipsis('100%', 6)};
`

const PostMetadata = styled.div`
  ${({ theme }) => {
    return css`
      font-family: 'Lato', sans-serif;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      color: ${theme.text};
      gap: 10px;
    `
  }}
`

const PostAuthor = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`

const Post: FC<PostProps> = ({ type, title, lead, slug, metadata, image }) => {
  const breakpoints = useBreakpoints()

  const postType = breakpoints === Breakpoint.MOBILE ? 'half' : type

  return (
    <Link href={`/posts/${slug}`} passHref>
      <PostContainer type={postType}>
        <PostImage
          type={postType}
          src={
            image &&
            urlFor(image)
              .crop('entropy')
              .fit('min')
              .width(1000)
              .height(500)
              .url()
          }
        />
        <PostTextContainer>
          <PostMetadata>
            <span>{formattedDate(metadata.date)}</span>
            <CategoryTags categories={metadata.categories} />
          </PostMetadata>
          <PostTitle>{title}</PostTitle>
          <PostAuthor>by Roy Holliger</PostAuthor>
          <PostLead>{lead}</PostLead>
        </PostTextContainer>
      </PostContainer>
    </Link>
  )
}

export default Post
