import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/home.jsx'
import Error from './pages/Error404/error404.jsx'
import Fiche from './pages/FicheLogement/ficheLogement.jsx'
import Apropos from './pages/Apropos/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche/:cardNumber" element={<Fiche />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </Router>
  </StrictMode>,
)
