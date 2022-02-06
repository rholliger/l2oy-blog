import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styled, { css } from 'styled-components'
import CategoryTags from '../../components/CategoryTags'
import MetaTags from '../../components/MetaTags'
import PostContent from '../../components/PostContent'
import { getAllPostSlugs, getPost } from '../../sanity/api'
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
      padding: ${theme.measures.gap.horizontal}px;
      margin: 40px 0;
      background-color: ${theme.background};
      color: ${theme.text};
      box-shadow: ${theme.mainShadow};

      @media ${theme.devices.tablet} {
        padding: 20px;
      }
    `
  }}
`

const StyledTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  font-size: clamp(38px, 8vw, 60px);
  font-weight: 700;
  margin: 0 0 40px 0;
`

const StyledMetadata = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
  lead,
}) => {
  return (
    <StyledDiv>
      <MetaTags title={title} description={lead} />
      <StyledMetadata>
        {publishedAt && <div>{formattedDate(publishedAt)}</div>}
        {categories && <CategoryTags categories={categories} />}
      </StyledMetadata>
      <StyledTitle>{title}</StyledTitle>
      <StyledAuthor>by {author.name}</StyledAuthor>
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
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const slugs: Slugs[] = await getAllPostSlugs()

  const paths = slugs?.map((s) => ({ params: { slug: s.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default Posts
