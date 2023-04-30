import Image from "next/image"
import Link from 'next/link'
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Static } from "./static"
import { urlForImage } from "../lib/sanity"


export const Home = () => {
 return(
 <>
  <main>
   <Header/>
    <div className=' max-w-8xl mx-6 flex-wrap  flex-row md:flex md:gap-20 md:justify-center md:item-center md:mx-auto font-body'>
        <Static/>

    <div className='hidden md:block md:w-2/5 lg:w-2/5 flex gap-2 flex-wrap mb-3'>
        <div>
        <div className=' flex flex-col flex-1 m-0 list-none border border-slate-200 p-6'>
         <Link href='' className='tracking-tighter font-semibold text-2xl '>E commerce store</Link>
                <span className='mt-2 block text-xs tracking-wider'>REACTJS + CONTENXT API</span>
                <p className='text-md text-netural-600 my-4'>online shopping for everything sneakers</p>
                <div className="flex items-center gap-3">
                <p className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>{' '}Live
                </p>
                <p className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
</svg>Code
                </p>
                </div>
            </div>
            <div className='my-2 list-none border border-slate-200 p-6'>
                <Link href='' className='tracking-tighter font-semibold text-2xl'>Budget Tracker</Link>
                <span className='mt-2 block text-xs tracking-wider'>REACTJS + CONTEXT API</span>
                <p className='text-md text-netural-600 my-4'>a todo web app that schedule what you plan avtivities</p>
                <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>Live</span>
            </div>
            <div className='m-0 list-none border border-slate-200 p-6'>
                <Link href='' className='tracking-tighter font-semibold text-2xl'>Todo App</Link>
                <span className='mt-2 block text-xs tracking-wider'>REACTJS</span>
                <p className='text-md text-netural-600 my-4'>a todo web app that schedule what you plan avtivities</p>
                <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>Live</span>
            </div>
        </div>
        </div>
       </div>
 </main>
  </>
 )
}