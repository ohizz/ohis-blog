import {Home} from './../../components/Home'
import {Footer } from "./../../components/Footer"
import { motion } from "framer-motion"

const Index = () => { 

  const variants = {
    hidden: { opacity:0,},
    show: {
      y:30,
      opacity:1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: 1
      }
    }
  }
    return (
      <div className='bg-zinc-900 text-slate-200'>
        <div className='max-w-2xl mx-2 py-10 md:mx-auto min-h-screen'>
        <div
    >
      <Home/>
      <Footer/>
    </div>
        </div>
      </div>
      
    )
    }

export default Index