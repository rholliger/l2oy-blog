import type { GetStaticProps, NextPage } from 'next'
import MetaTags from '../components/MetaTags'
import PostsList from '../components/PostsList'
import { getAllPosts } from '../sanity/api'
import { IPost } from '../types/Posts'

interface PostsProps {
  posts: IPost[]
}

const Home: NextPage<PostsProps> = ({ posts }) => (
  <>
    <MetaTags title="Home | Roy.dev" description="Home page" />
    <PostsList posts={posts} />
  </>
)

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

export default Home
