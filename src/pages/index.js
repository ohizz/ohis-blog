import {Home} from './../../components/Home'
import {Footer } from "./../../components/Footer"
import { motion } from "framer-motion"

const Index = () => { 
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className='bg-zinc-900 text-slate-200'>
        <div className='max-w-3xl mx-2 py-10 md:mx-auto min-h-screen'>
        <Home/>
        <Footer/>
        </div>
      </div>
      </motion.div>
    )
}

export default Index