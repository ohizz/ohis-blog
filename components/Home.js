import  {Footer} from "./Footer"
import { Header } from "./Header"
import Link from "next/link"

export const Home = () => {
 
  return(
 <>
  {/* <Header/> */}
  <main className=" font-head flex flex-col mx-4 md:mx-16 justify-center min-h-[70vh]">
<div>
  <h1 className="text-xl md:mt-10 font-semibold tracking-tight leading-1 mb-4">OS.</h1>
  <p className="text-sm leading-6 md:text-md tracking-tight md:leading-7">Hi my name is ohis i am a frontend developer that is obessed with detials and design </p>

<p className="text-sm leading-6 md:text-md md:leading-7 mt-4"> I m passionate about staying up-to-date with the latest trends and technologies in the frontend development field, and I m always looking for new ways to improve my skills and deliver better results.</p>
</div>
<div className="my-10 flex flex-col flex-wrap">
  <h2 className="mb-4 tracking-tighter text-xl text-zinc-400 border-b border-zinc-500 pb-2">projects</h2>
    <Link href="#" className=" hover:border hover:bg-zinc-800 p-2 rounded">
        <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full"><p className="text-base text-zinc-200 flex-2">kick<span className="border border-slate-700 text-xs rounded p-1 ml-5">ongoing</span></p><small className="text-zinc-400 text-xs flex flex-col items-start flex-5">react + nodejs <span className="text-zinc-300 tracking-tight md:tracking-tight md:text-sm">an ecommerce web app where you can buy sneaker</span></small></div>  <p className="text-zinc-200">2023</p>
            </div>
    </Link>
    <Link href="#" className="my-8 hover:border hover:bg-zinc-800 p-2 rounded">
        <div className="flex justify-center gap-4 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="flex-2 text-zinc-300 text-base">budget tracker</p><small className="text-zinc-400 text-xs flex flex-col items-start flex-5">reactjs + context API<span className="text-zinc-300 tracking-tight md:tracking-tight md:text-sm">this app helps you track your expenses</span></small></div> <p className="text-zinc-200">2022</p></div>
    </Link>
    <Link href="#" className=" hover:border hover:bg-zinc-800 p-2 rounded">
        <div className="flex justify-center gap-4 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="text-zinc-300 text-base flex-2">todo</p><small className="text-zinc-400 text-xs flex flex-col items-start flex-5">reactjs <span className="text-zinc-300 tracking-tight md:tracking-tight md:text-sm">a web app that helps you iterate what you want to do in your daily activities</span></small></div> <p className="text-zinc-200">2022</p></div>
    </Link>
    </div>
 </main>
  </>
 )
}