import  {Footer} from "./Footer"
import { Header } from "./Header"
import Link from "next/link"

export const Home = () => {
 
  return(
 <>
  <Header/>
  <main className=" font-body flex flex-col mx-4 md:mx-16 justify-center min-h-[60vh]">

  <h1 className="text-3xl md:mt-10 font-semibold tracking-tight leading-1 mb-4">Hello there.</h1>
  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7">Hi I m a frontend developer. My focus is on building dynamic and interactive websites that provide engaging user experiences.</p>

  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7 my-2">I m skilled in HTML, CSS, and JavaScript, and I m proficient in a variety of frontend frameworks such as React and Nextjs and i also worked with Nodejs and MongoDB. I have a strong eye for design and understand the importance of creating websites that not only look great but also function seamlessly across all devices.</p>

<p className="text-sm leading-6 md:text-md md:leading-7 "> I m passionate about staying up-to-date with the latest trends and technologies in the frontend development field, and I m always looking for new ways to improve my skills and deliver better results.</p>
 </main>
 
 <Footer/>
  </>
 )
}