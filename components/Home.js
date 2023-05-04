import Image from "next/image"
import Link from 'next/link'
import { IndexBody } from "./IndexBody"
import { urlForImage } from "../lib/sanity"


export const Home = () => {
 return(
 <>
  <main className="max-w-4xl flex justify-center mx-auto min-h-screen flex-col">
    <IndexBody/>

 </main>
  </>
 )
}