
import {createClient} from 'next-sanity'
import {config} from './config'

export const sanityClient = createClient(config)
const tok = process.env.SANITY_STUDIO_API_TOKEN

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: tok,
})

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient