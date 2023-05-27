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
  <footer className="mb-8 mx-4 md:mx-16 font-foot">
    <h2 className="font-head mb-4 tracking-tight text-md text-zinc-200 border-b border-zinc-500 pb-2">connect</h2>
    <div className="flex">
    <ul className="mb-4 flex flex-col text-md gap-x-1 tracking-tight">
      <li className="flex items-center gap-x-2">
      <span>twitter :</span><Link href="https://twitter.com/oissamuel" target="_blank"  className="text-zinc-500 py-1"> @oissamuel</Link>
      </li>
      <li className="flex gap-x-2 items-center">
        <span>github :</span>
        <Link href="https://github.com/ohizz" target="_blank"  className="text-zinc-500 py-1">@ohizz</Link>
      </li>
      <li className="flex gap-x-2 items-center">
        <span>email :</span>
        <Link href="mailto:jtsamuel3084@gmail.com" target="_blank" className=" py-1 text-zinc-500">jtsamuel3084@gmail.com</Link>
      </li>
   </ul>
    </div>
   <p className="text-xs mb-2"> © {year} Ohis Samuel. All right reserved.</p>
   {/* <p className="text-sm">inspired by Aarav Sareen</p> */}
  
  </footer>

 )
}