
import {createClient} from 'next-sanity'
import {config} from './config'

export const sanityClient = createClient(config)
const tok = process.env.NEXT_PUBLIC_TOKEN

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: tok,
})

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient