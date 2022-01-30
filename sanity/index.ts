import sanityClient from '@sanity/client'

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-08-31',
  // useCdn === true, gives you fast response, it will get you cached data
  useCdn: process.env.NODE_ENV === 'production',
}

export default sanityClient(options)
