import Header from "../Components/Header"
import Showcase from "../Components/Showcase"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Service from "../Components/Service"
import Footer from "../Components/Footer"
import ScrollReveal from "../Components/ScrollReveal"

function Home(){
    return <div>
        <ScrollReveal>
            <Showcase/>
        </ScrollReveal>
        <ScrollReveal delay={150}>
            <About/>
        </ScrollReveal>
        <ScrollReveal delay={200}>
            <Skills/>
        </ScrollReveal>
        <ScrollReveal delay={250}>
            <Projects/>
        </ScrollReveal>
        <ScrollReveal delay={300}>
            <Service/>
        </ScrollReveal>
        <ScrollReveal delay={350}>
            <Footer/>
        </ScrollReveal>
    </div>
}
export default Home