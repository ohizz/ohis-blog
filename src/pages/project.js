import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
      <div className='bg-gray-50'>
      <main className=" py-8 font-body flex flex-col mx-16 justify-center min-h-screen-[100vh]">
    <Header/>
    <div>
    <div>
    <Link href='#' className='tracking-tightest text-6xl'>kicks</Link>
  </div>
  <div>
    <Link href='#' className='tracking-tightest text-6xl'>budget tracker</Link>
  </div>
  <div>
    <Link href='#' className='tracking-tightest text-6xl'>todo</Link>
  </div>
    </div>

<div className='text-sm text-right'>
  <h3 className='font-lighter'>stack</h3>
  <p>javascript</p>
  <p>typescript</p>
  <p>react.js</p>
  <p>Next.js</p>
  <p>tailwindcss</p>
  <p>node.js</p>
  <p>mongodb</p>
</div>
 </main>
 <Footer/>
      </div>
)}

export default Projects