import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Projects = () => {
    return (
      <>
   <div className="max-w-6xl flex flex-col mx-5 lg:mx-auto min-h-screen font-body">
   <h1 className=' text-8xl font-bold text-right tracking-tighter text-right leading-snug'>os.</h1>
   <div className='flex flex-col just gap-4'>
   <div className='flex justify-start'>
    <h2 className='font-semibold tracking-tighter leading-9 text-6xl'><Link href="#">Kicks</Link></h2>
    <p>2023</p>
    </div>
    <div className='flex justify-start'>
    <h2 className='font-semibold tracking-tight text-6xl'><Link href="#">Budget tracker</Link></h2>
    <p>2023</p>
    </div>
    <div className='flex justify-start'>
    <h2 className='font-semibold tracking-tight text-6xl'><Link href="#">Todo</Link></h2>
    <p>2023</p>
    </div>
    <div className='text-right font-thin flex flex-col'>
      <h4 className='font-normal'>stack</h4>
      <p>javascript</p>
      <p>React.js</p>
      <p>Next.js</p>
      <p>typescript</p>
    </div>
   </div>
   <Footer/>
   </div>
      </>
)}

export default Projects