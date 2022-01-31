import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import client from '.'

// TODO: is this needed?
const escapeHTML = (htmlString: string) =>
  htmlString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const BLOG_FIELDS_ALL_POSTS = `
  _id,
  title,
  lead,
  'slug': slug.current,
  author->{name},
  mainImage,
  publishedAt,
  'categories': categories[]->{ title, 'slug': slug.current }
`

const getAllPosts = async () => {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${BLOG_FIELDS_ALL_POSTS} }`
  )
  return results
}

const getPost = async (slug: string) => {
  const blogFields = `
    title,
    lead,
    author->{name},
    mainImage,
    publishedAt,
    'categories': categories[]->{ title, 'slug': slug.current },
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

  // console.log('result', result)

  return result
}

const getAllPostSlugs = async () => {
  const results = await client.fetch(
    `*[_type == "post"] { 'slug': slug.current }`
  )
  return results
}

const getAllCategorySlugs = async () => {
  const results = await client.fetch(
    `*[_type == "category"] { 'slug': slug.current }`
  )
  return results
}

const getPostsInCategory = async (categorySlug: string) => {
  const result = await client
    .fetch(
      `*[_type == "category" && slug.current == $slug]{ 
        _id,
        title,
        'relatedPosts': *[_type == 'post' && references(^._id)] | order(publishedAt desc) { ${BLOG_FIELDS_ALL_POSTS} }
    }`,
      {
        slug: categorySlug,
      }
    )
    .then((res) => res?.[0])

  console.log('category result', result)

  return result
}

const getBio = async () => {
  console.log('bio')
  const result = await client
    .fetch(
      `*[_type == "author" && slug.current == "roy"] {
      bio,
      image
    }`
    )
    .then((res) => res?.[0])

  console.log('result', result)

  return result
}

export {
  getAllCategorySlugs,
  getAllPostSlugs,
  getAllPosts,
  getPost,
  getPostsInCategory,
  getBio,
}
