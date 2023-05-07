import  {Footer} from "./Footer"
import { Header } from "./Header"
import Link from "next/link"

export const Home = () => {
 
  return(
 <>
  <main className="pt-4 font-body flex flex-col mx-4 md:mx-16 justify-center min-h-screen-[100vh]">
    <Header/>

  <h1 className="text-3xl mt-6 md:mt-10 font-semibold tracking-tight leading-1 mb-4">Hello there.</h1>
  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7">Hi I m a frontend developer. My focus is on building dynamic and interactive websites that provide engaging user experiences.</p>

  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7 my-2">I m skilled in HTML, CSS, and JavaScript, and I m proficient in a variety of frontend frameworks such as React, Vue, and Angular. I have a strong eye for design and understand the importance of creating websites that not only look great but also function seamlessly across all devices.</p>

<p className="text-sm leading-6 md:text-md md:leading-7 "> I m passionate about staying up-to-date with the latest trends and technologies in the frontend development field, and I m always looking for new ways to improve my skills and deliver better results.</p>
 </main>
 <div className='flex justify-between flex-col gap-3 '>
    <div className='mt-6 pb-4 border-zinc-900 border-b-2 flex'>
    <Link href='#' className='font-body font-semibold md:tracking-tightest text-5xl md:text-8xl'>kicks: An Ecommerce web app</Link>

  </div>
  <div className='my-8 pb-4 border-zinc-900 border-b-2 text-right'>
    <Link href='#' className='font-body font-semibold text-right text-5xl md:tracking-tightest md:text-8xl'><p>budget tracker: track your expense</p></Link>
  </div>
  <div className='pb-4 border-zinc-900 border-b-2 '>
    <Link href='#' className='font-body font-semibold md:tracking-tightest text-5xl md:text-8xl'>todo web app</Link>
  </div>
    </div>
 <Footer/>
  </>
 )
}