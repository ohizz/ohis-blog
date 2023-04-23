import Image from 'next/image'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import { urlForImage } from "../../../lib/sanity"
import { getClient } from "../../../lib/sanity.server"

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={urlForImage(value).url()}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const{title, categories, body, authorImage, name} = post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <Image
            src={urlForImage(authorImage).url()}
          alt={`${name}'s picture`}
          />
        </div>
      )}
      <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await getClient().fetch(
  groq`*[_type == "post" && defined(slug.current)][].slug.current`
 )
  return{
  paths: paths.map((slug) => ({params: {slug}})),
  fallback: true,
 }
 }
 
 export async function getStaticProps({params, preview = false}) {
  const post = await getClient(preview).fetch(query, {slug: params.slug})
  return{
   props: {
    post,   
  }
 }
 }
export default Post