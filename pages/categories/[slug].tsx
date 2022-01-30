import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styled, { css } from 'styled-components'
import PostsList from '../../components/PostsList'
import { getAllCategorySlugs, getPostsInCategory } from '../../sanity/api'
import { IPost } from '../../types/Posts'

interface CategoryProps {
  title: string
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
      /* font-family: 'Lato', sans-serif; */
      width: 100%;
      font-size: 36px;
      font-weight: 200;
      padding: 12px 24px;
      border-radius: 0px;
      display: flex;
      align-items: center;
      text-align: center;

      color: ${theme.foreground};
      /* background-color: ${theme.text}; */
      /* border: 2px solid ${theme.text}; */

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

const Categories: NextPage<CategoryProps> = ({ title, relatedPosts }) => {
  return (
    <div>
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
  }
}

export const getStaticPaths: GetStaticPaths<CategoryParams> = async () => {
  const slugs: Slugs[] = await getAllCategorySlugs()

  const paths = slugs?.map((s) => ({ params: { slug: s.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default Categories
