import Link from 'next/link'
export const Header = () => {
 return(
    <div className='border-b border-slate-200 py-3 mb-4 px-10 mx-auto'>
        <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <Link href="#" className="hover:underline"><h1 className='text-4xl font-semibold text-slate-900'>OHIS</h1></Link>
        <div className='text-lg text-slate-700 flex'>
        <Link href="#" className='hover:underline'><svg className='w-6 inline'fill="none" viewBox="0 0 24 24" astro-icon="notebook"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.25 18.25h-8.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2ZM14.25 8.75h-.5M14.25 11.75h-.5M9.75 4.75v14.5"></path></svg>Blog</Link>
        <Link href="#" className='mx-4 hover:underline'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="multiple-folders"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 10.75v6.5a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-9.5Zm0 0v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958m-4.891-3v-1a2 2 0 0 1 2-2h3.063a2 2 0 0 1 1.755 1.042l1.073 1.958h1.609a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-1"></path></svg>Project</Link>
        <Link href="#" className='hover:border border-slate-200 hover:m-0 rounded'><svg className='w-6 inline' fill="none" viewBox="0 0 24 24" astro-icon="twitter"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 18.25c5.472 0 8.464-4.81 8.464-8.98 0-.233.166-.44.378-.536.728-.33 1.673-1.235.697-2.756-.646.348-1.177.538-1.889.766-1.126-1.27-3.01-1.331-4.209-.136-.772.77-1.1 1.919-.86 3.015-2.392-.127-5.193-1.887-6.704-3.86-.789 1.443-.386 3.288.921 4.215a2.828 2.828 0 0 1-1.35-.395v.04c0 1.503.999 2.796 2.386 3.094a2.8 2.8 0 0 1-1.343.054c.39 1.285 2.079 2.728 3.352 2.753a5.758 5.758 0 0 1-3.695 1.354c-.237 0-.473-.015-.708-.045a8.073 8.073 0 0 0 4.56 1.415v.002Z"></path></svg></Link>
        </div>
    </div>
    </div>
 )
}