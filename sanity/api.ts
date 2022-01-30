import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import client from '.'

const escapeHTML = (htmlString: string) =>
  htmlString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const getAllPosts = async () => {
  const blogFields = `
    _id,
    title,
    lead,
    'slug': slug.current,
    author->{name},
    mainImage,
    publishedAt,
    'categories': categories[]->title
  `

  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${blogFields} }`
  )
  return results
}

export const getPost = async (slug: string) => {
  const blogFields = `
    title,
    lead,
    author->{name},
    mainImage,
    publishedAt,
    'categories': categories[]->title,
    body[]{..., "asset": asset->}
  `

  const result = await client
    .fetch(
      `*[_type == "post" && slug.current == $slug] {
    ${blogFields}
  }`,
      { slug }
    )
    .then((res) => res?.[0])

  console.log('result', result)

  return result
}

export const getAllSlugs = async () => {
  const results = await client.fetch(
    `*[_type == "post"] { 'slug': slug.current }`
  )
  return results
}
