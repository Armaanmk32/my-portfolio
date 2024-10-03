import Header from "../Components/Header"
import Showcase from "../Components/Showcase"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Service from "../Components/Service"
import Footer from "../Components/Footer"

function Home(){
    return <div>
        <Showcase/>
        <About/>
        <Skills/>
        <Projects/>
        <Service/>
        <Footer/>
       

    </div>
}
export default Home