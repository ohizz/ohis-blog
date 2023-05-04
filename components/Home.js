
import  {Footer} from "./Footer"
import { Header } from "./Header"
export const Home = () => {
 return(
 <>
  <main className="pt-4 font-body flex flex-col mx-3 md:mx-16 justify-center min-h-screen-[100vh]">
    <Header/>

  <h1 className="text-3xl font-lighter leading-1 mb-4">Connoisseur of everything with an interface.</h1>
  <p className="md:text-md tracking-tight leading-7">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the un.</p>

  <p className="md:text-md tracking-tight leading-7 my-6">through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>

<p className="mb-40 md:mb-80">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

 </main>
 <Footer/>
  </>
 )
}