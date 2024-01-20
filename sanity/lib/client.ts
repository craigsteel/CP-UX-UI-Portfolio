import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, muxTokenID, muxTokenSecret, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
