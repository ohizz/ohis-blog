import {Home} from './../../components/Home'
import {Footer } from "./../../components/Footer"
import { motion } from "framer-motion"

const Index = () => { 
    return (
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .9,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
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