import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import LayoutContainer from '../components/LayoutContainer'
import Post from '../components/Post'
import { getAllPosts } from '../sanity/api'
import { urlFor } from '../sanity/utils'
import { IPost } from '../types/Posts'

interface PostsProps {
  posts: IPost[]
}

const StyledContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      padding: 60px 20px;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: ${theme.measures.gap.vertical}px ${theme.measures.gap.horizontal}px;
    `
  }}
`

const Home: NextPage<PostsProps> = ({ posts }) => {
  console.log('posts', posts)

  return (
    <StyledContainer>
      {posts.map(
        (
          { slug, title, author, lead, publishedAt, categories, mainImage },
          index
        ) => (
          <Post
            key={slug}
            slug={slug}
            type={index % 4 === 0 ? 'full' : 'half'}
            title={title}
            lead={lead}
            image={mainImage}
            metadata={{
              date: publishedAt,
              categories,
              author: author.name,
            }}
          />
        )
      )}
    </StyledContainer>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = await getAllPosts()

  console.log('posts', posts)

  return {
    props: {
      posts,
    },
  }
}

export default Home
