import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
    <>
    <main className="max-w-4xl mx-14 min-h-screen-[100vh] font-body">
    <Header/>
    <div className=''>
    <div className='mt-4 flex'>
    <Link href='#' className=' '>kicks</Link>
    <span>2023↗</span>
  </div>
  <div className=''>
    <Link href='#' className=''>budgettracker</Link>
    <span>2022↗</span>
  </div>
  <div className=''>
    <Link href='#' className=''>todo</Link>
    <span>2022↗</span>
  </div>
    </div>

{/* <div className='text-xs font-lighter'>
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