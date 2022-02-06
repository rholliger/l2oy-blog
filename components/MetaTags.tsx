import Head from 'next/head'
import { FC } from 'react'

interface IMetaTags {
  title: string
  description: string
}

const MetaTags: FC<IMetaTags> = ({ title, description }) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
    </Head>
  )
}

export default MetaTags
