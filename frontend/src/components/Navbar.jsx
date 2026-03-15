
// import { useState } from "react"
// import { FiMenu, FiX } from "react-icons/fi"
// import { HashLink } from "react-router-hash-link"
// import { Link } from "react-router-dom"

// function Navbar(){

// const [open,setOpen] = useState(false)

// return(

// <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50">

// <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


// {/* LOGO */}

// <HashLink smooth to="/">

// <div className="flex items-center gap-3 group cursor-pointer">

// <img
// // src="https://i.imgur.com/q1S4sL9.jpeg"
// src="https://i.imgur.com/TzxcXae.png"
// alt="Spark Vision"
// className="h-14 md:h-16 w-auto object-contain brightness-110 contrast-110 drop-shadow-sm transition duration-300 group-hover:scale-105"
// />

// {/* <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">

// Spark Vision

// </span> */}

// </div>

// </HashLink>


// {/* DESKTOP MENU */}

// <div className="hidden md:flex gap-8 text-gray-700 font-medium">

// <Link
// to="/solutions/cloud"
// className="hover:text-blue-600 transition"
// >
// Solutions
// </Link>

// <Link
// to="/case-study/sap-migration"
// className="hover:text-blue-600 transition"
// >
// Case Studies
// </Link>

// <Link
// to="/about-spark"
// className="hover:text-blue-600 transition"
// >
// The Spark
// </Link>

// <HashLink
// smooth
// to="/#contact"
// className="hover:text-blue-600 transition"
// >
// Contact
// </HashLink>

// </div>


// {/* CTA BUTTON */}

// <div className="hidden md:block">

// <HashLink
// smooth
// to="/#contact"
// className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 hover:shadow-lg hover:scale-105"
// >

// Get Started

// </HashLink>

// </div>


// {/* MOBILE MENU BUTTON */}

// <button
// className="md:hidden text-2xl text-gray-700"
// onClick={()=>setOpen(!open)}
// >

// {open ? <FiX/> : <FiMenu/>}

// </button>

// </div>


// {/* MOBILE MENU */}

// {open && (

// <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700">

// <Link
// to="/solutions/cloud"
// onClick={()=>setOpen(false)}
// className="hover:text-blue-600"
// >
// Solutions
// </Link>

// <Link
// to="/case-study/sap-migration"
// onClick={()=>setOpen(false)}
// className="hover:text-blue-600"
// >
// Case Studies
// </Link>

// <Link
// to="/about-spark"
// onClick={()=>setOpen(false)}
// className="hover:text-blue-600"
// >
// The Spark
// </Link>

// <HashLink
// smooth
// to="/#contact"
// onClick={()=>setOpen(false)}
// className="hover:text-blue-600"
// >
// Contact
// </HashLink>

// <HashLink
// smooth
// to="/#contact"
// onClick={()=>setOpen(false)}
// className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold w-fit"
// >

// Get Started

// </HashLink>

// </div>

// )}

// </nav>

// )

// }

// export default Navbar


// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white/80 backdrop-blur-xl fixed top-0 left-0 z-50 border-b border-slate-100/50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
//         {/* ENHANCED LOGO SECTION */}
//         <HashLink smooth to="/">
//           <div className="flex items-center gap-3 group cursor-pointer">
//             {/* The 'Glass-glow' container below fixes the "copy-pasted" look. 
//                It uses a radial gradient and blur to blend the logo naturally.
//             */}
//             <div className="relative flex items-center justify-center p-1">
//                {/* Soft Glow Backdrop */}
//               <div className="absolute inset-0 bg-blue-400/10 blur-xl rounded-full group-hover:bg-blue-400/20 transition-all duration-500"></div>
              
//               <img
//                 src="https://i.imgur.com/q1S4sL9.jpeg"
//                 alt="Spark Vision"
//                 className="relative h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
//                 style={{ 
//                   /* This filter helps punch out the blacks and clean the whites */
//                   filter: "contrast(1.05) brightness(1.02)",
//                   mixBlendMode: "multiply" 
//                 }}
//               />
//             </div>

//             {/* Typography to support the logo */}
//           </div>
//         </HashLink>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex gap-10 text-slate-600 font-bold text-sm tracking-tight">
//           <Link to="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
//           <Link to="/cases" className="hover:text-blue-600 transition-colors">Case Studies</Link>
//           <Link to="/about" className="hover:text-blue-600 transition-colors">The Spark</Link>
//           <HashLink smooth to="/#contact" className="hover:text-blue-600 transition-colors">Contact</HashLink>
//         </div>

//         {/* PREMIUM CTA */}
//         <div className="hidden md:block">
//           <HashLink
//             smooth
//             to="/#contact"
//             className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-slate-200 hover:shadow-blue-200 transition-all duration-300"
//           >
//             Get Started
//           </HashLink>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button className="md:hidden text-2xl text-slate-900" onClick={() => setOpen(!open)}>
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl">
//           <Link to="/solutions" className="text-xl font-bold" onClick={() => setOpen(false)}>Solutions</Link>
//           <Link to="/cases" className="text-xl font-bold" onClick={() => setOpen(false)}>Case Studies</Link>
//           <Link to="/about" className="text-xl font-bold" onClick={() => setOpen(false)}>The Spark</Link>
//           <HashLink smooth to="/#contact" className="bg-blue-600 text-white py-4 rounded-xl text-center font-bold" onClick={() => setOpen(false)}>
//             Get Started
//           </HashLink>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-xl fixed top-0 left-0 z-50 border-b border-slate-100">
      {/* GLITTER STYLES */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .btn-glitter {
            background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa, #2563eb);
            background-size: 200% 100%;
            animation: shimmer 3s infinite linear;
            position: relative;
            overflow: hidden;
          }
          .btn-glitter::after {
            content: '';
            position: absolute;
            top: -50%; left: -50%;
            width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 10%);
            background-size: 20px 20px;
            opacity: 0.5;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* BIGGER LOGO SECTION */}
        <HashLink smooth to="/">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              {/* Soft glow behind the logo */}
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
              <img
                src="https://i.imgur.com/q1S4sL9.jpeg"
                alt="Spark Vision"
                /* Increased height significantly and added drop-shadow */
                className="relative h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(37,99,235,0.1)]"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

          </div>
        </HashLink>

        {/* BIGGER DESKTOP MENU */}
        <div className="hidden lg:flex gap-12 text-slate-700 font-bold text-lg">
          <Link to="/solutions" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Solutions</Link>
          <Link to="/cases" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Case Studies</Link>
          <Link to="/about" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">The Spark</Link>
          <HashLink smooth to="/#contact" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Contact</HashLink>
        </div>

        {/* GLITTERY CTA BUTTON */}
        <div className="hidden md:block">
          <HashLink
            smooth
            to="/#contact"
            className="btn-glitter text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl shadow-blue-200 hover:shadow-blue-400 transition-all duration-300 hover:scale-105 block"
          >
            Get Started
          </HashLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden text-3xl text-slate-900" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-10 flex flex-col gap-8 shadow-2xl">
          <Link to="/solutions" className="text-2xl font-black" onClick={() => setOpen(false)}>Solutions</Link>
          <Link to="/cases" className="text-2xl font-black" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link to="/about" className="text-2xl font-black" onClick={() => setOpen(false)}>The Spark</Link>
          <HashLink 
            smooth 
            to="/#contact" 
            className="btn-glitter text-white py-5 rounded-2xl text-center text-xl font-black shadow-lg" 
            onClick={() => setOpen(false)}
          >
            Get Started
          </HashLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;