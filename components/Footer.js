import Link from "next/link"
import useSWR from 'swr'
import axios from 'axios';
 
export const Footer = () => {
  const address = `http://localhost:3000/api/hearing`;
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (data) <h1>Loading...</h1>;
    let year = new Date().getFullYear();

 return(
  <footer className="font-body flex flex-col md:flex-wrap w-full h-26 
  fixed left-0 bottom-0 z-index-99
  text-slate-900 px-10 pb-6">
    <div className=" flex flex-col gap-6 md:items-center md:flex-row md:justify-between">
    <ul className="mb-4 flex gap-4 tracking-normal">
      <div className="hidden md:grid gap-4">
      <p className="font-bold">ohis samuel</p>
      <p> Lagos, Nigeria</p>
      </div>
      <div className="grid grid-cols-fluid ">
      <Link href="/" className="hover:underline">Home</Link>
    <Link href="/post" className=" hover:underline">Blog</Link>
    <Link href="/project" className=" hover:underline">Projects</Link>
   <Link href="https://twitter.com/oissamuel" className="hover:underline">Twitter</Link>
    <Link href="#" className="">Github</Link>
    <Link href="#" className="hover:underline">Instagram</Link>
      </div>
   </ul>
   <h1 className="hidden md:block text-8xl font-bold tracking-tighter">os</h1>
    </div>
   <p className="text-xs">copyright © {year} Ohis Samuel. All right reserved.</p>
   
   <div className="flex gap-3 items-center border border-slate-200 p-3 rounded mt-3 md:w-1/2"> 
    <svg className="fill-current text-green-500 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
</svg> {' '}
{data &&<p className="text-green-500">{data.title} {' '} {data.artist}</p>}
   </div>
  </footer>

 )
}