import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
      <div className='bg-gray-20'>
      <main className=" py-8 font-body flex flex-col mx-3 md:mx-16  justify-center min-h-screen-[100vh]">
    <Header/>
    <div>
      <h1 className='font-ear text-left tracking-tighter underline text-xl '>Projects</h1>
    <div className='mt-2 flex'>
    <Link href='#' className='tracking-tighter text-2xl md:text-4xl'>kicks</Link>
    <span>2023↗</span>
  </div>
  <div className='flex'>
    <Link href='#' className='tracking-tighter text-2xl md:text-4xl'>budget tracker</Link>
    <span>2022↗</span>
  </div>
  <div className='flex'>
    <Link href='#' className='tracking-tighter text-2xl md:text-4xl'>todo</Link>
    <span>2022↗</span>
  </div>
    </div>

<div className='text-xs flex flex-col gap-2 font-lighter text-right'>
  <h3 className='font-semibold text-sm'>stack</h3>
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