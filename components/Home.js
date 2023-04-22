import Image from "next/image"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { urlForImage } from "../lib/sanity"

export const Home = () => {
 return(
  <>
   <main>
    <Header/>
    <div className='mb-4 px-10 text-2xl'>
        <div className='max-w-4xl mx-auto'>
       
        <h1 className="font-bold text-3xl mb-4">Hello there.</h1>
        <p>I’m <span className="font-bold">ohis</span> I am a software engineer. I love building polished web user interfaces with frontend technology.I am interested in user experience, accessibility and design system</p>

<p>As well as coding and designing, you can find me binging tv shows, eating and occasionally rambling on Twitter.</p>

<p className="p-4 my-3 rounded bg-gray-100 text-slate-800 shadow-lg shadow-slate-100 w-fit md:w-auto">Open to opportunities from mid-April 2023.</p>
    
        </div>
        </div>
    <Footer/>
   </main>
  </>
 )
}