import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
// import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Experience from './components/Experience/Experience'

const App = () => {
    return (
        <>
            <Header />
            <NavBar />
            <About />
            <Experience />
            {/* <Portfolio /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default App