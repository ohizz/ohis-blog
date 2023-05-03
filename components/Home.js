import Image from "next/image"
import Link from 'next/link'
import { Footer } from "./Footer"
import { Header } from "./Header"
import { urlForImage } from "../lib/sanity"


export const Home = () => {
 return(
 <>
  <main className="max-w-4xl flex justify-center mx-auto min-h-screen flex-col">
    <Header/>
    <Footer/>
 </main>
  </>
 )
}