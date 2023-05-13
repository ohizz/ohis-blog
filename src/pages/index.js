import {Home} from './../../components/Home'
import {Footer } from "./../../components/Footer"
import { motion } from "framer-motion"

const Index = () => { 

  const variants = {
    hidden: {y:50,},
    show: {
      y:0,
      
      transition: {
        type: 'spring',
        duration: 1,
        delay: 1
      }
    }
  }
    return (
      <div className='bg-zinc-900 text-slate-200'>
        <div className='max-w-3xl mx-2 py-10 md:mx-auto min-h-screen'>
        <motion.div
      variants={variants}
      initial='hidden'
      animate='show'
    >
      <Home/>
    </motion.div>
        
        <Footer/>
        </div>
      </div>
      
    )
    }

export default Index