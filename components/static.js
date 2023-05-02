import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'
import { Footer } from './Footer';

export const Static = ()=> {
    const address = `http://localhost:3000/api/hearing`;
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR(address, fetcher);
  
    if (error) <p>Loading failed...</p>;
    if (data) <h1>Loading...</h1>;
      let year = new Date().getFullYear();
    return(
         <div className='md:w-2/5 lg:w-2/5'>
        <h1 className="font-bold text-3xl mb-4">Hello there.</h1>
        <p>I’m <span className="font-bold">ohis</span> I am a software engineer. I love building polished web user interfaces with frontend technology.I am interested in user experience, accessibility and design system</p>
        <p className='my-4'>As well as coding and designing, you can find me binging tv shows, eating and occasionally rambling on Twitter.</p>
        <p className="p-3 mb-3 rounded bg-gray-100 text-slate-800 shadow-sm shadow-slate-100 w-fit md:w-auto">I am currently open for opportunities.</p>
        <footer className="hidden md:block py-4 mt-5 text-slate-500 font-body">
        <div className="hidden md:block">
        <ul className="mb-4 flex gap-3 items-center flex-wrap flex-row">
       
    <Link href="/project" className="hover:border border-slate-200 hover:m-0 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="fill-zinc-700 " width="16" height="16"  class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg></Link>
    <Link href="https://github.com/ohizz" target='_blank' className="hover:border border-slate-200 hover:m-0 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></Link>
    <Link href="https://twitter.com/oissamuel" target="_blank" className='hover:border text-blue-500 border-slate-200 hover:m-0 rounded'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="twitter"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 18.25c5.472 0 8.464-4.81 8.464-8.98 0-.233.166-.44.378-.536.728-.33 1.673-1.235.697-2.756-.646.348-1.177.538-1.889.766-1.126-1.27-3.01-1.331-4.209-.136-.772.77-1.1 1.919-.86 3.015-2.392-.127-5.193-1.887-6.704-3.86-.789 1.443-.386 3.288.921 4.215a2.828 2.828 0 0 1-1.35-.395v.04c0 1.503.999 2.796 2.386 3.094a2.8 2.8 0 0 1-1.343.054c.39 1.285 2.079 2.728 3.352 2.753a5.758 5.758 0 0 1-3.695 1.354c-.237 0-.473-.015-.708-.045a8.073 8.073 0 0 0 4.56 1.415v.002Z"></path></svg></Link>
    <p className="text-sm flex items-center gap-1 font-thin">copyright © {year}Ohis Samuel</p>
   </ul>
    </div>
    <div className="hidden md:block">
     <ul className="flex gap-3 items-center flex-wrap text-zinc-500">
        <Link href="/">Home</Link>
        <Link href="/post">Blog</Link>
        <Link href="/project">Project</Link>
     </ul>
    </div>
   
   <div className="hidden md:flex gap-2 items-center border border-slate-200 p-3 rounded mt-3"> 
    <svg className="fill-current text-green-500 w-10 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
</svg> {' '}
{data &&<p className="text-green-500 text-sm">{data.title} {' '} {data.artist}</p>}
   </div>
  </footer>
  <Footer/>
  </div>
    )
}
