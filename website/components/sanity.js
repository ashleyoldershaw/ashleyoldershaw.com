const sanityClient = require('@sanity/client')

export const sanity = sanityClient({
  projectId: 'ophqtfel',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true, 
})