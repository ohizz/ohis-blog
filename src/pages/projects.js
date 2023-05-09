import { Footer } from "../../components/Footer"
import Link from 'next/link'
const Projects = () => {
 return(
    <div className='bg-gradient-to-t from-slate-100/50 from-50% to-slate-100 to-50%'>
    <main className="pt-4 font-body justify-center items-center flex flex-col mx-4  justify-center min-h-[67vh]">
    <div className="flex flex-col flex-wrap">
    <Link href="#" className="hover:border hover:bg-slate-200 hover:py-1 rounded">
        <div className="flex justify-center gap-4 md:gap-60 items-center">
            <div className="flex justify-start items-start gap-4 items-center"><p className="md:text-3xl tracking-tighter text-black-900">kick</p><small className="text-slate-700 text-xs flex flex-col items-start">react + nodejs <span className="text-slate-500 tracking-tighter md:text-3xl">an ecommerce web app where you can buy sneaker</span></small></div> <p className="text-slate-400">2023</p>
            </div>
    </Link>
    <div className="my-8">
        <div className="flex justify-center md:gap-60 items-center"><div className="flex justify-center gap-4 items-center"><p className="text-slate-700 md:text-3xl tracking-tighter">kick</p><small className="text-slate-700 text-xs flex flex-col items-start">react + nodejs <span className="text-slate-500 tracking-tighter md:text-3xl">an ecommerce web app where you can buy sneaker</span></small></div> <p className="text-slate-400">2023</p></div>
    </div>
    <div>
        <div className="flex justify-center md:gap-60 items-center"><div className="flex justify-center gap-4 items-center"><p className="text-slate-700 md:text-3xl tracking-tighter">kick</p><small className="text-slate-700 text-xs flex flex-col items-start">react + nodejs <span className="text-slate-500 tracking-tighter md:text-3xl">an ecommerce web app where you can buy sneaker</span></small></div> <p className="text-slate-400">2023</p></div>
    </div>
    </div>
    </main>
    <Footer/>
    </div>
 )
}

export default Projects