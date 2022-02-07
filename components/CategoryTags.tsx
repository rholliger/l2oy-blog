import Link from 'next/link'
import { FC, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

interface CategoryTagsProps {
  categories?: Category[]
}

const CategoriesLink = styled.a`
  ${({ theme }) => {
    return css`
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      font-weight: 400;
      padding: 3px 10px;
      border-radius: 0px;
      display: inline-block;

      color: ${theme.foreground};
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

const mockCategories = [
  {
    title: 'Test 1',
  },
  {
    title: 'Test 1',
  },
  {
    title: 'Test 1',
  },
  {
    title: 'Test 1',
  },
  {
    title: 'Test 1',
  },
  {
    title: 'Test 1',
  },
]

const CategoryTags: FC<CategoryTagsProps> = ({ categories }) => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef?.current?.offsetWidth) {
      // TODO: only show the amount of categories that has space on one line
      console.log('elementwidth', divRef?.current?.offsetWidth)
      console.log('parentwidth', divRef?.current.parentElement?.offsetWidth)
    }
  }, [divRef.current?.offsetWidth])

  return (
    <div ref={divRef}>
      <span>
        {mockCategories?.map((category) => (
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
}

export default CategoryTags
