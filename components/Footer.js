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
  <footer className=" mx-4 md:mx-16 font-head">
    <div className="flex justify-start items-center">
    <ul className="mb-4 flex text-xs gap-2 tracking-tight">
   <Link href="https://twitter.com/oissamuel" target="_blank"  className="hover:border-slate-100  border-2 border-zinc-700 py-1 px-2 rounded-full">twitter</Link>
    <Link href="https://github.com/ohizz" target="_blank"  className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full">github</Link>
    <Link href="mailto:jtsamuel3084@gmail.com" target="_blank" className="hover:border-slate-100 border-2 border-zinc-700 py-1 px-2 rounded-full">email</Link>
   </ul>
    </div>
   <p className="text-ds"> © {year} Ohis Samuel. All right reserved.</p>
  
  </footer>

 )
}