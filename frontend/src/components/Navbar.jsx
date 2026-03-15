

// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white/90 backdrop-blur-xl fixed top-0 left-0 z-50 border-b border-slate-100">
//       {/* GLITTER STYLES */}
//       <style>
//         {`
//           @keyframes shimmer {
//             0% { background-position: -200% 0; }
//             100% { background-position: 200% 0; }
//           }
//           .btn-glitter {
//             background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa, #2563eb);
//             background-size: 200% 100%;
//             animation: shimmer 3s infinite linear;
//             position: relative;
//             overflow: hidden;
//           }
//           .btn-glitter::after {
//             content: '';
//             position: absolute;
//             top: -50%; left: -50%;
//             width: 200%; height: 200%;
//             background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 10%);
//             background-size: 20px 20px;
//             opacity: 0.5;
//           }
//         `}
//       </style>

//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* BIGGER LOGO SECTION */}
//         <HashLink smooth to="/">
//           <div className="flex items-center gap-4 group cursor-pointer">
//             <div className="relative">
//               {/* Soft glow behind the logo */}
//               <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
//               <img
//                 src="https://i.imgur.com/q1S4sL9.jpeg"
//                 alt="Spark Vision"
//                 /* Increased height significantly and added drop-shadow */
//                 className="relative h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(37,99,235,0.1)]"
//                 style={{ mixBlendMode: "multiply" }}
//               />
//             </div>

//           </div>
//         </HashLink>

//         {/* BIGGER DESKTOP MENU */}
//         <div className="hidden lg:flex gap-12 text-slate-700 font-bold text-lg">
//           <Link to="/solutions" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Solutions</Link>
//           <Link to="/cases" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Case Studies</Link>
//           <Link to="/about" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">The Spark</Link>
//           <HashLink smooth to="/#contact" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Contact</HashLink>
//         </div>

//         {/* GLITTERY CTA BUTTON */}
//         <div className="hidden md:block">
//           <HashLink
//             smooth
//             to="/#contact"
//             className="btn-glitter text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl shadow-blue-200 hover:shadow-blue-400 transition-all duration-300 hover:scale-105 block"
//           >
//             Get Started
//           </HashLink>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button className="lg:hidden text-3xl text-slate-900" onClick={() => setOpen(!open)}>
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-10 flex flex-col gap-8 shadow-2xl">
//           <Link to="/solutions" className="text-2xl font-black" onClick={() => setOpen(false)}>Solutions</Link>
//           <Link to="/cases" className="text-2xl font-black" onClick={() => setOpen(false)}>Case Studies</Link>
//           <Link to="/about" className="text-2xl font-black" onClick={() => setOpen(false)}>The Spark</Link>
//           <HashLink 
//             smooth 
//             to="/#contact" 
//             className="btn-glitter text-white py-5 rounded-2xl text-center text-xl font-black shadow-lg" 
//             onClick={() => setOpen(false)}
//           >
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
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
              <img
                src="https://i.imgur.com/q1S4sL9.jpeg"
                alt="Spark Vision"
                className="relative h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(37,99,235,0.1)]"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

            
          </div>
        </HashLink>

        {/* RESTORED ORIGINAL ROUTES & BIGGER FONT */}
        <div className="hidden lg:flex gap-12 text-slate-700 font-bold text-lg">
          <Link 
            to="/solutions/cloud" 
            className="hover:text-blue-600 transition-all hover:-translate-y-0.5"
          >
            Solutions
          </Link>
          <Link 
            to="/case-study/sap-migration" 
            className="hover:text-blue-600 transition-all hover:-translate-y-0.5"
          >
            Case Studies
          </Link>
          <Link 
            to="/about-spark" 
            className="hover:text-blue-600 transition-all hover:-translate-y-0.5"
          >
            The Spark
          </Link>
          <HashLink 
            smooth 
            to="/#contact" 
            className="hover:text-blue-600 transition-all hover:-translate-y-0.5"
          >
            Contact
          </HashLink>
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

      {/* MOBILE MENU (WITH RESTORED ROUTES) */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-10 flex flex-col gap-8 shadow-2xl">
          <Link to="/solutions/cloud" className="text-2xl font-black" onClick={() => setOpen(false)}>Solutions</Link>
          <Link to="/case-study/sap-migration" className="text-2xl font-black" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link to="/about-spark" className="text-2xl font-black" onClick={() => setOpen(false)}>The Spark</Link>
          <HashLink smooth to="/#contact" className="text-2xl font-black" onClick={() => setOpen(false)}>Contact</HashLink>
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