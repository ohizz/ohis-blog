import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
    <>
    <main className="max-w-5xl mx-4 md:mx-auto min-h-screen-[100vh] font-body">
    <Header/>
    <div className='flex justify-between flex-col gap-3 '>
    <div className='mt-6 pb-4 border-zinc-900 border-b-2 flex'>
    <Link href='#' className='font-body font-semibold md:tracking-tightest text-4xl md:text-8xl'>kicks</Link>

  </div>
  <div className='my-8 pb-4 border-zinc-900 border-b-2 text-right'>
    <Link href='#' className='font-body font-semibold text-right md:tracking-tightest text-4xl md:text-8xl'>budgettracker</Link>
  </div>
  <div className='pb-4 border-zinc-900 border-b-2 '>
    <Link href='#' className='font-body font-semibold md:tracking-tightest text-4xl md:text-8xl'>todo</Link>
  </div>
    </div>

{/* <div className='my-6 text-right text-xs tracking-tight font-lighter'>
  <h3 className='font-semibold text-sm'>stack</h3>
  <p>javascript</p>
  <p>typescript</p>
  <p>react.js</p>
  <p>Next.js</p>
  <p>tailwindcss</p>
  <p>node.js</p>
  <p>mongodb</p>
</div> */}
</main>
    <Footer/>
    </>
)}

export default Projects