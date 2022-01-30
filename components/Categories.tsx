import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'

interface CategoriesProps {
  categories: string[]
}

const CategoriesLink = styled.a`
  ${({ theme, color }) => {
    return css`
      /* font-family: 'Lato', sans-serif; */
      font-size: 14px;
      font-weight: 400;
      padding: 3px 10px;
      border-radius: 4px;
      display: inline-block;

      color: ${theme.text};
      /* background-color: ${theme.text}; */
      border: 1px solid ${theme.text};

      &:hover {
        background-color: ${theme.text};
        color: ${theme.background};
        transition: 0.2s ease-out;
      }

      &:not(:first-of-type) {
        margin-left: 10px;
      }
    `
  }}
`

const Categories: FC<CategoriesProps> = ({ categories }) => (
  <div>
    <span>
      {categories?.map((category) => (
        <Link key={category} href="/posts/my-third-blog" passHref>
          <CategoriesLink>{category}</CategoriesLink>
        </Link>
      ))}
    </span>
  </div>
)

export default Categories
