

// import { Routes, Route, BrowserRouter } from "react-router-dom"

// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Solutions from "./components/Solutions"
// import CaseStudies from "./components/CaseStudies"
// import Innovation from "./components/Innovation"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

// import SAPCaseStudy from "./pages/SAPCaseStudy"

// import Cloud from "./pages/Cloud"
// import Analytics from "./pages/Analytics"
// import ManagedIT from "./pages/ManagedIT"
// import Digital from "./pages/Digital"
// import AboutSpark from "./pages/AboutSpark"
// import ScrollToTop from "./components/ScrollToTop"

// function Home(){
//   return(
//     <>
//       <Hero/>
//       <Solutions/>
//       <CaseStudies/>
//       <Innovation/>
//       <Contact/>
//     </>
//   )
// }

// function App(){

//   return(

//     <>
    
//       <Navbar/>

//       <Routes>

//         <Route path="/" element={<Home/>}/>

//         <Route path="/solutions/cloud" element={<Cloud/>}/>
//         <Route path="/solutions/analytics" element={<Analytics/>}/>
//         <Route path="/solutions/managed" element={<ManagedIT/>}/>
//         <Route path="/solutions/digital" element={<Digital/>}/>

//         <Route path="/case-study/sap-migration" element={<SAPCaseStudy/>}/>
//         <Route path="/about-spark" element={<AboutSpark/>}/>
//       </Routes>

//       <Footer/>
//     </>
   
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Solutions from "./components/Solutions"
import CaseStudies from "./components/CaseStudies"
import Innovation from "./components/Innovation"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import SAPCaseStudy from "./pages/SAPCaseStudy"
import Cloud from "./pages/Cloud"
import Analytics from "./pages/Analytics"
import ManagedIT from "./pages/ManagedIT"
import Digital from "./pages/Digital"
import AboutSpark from "./pages/AboutSpark"

import ScrollToTop from "./components/ScrollToTop"

function Home(){
  return(
    <>
      <Hero/>
      <Solutions/>
      <CaseStudies/>
      <Innovation/>
      <Contact/>
    </>
  )
}

function App(){

  return(

    <>
      <ScrollToTop/>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/solutions/cloud" element={<Cloud/>}/>
        <Route path="/solutions/analytics" element={<Analytics/>}/>
        <Route path="/solutions/managed" element={<ManagedIT/>}/>
        <Route path="/solutions/digital" element={<Digital/>}/>

        <Route path="/case-study/sap-migration" element={<SAPCaseStudy/>}/>
        <Route path="/about-spark" element={<AboutSpark/>}/>

      </Routes>

      <Footer/>
    </>
   
  )
}

export default App