import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Author {
  name: string
}

export interface IPost {
  title: string
  slug: string
  lead?: string
  categories?: string[]
  mainImage?: SanityImageSource
  publishedAt?: string
  author: Author
  body: Array
}
