import Link from 'next/link'
import { useTheme } from 'next-themes'
export const Header = () => {
  const {systemTheme , theme, setTheme} = useTheme ();
  const renderThemeChanger= () => {

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <button onClick={() => setTheme('light')} className='hover:border border-slate-400 rounded p-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
        </button>
      )
    }

    else {
      return (
        <button onClick={() => setTheme('dark')}  className='hover:border border-slate-400 rounded p-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>
        </button>
        
      )
    }
 };
 return(
    <div className='sticky top-0 z-30 w-full md:relative backdrop-blur-sm bg-white-900 border-b border-slate-200 py-3 mb-4 px-6 mx-auto font-body'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
        <Link href="/"><h1 className='text-2xl md:text-4xl font-bold text-black-500'>OHIS</h1></Link>
        <div className='text-sm lg:text-lg flex items-center justify-center gap-3 md:gap-10'>
      <Link href="/" className='hidden md:block hover:underline'><svg xmlns="http://www.w3.org/2000/svg" className='w-6 inline' fill="currentColor" class="bi bi-house-door" viewBox="0 0 20 20">
  <path troke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
</svg>Home</Link>
        <Link href="/post" className='hidden md:block hover:underline '><svg className='w-6 inline'fill="none" viewBox="0 0 24 24" astro-icon="notebook"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.25 18.25h-8.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2ZM14.25 8.75h-.5M14.25 11.75h-.5M9.75 4.75v14.5"></path></svg>Blog</Link>
        <Link href="/project" className='hidden md:block hover:underline'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="multiple-folders"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 10.75v6.5a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-9.5Zm0 0v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958m-4.891-3v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958h1.609a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-1"></path></svg>Project</Link>
        {renderThemeChanger()}
        </div>
    </div>
    
    </div>
 )
}