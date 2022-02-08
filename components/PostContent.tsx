import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'

import HighlightCode from './HighlightCode'
import { urlFor } from '../sanity/utils'
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from 'next/link'

type InterfacePositionType = 'left' | 'center' | 'right'

interface StyledBlockImageWrapperProps {
  position: InterfacePositionType
}

interface BlockCodeProps {
  node: {
    language: string
    code: string
  }
}

interface BlockImageProps {
  node: {
    asset: SanityImageSource
    caption?: string
    alt?: string
    position: InterfacePositionType
  }
}

interface BlockProps {
  children: string[]
  node: {
    style: string
  }
}

interface BlockInternalLinkProps {
  children: string[]
  mark: {
    href: string
  }
}

interface BlockExternalLinkProps {
  children: string[]
  mark: {
    slug: {
      current: string
    }
  }
}

interface PostContentProps {
  content: any
}

const StyledBlockImageWrapper = styled.div<StyledBlockImageWrapperProps>`
  text-align: ${({ position }) => position};
`

const StyledBlockImageContainer = styled.div`
  display: inline-block;
`

const StyledBlockImageDescription = styled.div`
  text-align: center;
  font-size: 14px;
`

const StyledBlockQuote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.foreground};
  padding-left: 16px;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  text-decoration: underline;
`

const serializers = {
  types: {
    code: ({ node: { language, code } }: BlockCodeProps) => (
      <HighlightCode language={language}>{code}</HighlightCode>
    ),
    image: ({
      node: { asset, alt, caption, position = 'center' },
    }: BlockImageProps) => (
      <StyledBlockImageWrapper position={position}>
        <StyledBlockImageContainer>
          {asset && (
            // TODO: Use next-sanity-image package in the future
            <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} />
          )}
          <StyledBlockImageDescription>{caption}</StyledBlockImageDescription>
        </StyledBlockImageContainer>
      </StyledBlockImageWrapper>
    ),
    block: (props: BlockProps) => {
      if (props.node.style === 'blockquote') {
        return <StyledBlockQuote>{props.children}</StyledBlockQuote>
      }

      return BlockContent.defaultSerializers.types.block(props)
    },
  },
  marks: {
    link: ({ children, mark }: BlockInternalLinkProps) => (
      <StyledLink href={mark.href} target="_blank" rel="noopener">
        {children}
      </StyledLink>
    ),
    internalLink: ({ children, mark }: BlockExternalLinkProps) => (
      <Link href={mark.slug.current} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    ),
  },
}

const PostContent = ({ content }: PostContentProps) => (
  <BlockContent blocks={content} serializers={serializers} />
)

export default PostContent
