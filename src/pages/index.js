import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { getClient } from "../../lib/sanity.server"
import { urlForImage } from '../../lib/sanity'
import { Home } from '../../components/Home'

const Index = ({posts}) => {
    return (
      <div>
        <Home/>
        {posts.length > 0 && posts.map(
          ({ _id, title, slug, publishedAt, mainImage }) =>
            slug && (
    
              <li className="text-2xl list-none" key={_id}>
                <Image
                  height={90}
                  width={100}
                  src={urlForImage(mainImage).url()} 
                    />
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      </div>
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

export default Index