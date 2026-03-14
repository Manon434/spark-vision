// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Solutions from "./components/Solutions"
// import CaseStudies from "./components/CaseStudies"
// import Innovation from "./components/Innovation"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <Solutions/>
//       <CaseStudies/>
//       <Innovation/>
//       <Contact/>
//       <Footer/>
//     </>
//   )

// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Solutions from "./components/Solutions"
import CaseStudies from "./components/CaseStudies"
import Innovation from "./components/Innovation"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import SAPCaseStudy from "./pages/SAPCaseStudy"

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

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/case-study/sap-migration" element={<SAPCaseStudy/>}/>

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App