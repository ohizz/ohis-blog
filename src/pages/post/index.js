import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { getClient } from '../../../lib/sanity.server'
import { urlForImage } from '../../../lib/sanity'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { Static } from '../../../components/static'

export const Blog = ({posts}) => {
    return (
      <>
        <Header/>
        <div className=' max-w-8xl mx-6 flex-wrap  flex-row md:flex md:gap-20 md:justify-center md:item-center md:mx-auto font-body'>
        <Static/>
        <div className='hidden md:w-2/5 lg:w-2/5'>
        <h1 className="font-bold text-3xl mb-4">Hello there.</h1>
        <p>I’m <span className="font-bold">ohis</span> I am a software engineer. I love building polished web user interfaces with frontend technology.I am interested in user experience, accessibility and design system</p>
        <p className='my-4'>As well as coding and designing, you can find me binging tv shows, eating and occasionally rambling on Twitter.</p>
        <p className="p-3 mb-3 rounded bg-gray-100 text-slate-800 shadow-sm shadow-slate-100 w-fit md:w-auto">I am currently open for opportunities.</p>
        </div>
        <ul className='md:w-2/5 lg:w-2/5 font-body md:flex md:flex-col items-center'>
        {posts.length > 0 && posts.map(
          ({ _id, title, slug, publishedAt, mainImage }) =>
            slug && (
 <li className="text-2xl list-none mb-3 border border-slate-200 flex gap-2 p-6" key={_id}>
                {mainImage && <Image
                  height={90}
                  width={100}
                  alt={title}
                  src={urlForImage(mainImage).url()} 
                    />}
                <Link className="text-xl tracking-tighter" href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{' '}
                <div className='flex items-center mt-3'>
                <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg><p className='text-sm ml-1 tracking-tighter'>{new Date(publishedAt).toDateString()}</p>
                </div>
              </li>
              
            )
        )}
        </ul>
        </div>
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