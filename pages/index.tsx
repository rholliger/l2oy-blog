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
    <MetaTags
      title="Home | Roy.dev"
      description="Stay updated with the newest trends in tech, AI, gadgets, and more on our blog. Get easy-to-understand articles, tips, and reviews to keep you informed and ahead in the ever-evolving world of technology. Whether you're a tech enthusiast or just curious, our blog is your essential guide to the digital age."
    />
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
