import Image from 'next/image'
import { useRouter } from 'next/router'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import { urlForImage } from "../../../lib/sanity"
import { getClient } from "../../../lib/sanity.server"
import { Header } from '../../../components/Header'
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
    <Header/>
    <article className='max-w-2xl mx-6 md:mx-auto font-body'>
      <h1 className='text-6xl border-b py-4 border-slate-200'>{post.title}</h1>
      <span className='block my-4'>By {post.name}</span>
      {post.categories && (
        <ul className='border border-slate-300 p-1 px-2 w-fit rounded'>
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
    <Footer/>
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