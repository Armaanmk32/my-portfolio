import { createRoot } from 'react-dom/client'
import App from './Pages/App'
import { BrowserRouter } from 'react-router-dom'
import './Style.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>

    <App/>
 </BrowserRouter>

)
