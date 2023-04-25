import Link from "next/link"

export const Footer = () => {
    let year = new Date().getFullYear();

 return(
  <footer className="mt-10 text-slate-500 border-t border-slate-200 py-3 mt-4 max-w-4xl mx-auto font-body">
    <div className=" mx-6 flex flex-col md:flex-row md:justify-between">
    <ul className="mb-4 flex flex-col gap-2 md:flex-row">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/post" className="md:mx-4 hover:underline">Blog</Link>
    <Link href="#" className="md:mr-4 hover:underline">Projects</Link>
    <Link href="#" className= "hover:underline">CV</Link>
   </ul>
   <ul className="flex flex-col md:flex-row gap-2">
   {/* <Link href="#" className="hover:underline">Twitter</Link> */}
    <Link href="#" className="md:mx-4">Github</Link>
    <Link href="#" className="hover:underline">Instagram</Link>
   </ul>
    </div>
   <p className="text-sm mx-6 text-left mr-5 mt-5">© {year} Ohis Samuel</p>
  </footer>
 )
}