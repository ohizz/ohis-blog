import  {Footer} from "./Footer"
import { Header } from "./Header"
import Link from "next/link"
import { motion } from "framer-motion"

export const Home = () => {
 
  return(
 <>
  {/* <Header/> */}
  <main className=" font-head flex flex-col mx-4 md:mx-16 justify-center min-h-[70vh]">
<div>
  <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
  <h1 className="text-xl md:mt-10 font-semibold tracking-tight leading-1 mb-4">OS.</h1>
  </motion.div>
  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7">Hi my name is ohis i am a frontend developer that is obessed with detials and design </p>

<p className="text-sm leading-6 md:text-md md:leading-7 mt-4"> I m passionate about staying up-to-date with the latest trends and technologies in the frontend development field, and I m always looking for new ways to improve my skills and deliver better results.</p>
</div>
<div className="my-10 flex flex-col flex-wrap">
  <h2 className="mb-4 tracking-tighter text-md text-zinc-400 border-b border-zinc-500 pb-2">projects</h2>
  {/* <motion.li  className="card list-none" whileHover={{
  scale: 0.7,
  transition: {
    duration: .1
  }
}}> */}
 <Link href="#" className="">
        <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full"><p className="text-xs text-zinc-200 flex flex-wrap gap-1 flex-col items-start flex-2">kick<span className="border border-zinc-400 text-ds rounded px-1">ongoing</span></p><small className="text-zinc-400 text-ds flex flex-col items-start flex-5">react + nodejs <span className="text-zinc-300 tracking-tight md:tracking-tight text-xs">an ecommerce web app where you can buy sneaker</span></small></div>  <p className="text-zinc-200 text-ds">2023</p>
            </div>
    </Link>
{/* </motion.li> */}
    <Link href="#" className="my-8 hover:border hover:bg-zinc-800 p-2 rounded">
        <div className="flex justify-center gap-4 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="flex-2 text-zinc-300 text-xs">budget tracker</p><small className="text-zinc-400 text-ds flex flex-col items-start flex-5">reactjs + context API<span className="text-zinc-300 tracking-tight md:tracking-tight text-xs">this app helps you track your expenses</span></small></div> <p className="text-zinc-200 text-ds">2022</p></div>
    </Link>
    <Link href="#" className=" hover:border hover:bg-zinc-800 p-2 rounded">
        <div className="flex justify-center gap-4 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="text-zinc-300 text-xs flex-2">todo</p><small className="text-zinc-400 text-ds flex flex-col items-start flex-5">reactjs <span className="text-zinc-300 tracking-tight md:tracking-tight text-xs">a web app that helps you iterate what you want to do in your daily activities</span></small></div> <p className="text-zinc-200 text-ds">2022</p></div>
    </Link>
    </div>
 </main>
  </>
 )
}