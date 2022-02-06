import client from '.'

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
        description,
        'relatedPosts': *[_type == 'post' && references(^._id)] | order(publishedAt desc) { ${BLOG_FIELDS_ALL_POSTS} }
    }`,
      {
        slug: categorySlug,
      }
    )
    .then((res) => res?.[0])

  return result
}

const getBio = async () => {
  const result = await client
    .fetch(
      `*[_type == "author" && slug.current == "roy"] {
      bio,
      image
    }`
    )
    .then((res) => res?.[0])

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
