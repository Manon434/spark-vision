

// import { useState } from "react"
// import { FiMenu, FiX } from "react-icons/fi"
// import { HashLink } from "react-router-hash-link"
// import { Link } from "react-router-dom"

// function Navbar(){

// const [open,setOpen] = useState(false)

// return(

// <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">

// <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

// {/* LOGO */}


// <HashLink smooth to="/">

// <div className="flex items-center gap-3 group cursor-pointer">

// <img
// // src="https://i.imgur.com/q1S4sL9.jpeg"
// // alt="Spark Vision"
// // className="h-14 md:h-16 transition-transform duration-300 group-hover:scale-110"
// src="https://i.imgur.com/q1S4sL9.jpeg"
// alt="Spark Vision"
// className="h-16 md:h-18 w-auto scale-[1.7] object-contain logo-crop transition-transform duration-300 group-hover:scale-[1.9]"
// />

// {/* <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-wide">

// Spark Vision

// </span> */}
// <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-wide">

// Spark Vision

// </span>

// </div>

// </HashLink>


// {/* DESKTOP MENU */}

// <div className="hidden md:flex gap-8 text-gray-800 font-medium">

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
// className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
// >

// <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition"></span>

// Get Started

// </HashLink>

// </div>


// {/* MOBILE MENU BUTTON */}

// <button
// className="md:hidden text-2xl"
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
// className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold w-fit"
// >

// Get Started

// </HashLink>

// </div>

// )}

// </nav>

// )

// }

// export default Navbar

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

function Navbar(){

const [open,setOpen] = useState(false)

return(

<nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


{/* LOGO */}

{/* <HashLink smooth to="/">

<div className="flex items-center gap-3 group cursor-pointer">

<img
src="https://i.imgur.com/q1S4sL9.jpeg"
alt="Spark Vision"
className="h-12 md:h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
/>

<span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">

Spark Vision

</span>

</div>

</HashLink> */}
<HashLink smooth to="/">

<div className="flex items-center gap-3 group cursor-pointer">

<img
src="https://i.imgur.com/q1S4sL9.jpeg"
alt="Spark Vision"
className="h-14 md:h-16 w-auto object-contain brightness-110 contrast-110 drop-shadow-sm transition duration-300 group-hover:scale-105"
/>

<span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">

Spark Vision

</span>

</div>

</HashLink>


{/* DESKTOP MENU */}

<div className="hidden md:flex gap-8 text-gray-700 font-medium">

<Link
to="/solutions/cloud"
className="hover:text-blue-600 transition"
>
Solutions
</Link>

<Link
to="/case-study/sap-migration"
className="hover:text-blue-600 transition"
>
Case Studies
</Link>

<Link
to="/about-spark"
className="hover:text-blue-600 transition"
>
The Spark
</Link>

<HashLink
smooth
to="/#contact"
className="hover:text-blue-600 transition"
>
Contact
</HashLink>

</div>


{/* CTA BUTTON */}

<div className="hidden md:block">

<HashLink
smooth
to="/#contact"
className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 hover:shadow-lg hover:scale-105"
>

Get Started

</HashLink>

</div>


{/* MOBILE MENU BUTTON */}

<button
className="md:hidden text-2xl text-gray-700"
onClick={()=>setOpen(!open)}
>

{open ? <FiX/> : <FiMenu/>}

</button>

</div>


{/* MOBILE MENU */}

{open && (

<div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700">

<Link
to="/solutions/cloud"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
Solutions
</Link>

<Link
to="/case-study/sap-migration"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
Case Studies
</Link>

<Link
to="/about-spark"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
The Spark
</Link>

<HashLink
smooth
to="/#contact"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
Contact
</HashLink>

<HashLink
smooth
to="/#contact"
onClick={()=>setOpen(false)}
className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold w-fit"
>

Get Started

</HashLink>

</div>

)}

</nav>

)

}

export default Navbar