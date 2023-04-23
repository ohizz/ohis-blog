import createImageUrlBuilder from '@sanity/image-url'
import { definePreview } from 'next-sanity/preview'
import { config } from './config'

export const imageBuilder = createImageUrlBuilder(config)
const projId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const data = process.env.SANITY_STUDIO_API_DATASET;

export const urlForImage = (source) =>
  imageBuilder.image(source)

export const usePreview = definePreview({
  projectId: projId,
  dataset: data,
})