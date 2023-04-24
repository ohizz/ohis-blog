import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { getClient } from "../../lib/sanity.server"
import { urlForImage } from '../../lib/sanity'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

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
                <p className='text-sm text-slate-500'>{new Date(publishedAt).toDateString()}</p>
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