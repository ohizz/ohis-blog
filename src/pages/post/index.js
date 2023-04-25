import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { getClient } from '../../../lib/sanity.server'
import { urlForImage } from '../../../lib/sanity'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const Blog = ({posts}) => {
    return (
      <>
        <Header/>
        <ul className='max-w-xl mx-6 md:mx-auto font-body'>
        <h2 className='text-sm md:text-3xl mb-4 font-semibold text-slate-800'>Blog</h2>
        {posts.length > 0 && posts.map(
          ({ _id, title, slug, publishedAt, mainImage }) =>
            slug && (
 <li className="text-2xl list-none mb-4" key={_id}>
                {mainImage && <Image
                  height={90}
                  width={100}
                  alt={title}
                  src={urlForImage(mainImage).url()} 
                    />}
                <Link className="text-xl text-slate-900" href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{' '}
                <div className='flex items-center'>
                <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg><p className='text-sm text-slate-500 ml-4'>{new Date(publishedAt).toDateString()}</p>
                </div>
              </li>
              
            )
        )}
        </ul>
      <Footer/>
      </>
    )
}

export async function getStaticProps({preview=false}) {
    const posts = await getClient(preview).fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) 
    `)
    return {
      props: {
        posts
      }
    }
}

export default Blog