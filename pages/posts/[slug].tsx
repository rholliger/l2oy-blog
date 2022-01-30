import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styled, { css } from 'styled-components'
import Categories from '../../components/Categories'
import PostContent from '../../components/PostContent'
import { getAllPosts, getAllSlugs, getPost } from '../../sanity/api'
import { IPost } from '../../types/Posts'
import { formattedDate } from '../../utils/dates'

interface PostProps {
  post: IPost
}

interface Slugs {
  slug: string
}

interface PostParams extends ParsedUrlQuery {
  slug: string
}

const StyledDiv = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.measures.gap.horizontal}px
        ${theme.measures.gap.horizontal}px;
      margin: ${theme.measures.gap.vertical}px 20px;
      background-color: ${theme.background};
      color: ${theme.text};
      box-shadow: ${theme.mainShadow};
    `
  }}
`

const StyledTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  font-size: 60px;
  font-weight: 700;
  margin: 0 0 40px 0;
`

const StyledMetadata = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`

const StyledText = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  text-align: left;
  margin: 40px 0;

  > div > div {
    margin: 30px 0;
  }
`

const StyledAuthor = styled.div`
  font-size: 15px;
  font-weight: 300;
`

const Posts: NextPage<IPost> = ({
  title,
  author,
  publishedAt,
  body,
  categories,
}) => {
  return (
    <StyledDiv>
      <StyledMetadata>
        {publishedAt && <div>{formattedDate(publishedAt)}</div>}
        {categories && <Categories categories={categories} />}
      </StyledMetadata>
      <StyledTitle>{title}</StyledTitle>
      <StyledAuthor>by {author.name} Holliger</StyledAuthor>
      <StyledText>
        <PostContent content={body} />
      </StyledText>
    </StyledDiv>
  )
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const post = await getPost((params as PostParams).slug)

  return {
    props: {
      ...post,
    },
  }
}

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const slugs: Slugs[] = await getAllSlugs()

  const paths = slugs?.map((s) => ({ params: { slug: s.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default Posts