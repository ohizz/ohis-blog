import { Footer } from "../../components/Footer"
import Link from 'next/link'
import { Header } from "../../components/Header"
const Projects = () => {
 return(
    <div className='bg-gradient-to-t from-slate-100/50 from-50% to-slate-100 to-50%'>
     <Header/>
    <main className="pt-4 font-body justify-center items-center flex flex-col mx-4  justify-center min-h-[67vh]">
    <div className="flex flex-col flex-wrap">
    <Link href="#" className="hover:border hover:bg-slate-200 hover:p-2 rounded">
        <div className="flex justify-center gap-4 md:gap-60 items-center">
            <div className="flex justify-start items-start gap-4 items-center basis-full"><p className="md:text-xl tracking-tight md:tracking-tighter text-black-900 flex-2">kick</p><small className="text-slate-700 text-xs flex flex-col items-start flex-5">react + nodejs <span className="text-slate-500 tracking-tight md:tracking-tight md:text-sm">an ecommerce web app where you can buy sneaker</span></small></div> <p className="text-zinc-800">2023</p>
            </div>
    </Link>
    <Link href="#" className="my-8 hover:border hover:bg-slate-200 hover:p-2 rounded">
        <div className="flex justify-center gap-4 md:gap-60 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="flex-2 text-slate-700 md:text-xl tracking-tight md:tracking-tighter ">budget tracker</p><small className="text-slate-700 text-xs flex flex-col items-start flex-5">reactjs + context API<span className="text-slate-500 tracking-tight md:tracking-tight md:text-sm">this app helps you track your expenses</span></small></div> <p className="text-zinc-800">2022</p></div>
    </Link>
    <Link href="#" className=" hover:border hover:bg-slate-200 hover:p-2 rounded">
        <div className="flex justify-center gap-4 md:gap-60 items-center"><div className="flex justify-center gap-4 items-center basis-full"><p className="text-slate-700 md:text-xl tracking-tight md:tracking-tighter flex-2">todo</p><small className="text-slate-700 text-xs flex flex-col items-start flex-5">reactjs <span className="text-slate-500 tracking-tight md:tracking-tight md:text-sm">a web app that helps you iterate what you want to do in your daily activities</span></small></div> <p className="text-zinc-800">2022</p></div>
    </Link>
    </div>
    </main>
    <Footer/>
    </div>
 )
}

export default Projects