import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Posts {
  posts: IPost[]
}

export interface Author {
  name: string
}

export interface IPost {
  title: string
  slug: string
  lead: string
  categories?: Category[]
  teaserImage?: SanityImageSource & { alt: string }
  mainImage?: SanityImageSource & { alt: string }
  publishedAt?: string
  author: Author
  body: Array
  onlyAccessibleThroughLink: boolean
}
