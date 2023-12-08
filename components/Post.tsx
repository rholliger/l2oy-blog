import { FC } from 'react'
import styled, { css } from 'styled-components'
import { ellipsis } from 'polished'
import Link from 'next/link'

import { urlFor } from '../sanity/utils'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import useBreakpoints, { Breakpoint } from '../hooks/useBreakpoints'
import { formattedDate } from '../utils/dates'
import CategoryTags from './CategoryTags'
import Image from 'next/image'

type PostType = 'full' | 'half'

interface PostMetadata {
  date?: string
  categories?: Category[]
  author?: string
}

interface PostProps {
  type: PostType
  slug: string
  image?: SanityImageSource & { alt: string }
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

      ${type === 'full' &&
      css`
        display: flex;
        width: 100%;
        max-height: 300px;

        > a {
          display: flex;
          position: relative;
        }
      `}

      ${type === 'half' &&
      css`
        width: ${halfHorizontal};
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
            max-width: 50%;
            object-fit: cover;
          `
        : css`
            width: 100%;
          `}
    `
  }}
`

const PostTextContainer = styled.div<StyledPostProps>`
  ${({ theme, type }) => {
    return css`
      ${type === 'full'
        ? css`
            width: 50%;
            padding: 20px;
          `
        : css`
            width: 100%;
            padding: 20px;
          `}
    `
  }}
`

const PostTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 12px 0 22px 0;
  color: ${({ theme }) => theme.foreground};
`

const PostLead = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  ${ellipsis('100%', 5)};
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

const PostDate = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 300;
`

const PostImageContainer = styled.div<StyledPostProps>`
  ${({ theme, type }) => {
    return css`
      position: relative;
      height: 300px;
      object-fit: cover;

      ${type === 'full'
        ? css`
            width: 50%;
          `
        : css`
            width: 100%;
          `}
    `
  }}
`

const Post: FC<PostProps> = ({ type, title, lead, slug, metadata, image }) => {
  const breakpoints = useBreakpoints()

  const postType = breakpoints === Breakpoint.MOBILE ? 'half' : type

  return (
    <PostContainer type={postType}>
      <Link href={`/posts/${slug}`}>
        <PostImageContainer type={postType}>
          {image && (
            <Image
              src={urlFor(image)
                .fit('crop')
                .width(postType === 'full' ? 500 : 600)
                .height(postType === 'full' ? 300 : 300)
                .url()}
              fill={true}
              style={{ objectFit: 'cover' }}
              alt={image.alt}
            />
          )}
        </PostImageContainer>
        <PostTextContainer type={postType}>
          <PostDate>{formattedDate(metadata.date)}</PostDate>
          <PostTitle>{title}</PostTitle>
          <PostMetadata>
            <PostAuthor>by {metadata.author}</PostAuthor>
            <CategoryTags categories={metadata.categories} />
          </PostMetadata>
          <PostLead>{lead}</PostLead>
        </PostTextContainer>
      </Link>
    </PostContainer>
  )
}

export default Post
