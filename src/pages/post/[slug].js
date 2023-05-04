import Image from 'next/image'
import { useRouter } from 'next/router'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import { urlForImage } from "../../../lib/sanity"
import { getClient } from "../../../lib/sanity.server"
import { IndexBody } from '../../../components/IndexBody'
import { Footer } from '../../../components/Footer'

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
    <IndexBody/>
    <article className='max-w-2xl mx-6 md:mx-auto font-body'>
      <h1 className='text-3xl md:text-6xl font-semibold border-b py-4 border-slate-200'>{post.title}</h1>
      <span className='block my-4'>By {post.name}</span>
      <div className='flex items-center mb-6'>
      {post.categories && (
        <ul className='font-semibold'>
          {post.categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      <svg className="fill-slate-500 mr-1 mx-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg><p className='text-sm text-slate-500 '>{new Date(post.publishedAt).toDateString()}</p>
                </div>
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
    <Footer/>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  publishedAt,
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