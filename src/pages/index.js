import {Home} from './../../components/Home'
import {Footer } from "./../../components/Footer"

const Index = () => { 
    return (
      <div className='bg-zinc-900 text-slate-200'>
        <div className='max-w-3xl mx-2 py-10 md:mx-auto min-h-screen'>
        <Home/>
        <Footer/>
        </div>
      </div>
    )
}

export default Index