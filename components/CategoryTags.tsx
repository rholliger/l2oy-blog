import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const StyledCategoriesContainer = styled.div`
  text-align: right;
`

const StyledCategoriesDropdownContainer = styled.span`
  display: block;
`

const StyledCategoriesDropdown = styled.span`
  display: block;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  right: 0;
  margin-top: 10px;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      padding-left: 10px;
      display: inline;
    }
  }
`

const StyledDropdownButton = styled.button`
  ${({ theme }) => {
    return css`
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      font-weight: 400;
      padding: 3px 10px;
      display: inline-block;
      cursor: pointer;
      background: none;

      color: ${theme.foreground};
      border: 1px solid ${theme.foreground};
      margin-left: 10px;

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

const CategoryTags: FC<CategoryTagsProps> = ({ categories }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [shownCategories, setShownCategories] = useState<
    Category[] | undefined
  >(categories)
  const [remainingCategories, setRemainingCategories] = useState<Category[]>([])
  const [areRemainCategoriesShown, setAreRemainingCategoriesShown] =
    useState<boolean>(remainingCategories.length < 0)

  const handleDropdownButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setAreRemainingCategoriesShown(!areRemainCategoriesShown)
  }

  useEffect(() => {
    if (categories) {
      const remainingItems = [...categories]
      remainingItems.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }

        if (a.title > b.title) {
          return 1
        }

        return 0
      })
      const shownItems = remainingItems.splice(0, 3)
      setShownCategories(shownItems)
      setRemainingCategories(remainingItems)
    }
  }, [categories])

  return (
    <StyledCategoriesContainer>
      <span>
        {shownCategories?.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            passHref>
            <CategoriesLink>{category.title}</CategoriesLink>
          </Link>
        ))}
        {remainingCategories.length !== 0 && (
          <>
            <StyledDropdownButton
              onClick={handleDropdownButton}
              title="Remaining categories">
              <FontAwesomeIcon
                icon={areRemainCategoriesShown ? faChevronUp : faChevronDown}
              />
            </StyledDropdownButton>
            {areRemainCategoriesShown && (
              <StyledCategoriesDropdownContainer>
                <StyledCategoriesDropdown>
                  <ul>
                    {remainingCategories.map((remainingCategories) => (
                      <li key={remainingCategories.slug}>
                        <Link
                          key={remainingCategories.slug}
                          href={`/categories/${remainingCategories.slug}`}
                          passHref>
                          <CategoriesLink>
                            {remainingCategories.title}
                          </CategoriesLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </StyledCategoriesDropdown>
              </StyledCategoriesDropdownContainer>
            )}
          </>
        )}
      </span>
    </StyledCategoriesContainer>
  )
}

export default CategoryTags
