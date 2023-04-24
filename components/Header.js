import Link from 'next/link'
export const Header = () => {
 return(
    <div className='sticky top-0 z-30 w-full md:relative backdrop-blur-sm bg-white/30 border-b border-slate-200 py-3 mb-4 px-6 mx-auto font-body'>
        <div className='md:max-w-4xl mx-auto flex justify-between items-center'>
        <Link href="#" className="hover:underline"><h1 className='text-2xl md:text-4xl font-bold text-black-500'>OHIS</h1></Link>
        <div className='text-sm lg:text-lg text-slate-700 flex gap-3 md:gap-10'>
        <Link href="/Blog" className='hidden md:block hover:underline '><svg className='w-6 inline'fill="none" viewBox="0 0 24 24" astro-icon="notebook"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.25 18.25h-8.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2ZM14.25 8.75h-.5M14.25 11.75h-.5M9.75 4.75v14.5"></path></svg>Blog</Link>
        <Link href="#" className='hidden md:block hover:underline'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="multiple-folders"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 10.75v6.5a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-9.5Zm0 0v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958m-4.891-3v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958h1.609a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-1"></path></svg>Project</Link>
        <Link href="#" className='hover:border text-blue-500 border-slate-200 hover:m-0 rounded'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="twitter"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 18.25c5.472 0 8.464-4.81 8.464-8.98 0-.233.166-.44.378-.536.728-.33 1.673-1.235.697-2.756-.646.348-1.177.538-1.889.766-1.126-1.27-3.01-1.331-4.209-.136-.772.77-1.1 1.919-.86 3.015-2.392-.127-5.193-1.887-6.704-3.86-.789 1.443-.386 3.288.921 4.215a2.828 2.828 0 0 1-1.35-.395v.04c0 1.503.999 2.796 2.386 3.094a2.8 2.8 0 0 1-1.343.054c.39 1.285 2.079 2.728 3.352 2.753a5.758 5.758 0 0 1-3.695 1.354c-.237 0-.473-.015-.708-.045a8.073 8.073 0 0 0 4.56 1.415v.002Z"></path></svg></Link>
        <button className=' hover:border border-slate-400 rounded p-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
        </button>
        <button className='hover:border border-slate-400 rounded p-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>
        </button>
        </div>
    </div>
    </div>
 )
}