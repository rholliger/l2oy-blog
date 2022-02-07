import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styled, { css } from 'styled-components'
import Loader, { StyledLoaderContainer } from '../../components/Loader'
import MetaTags from '../../components/MetaTags'
import PostsList from '../../components/PostsList'
import { getAllCategorySlugs, getPostsInCategory } from '../../sanity/api'
import { IPost } from '../../types/Posts'
import ErrorPage from '../404'

interface CategoryProps {
  title: string
  description: string
  relatedPosts: IPost[]
}

interface Slugs {
  slug: string
}

interface CategoryParams extends ParsedUrlQuery {
  slug: string
}

const StyledCategoriesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledCategoryTitle = styled.div`
  ${({ theme }) => {
    return css`
      font-family: 'Oxygen', sans-serif;
      width: 100%;
      font-size: clamp(28px, 6vw, 40px);
      font-weight: 200;
      padding: 16px 0px;
      border-radius: 0px;
      display: flex;
      align-items: center;
      text-align: center;

      color: ${theme.foreground};

      &:before,
      &:after {
        content: '';
        flex: 1;
        border-bottom: 1px solid ${theme.foreground};
        opacity: 0.3;
      }

      &:before {
        margin-right: 30px;
      }

      &:after {
        margin-left: 30px;
      }
    `
  }}
`

const Categories: NextPage<CategoryProps> = ({
  title,
  description,
  relatedPosts,
}) => {
  const router = useRouter()

  if (!router.isFallback && !relatedPosts) {
    return <ErrorPage />
  }

  if (router.isFallback) {
    return (
      <StyledLoaderContainer>
        <Loader />
      </StyledLoaderContainer>
    )
  }

  return (
    <div>
      <MetaTags title={title} description={description} />
      <StyledCategoriesTitleContainer>
        <StyledCategoryTitle>{title}</StyledCategoryTitle>
      </StyledCategoriesTitleContainer>
      <PostsList posts={relatedPosts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const category = await getPostsInCategory((params as CategoryParams).slug)

  return {
    props: {
      ...category,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths<CategoryParams> = async () => {
  const slugs: Slugs[] = await getAllCategorySlugs()

  const paths = slugs?.map((s) => ({ params: { slug: s.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export default Categories
