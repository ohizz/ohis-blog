import Link from "next/link"

export const Footer = () => {
    let year = new Date().getFullYear();

 return(
  <footer className="mt-10 text-slate-500 border-t border-slate-200 py-3 mt-4 max-w-4xl mx-auto">
    <div className=" mx-6 md:flex md:justify-between">
    <div className="mb-4">
    <Link href="#" className="hover:underline">Home</Link>
    <Link href="#" className="mx-4 hover:underline">Blog</Link>
    <Link href="#" className="mr-4 hover:underline">Projects</Link>
    <Link href="#" className= "hover:underline">CV</Link>
   </div>
   <div>
   <Link href="#" className="hover:underline">Twitter</Link>
    <Link href="#" className="mx-4">Github</Link>
    <Link href="#" className="hover:underline">Instagram</Link>
   </div>
    </div>
   <p className="text-xs uppercase text-right mr-5 mt-5">© {year} Ohis Samuel</p>
  </footer>
 )
}