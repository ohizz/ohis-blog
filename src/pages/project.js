import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
      <>
   <div className="mt-4 max-w-6xl flex flex-col mx-5 lg:mx-auto h-auto font-body">
   <Header/>
   <div className='flex flex-col just gap-1'>
   <div className='flex justify-start'>
    <h2 className='font-semibold text-slate-500 text-3xl md:font-semibold tracking-tighter md:tracking-tightest leading-9 md:text-6xl'><Link href="#">Kicks</Link></h2>
    <p>2023</p> ↗
    </div>
    <div className='flex justify-start'>
    <h2 className='font-semibold text-slate-500 text-3xl md:font-semibold tracking-tighter md:tracking-tightest md:text-6xl'><Link href="#">Budget tracker</Link></h2>
    <p>2023</p> ↗
    </div>
    <div className='flex justify-start'>
    <h2 className='font-semibold text-slate-500 text-3xl md:font-semibold tracking-tighter md:tracking-tightest md:text-6xl'><Link href="#">Todo</Link></h2>
    <p>2023</p> ↗
    </div>
    <div className='text-right text-xs md:text-sm font-thin flex flex-col mb-5'>
      <h4 className='font-semibold'>stack</h4>
      <p>javascript</p>
      <p>React.js</p>
      <p>Next.js</p>
      <p>typescript</p>
      <p>Node.js</p>
      <p>MongoDB</p>
    </div>
   </div>
   <Footer/>
   </div>
      </>
)}

export default Projects