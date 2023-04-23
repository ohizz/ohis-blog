import Image from 'next/image'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  if (router.isFallback) {
      return <div>Loading...</div>
  }
  return (
    <>
    <article>
      <h1>{post.title}</h1>
      <span>By {post.name}</span>
      {post.categories && (
        <ul>
          Posted in
          {post.categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {post.authorImage && (
        <div>
          <Image
            src={urlForImage(post.authorImage).url()}
          alt={`${post.name}'s picture`}
          width={90}
          height={80}
          />
        </div>
      )}
      <PortableText
        value={post.body}
        components={ptComponents}
      />
    </article>
    </>
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