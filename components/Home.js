import  {Footer} from "./Footer"
import { Header } from "./Header"
import Link from "next/link"
import { motion } from "framer-motion"
import Ticker from 'framer-motion-ticker';
import React from 'react';

export const Home = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const skills = ['reactjs', 'nextjs', 'tailwindcss', 'javascript', 'nodejs'];

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

<Ticker duration={5} onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)} isPlaying={isPlaying}>
        {skills.map((item, index) => (
          <h3
            key={index}
            className="
              text-zinc-500 my-10 mr-4
            "
            // style={{
            //   margin: '1rem 1rem 0',
            //   color: 'zinc'
            // }}
          >{item}</h3>
        ))}
      </Ticker>
<div className="mb-10 flex flex-col flex-wrap">
  <h2 className="mb-4 tracking-tighter text-md text-zinc-400 border-b border-zinc-500 pb-2">projects</h2>
 <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full">
              <p className="text-sm text-zinc-200 flex flex-wrap gap-1 flex-col items-start flex-2">kick <span className="border border-zinc-600 text-ds rounded p-1 ">ongoing</span> </p>
              <div className="text-zinc-400 text-ds flex flex-col items-start flex-5 gap-2">
                <div className="flex gap-1 items-center flex-wrap">
                <small>react + nodejs</small>
                </div>
                <p className="text-xs text-zinc-200">an ecommerce web app where you can buy sneaker</p>
                </div>
                </div>  
                
              <div className="text-zinc-200 text-ds flex flex-wrap md:flex-nowrap gap-2">
                <Link href="#" className="border-2 border-zinc-700 py-1 px-2 rounded-full">code</Link><Link href="#" className="border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div>
            </div>
    <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full">
              <p className="text-sm text-zinc-200 flex flex-wrap gap-1 flex-col items-start flex-2">budget tracker</p>
              <div className="text-zinc-400 text-ds flex flex-col items-start flex-5 gap-2">
                <div className="flex gap-1 items-center">
                <small>react.js + context API</small>
                </div>
                <p className="text-zinc-200 text-sm">track expenses</p>
                </div>
                </div>  
              <div className="text-zinc-200 text-ds flex gap-2 flex-wrap md:flex-nowrap ">
                <Link className="border-2 border-zinc-700 py-1 px-2 rounded-full" href="#">code</Link><Link href="#" className="border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div>
            </div>
    <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full">
              <p className="text-sm text-zinc-200 flex flex-wrap gap-1 flex-col items-start flex-2">todo</p>
              <div className="text-zinc-400 text-ds flex flex-col items-start flex-5 gap-2">
                <div className="flex gap-1 items-center">
                <small>react.js</small>
                </div>
                <p className="text-zinc-200 text-sm">itemized all your work</p>
                </div>
                </div>  
              <div className="text-zinc-200 text-ds flex gap-2 flex-wrap md:flex-nowrap ">
                <Link href="#" className="border-2 border-zinc-700 py-1 px-2 rounded-full">code</Link><Link href="#" className="border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div>
            </div>
    </div>
    </div>
 </main>
  </>
 )
}