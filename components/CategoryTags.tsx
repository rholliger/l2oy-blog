import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'

interface CategoryTagsProps {
  categories?: Category[]
}

const CategoriesLink = styled.a`
  ${({ theme }) => {
    return css`
      /* font-family: 'Lato', sans-serif; */
      font-size: 14px;
      font-weight: 400;
      padding: 3px 10px;
      border-radius: 0px;
      display: inline-block;

      color: ${theme.foreground};
      /* background-color: ${theme.text}; */
      border: 1px solid ${theme.foreground};

      &:hover {
        background-color: ${theme.foreground};
        color: ${theme.background};
        transition: 0.2s ease-out;
      }

      &:not(:first-of-type) {
        margin-left: 10px;
      }
    `
  }}
`

const CategoryTags: FC<CategoryTagsProps> = ({ categories }) => (
  <div>
    <span>
      {categories?.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          passHref>
          <CategoriesLink>{category.title}</CategoriesLink>
        </Link>
      ))}
    </span>
  </div>
)

export default CategoryTags
