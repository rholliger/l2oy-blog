import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { Posts } from '../types/Posts'
import Post from './Post'

const StyledContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      margin: 40px 0;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: ${theme.measures.gap.vertical}px ${theme.measures.gap.horizontal}px;
    `
  }}
`

const PostsList: FunctionComponent<Posts> = ({ posts }) => {
  return (
    <StyledContainer>
      {posts.map(
        (
          {
            slug,
            title,
            author,
            lead,
            publishedAt,
            categories,
            teaserImage,
            onlyAccessibleThroughLink,
          },
          index
        ) =>
          !onlyAccessibleThroughLink ? (
            <Post
              key={slug}
              slug={slug}
              type={index % 5 === 0 ? 'full' : 'half'}
              title={title}
              lead={lead}
              image={teaserImage}
              metadata={{
                date: publishedAt,
                categories,
                author: author.name,
              }}
            />
          ) : null
      )}
    </StyledContainer>
  )
}

export default PostsList
