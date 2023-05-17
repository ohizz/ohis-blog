import Link from "next/link"
import useSWR from 'swr'
import axios from 'axios';
 
export const Footer = () => {
  // const address = `http://localhost:3000/api/hearing`;
  // const fetcher = url => axios.get(url).then(res => res.data)
  // const { data, error } = useSWR(address, fetcher);

  // if (error) <p>Loading failed...</p>;
  // if (data) <h1>Loading...</h1>;
    let year = new Date().getFullYear();

 return(
  <footer className="mb-8 mx-4 md:mx-16 font-head">
    <h2 className="font-head mb-4 tracking-tight text-xl text-zinc-200 border-b border-zinc-500 pb-2">connect</h2>
    <div className="flex">
    <ul className="mb-4 flex flex-col text-xs gap-2 tracking-tight">
   <Link href="https://twitter.com/oissamuel" target="_blank"  className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 w-fit rounded-full">twitter</Link>
    <Link href="https://github.com/ohizz" target="_blank"  className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 w-fit rounded-full">github</Link>
    <Link href="mailto:jtsamuel3084@gmail.com" target="_blank" className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 w-fit rounded-full">email</Link>
   </ul>
    </div>
   <p className="text-ds mb-2"> © {year} Ohis Samuel. All right reserved.</p>
   <p className="text-ds">inspired by Aarav Sareen</p>
  
  </footer>

 )
}