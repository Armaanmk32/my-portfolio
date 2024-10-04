import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Components/Header"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Service from "../Components/Service"
import Projects from "../Components/Projects"
function App(){
    return <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>

    </div>
}
export default App