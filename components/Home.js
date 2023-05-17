import Link from "next/link"
import { motion } from "framer-motion"
import Ticker from 'framer-motion-ticker';
import React from 'react';
import useSWR from 'swr'
import axios from 'axios';

export const Home = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const skills = ['reactjs', 'nextjs', 'typescript', 'tailwindcss', 'javascript', 'nodejs', 'monogdb'];
  const address = `http://localhost:3000/api/hearing`;
   const fetcher = url => axios.get(url).then(res => res.data)
   const { data, error } = useSWR(address, fetcher);
 
   if (error) <p>Loading failed...</p>;
   if (data) <h1>Loading...</h1>;

  return(
 <>
  {/* <Header/> */}
  <main className=" font-head flex flex-col mx-4 md:mx-16 justify-center min-h-[70vh]">
<div>
  <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
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
  <h1 className="font-head text-xl md:mt-10 font-semibold tracking-tight leading-1 mb-4">OS.</h1>
  </motion.div>
  {data &&  <div className="flex gap-2">
    <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
</svg> 
<p className="text-green-500 text-xs mb-4">{data.title} {' '} {data.artist}</p>
  </div>}
  <p className="text-sm tracking-tight md:leading-7">Hi, my name is ohis, i am a frontend developer from Lagos, Nigeria that likes to work more on user convenience, and polished designs, i always make sure that my works are userfriendly </p>

<p className="text-sm leading-6 md:leading-7 mt-4 mb-10">when i am not writing code, i watch tv shows o read articles.</p>
</div>

<Ticker duration={5} onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)} isPlaying={isPlaying}>
        {skills.map((item, index) => (
          <h3
            key={index}
            className="
              text-zinc-500 mr-4 font-head text-md
            "
            // style={{
            //   margin: '1rem 1rem 0',
            //   color: 'zinc'
            // }}
          >{item}</h3>
        ))}
      </Ticker>
<div className="mb-10 mt-10 flex flex-col flex-wrap">
  <h2 className="font-head mb-4 tracking-tight text-xl  text-zinc-200 border-b border-zinc-500 pb-2">projects</h2>

  <div className="flex flex-col gap-2">
  <div className="flex gap-2 flex-col">
   <div className="flex gap-2 items-center">
   <p className="text-md text-zinc-200">kick</p>   <span className="text-ds text-zinc-500">2023</span> <span className="flex items-center gap-1 border border-zinc-600  text-ds rounded h-5 px-1"><div className=" animate bg-green-500 w-2 h-2 rounded-full"></div>inprog</span>
    </div>
    <small className="text-ds text-zinc-500">reactjs + nodejs</small>
    <p className="text-xs leading-snug font-thin text-zinc-200">an ecommerce web app where you can buy sneaker</p>
                
     <div className="text-zinc-200 text-ds flex gap-x-2 self-end">  
      <Link className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full" target="_blank" href="https://github.com/ohizz/monitracker">code</Link><Link target="_blank" href="https://ecommerce-lime-chi.vercel.app/" className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div> 
      </div>
      <div className="flex flex-col gap-2">
  
   <div className="flex gap-1 md:gap-2 items-center">
   <p className="text-md text-zinc-200">budget tracker</p>   <span className="text-ds text-zinc-500">2022</span> 
    </div>
    <small className="text-ds text-zinc-500">reactjs + context API</small>
    <p className="text-xs leading-snug font-thin text-zinc-200">track expenses</p>
    
                
     <div className="text-zinc-200 text-ds flex gap-x-2 self-end">  
      <Link className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full" target="_blank"href="https://github.com/ohizz/monitracker">code</Link><Link target="_blank"  href="https://monitracker.vercel.app/" className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div> 
      </div>
      <div className="flex gap-2 flex-col">
  
  
  <div className="flex gap-2 items-center">
  <p className="text-md text-zinc-200">todo</p>  <span className="text-ds text-zinc-500">2022</span>
   </div>
   <small className="text-ds text-zinc-500">react.js</small>
   <p className="text-xs leading-snug font-thin text-zinc-200">itemized all your work</p>
   
               
    <div className="text-zinc-200 text-ds flex gap-x-2 self-end">  
     <Link className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full" target="_blank"  href="https://github.com/ohizz/todo">code</Link><Link target="_blank" href="https://webapptodo.vercel.app/" className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full">live</Link></div> 
     </div>
     
  </div>
    </div>
    
 </main>
  </>
 )
}