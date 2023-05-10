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
    <ul className="mb-4 flex text-sm flex-col gap-2 tracking-tight">
   <Link href="https://twitter.com/oissamuel" className="hover:underline">twitter</Link>
    <Link href="#" className="">github</Link>
    <Link href="#" className="">email</Link>
   </ul>
    </div>
   <p className="text-xs"> © {year} Ohis Samuel. All right reserved.</p>
  
  </footer>

 )
}