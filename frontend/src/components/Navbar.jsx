

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"

function Navbar(){

const [open,setOpen] = useState(false)

const location = useLocation()

const linkStyle = (hash) =>
`transition hover:text-blue-600 ${
location.hash === hash ? "text-blue-600 font-semibold" : ""
}`

return(

<nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

{/* LOGO */}

{/* <h1 className="text-brand-dark font-bold text-xl">
SPARK VISION
</h1> */}
<HashLink smooth to="/">

<div className="flex items-center gap-3 cursor-pointer">

<img
src="https://i.imgur.com/GzRS9Xa.jpeg"
alt="Spark Vision"
className="h-20 w-auto scale-105"
/>

<span className="font-bold text-xl text-gray-900">
Spark Vision
</span>

</div>

</HashLink>


{/* DESKTOP MENU */}

<div className="hidden md:flex gap-8 text-gray-600 font-medium">

<HashLink
smooth
to="/#solutions"
className={linkStyle("#solutions")}
>
Solutions
</HashLink>

<HashLink
smooth
to="/#case-studies"
className={linkStyle("#case-studies")}
>
Case Studies
</HashLink>

<HashLink
smooth
to="/#spark"
className={linkStyle("#spark")}
>
The Spark
</HashLink>

<HashLink
smooth
to="/#contact"
className={linkStyle("#contact")}
>
Contact
</HashLink>

</div>


{/* CTA BUTTON */}

<div className="hidden md:block">

<HashLink
smooth
to="/#contact"
className="bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-dark transition"
>

Get Started

</HashLink>

</div>


{/* MOBILE MENU BUTTON */}

<button
className="md:hidden text-2xl"
onClick={()=>setOpen(!open)}
>

{open ? <FiX/> : <FiMenu/>}

</button>

</div>


{/* MOBILE MENU */}

{open && (

<div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700">

<HashLink
smooth
to="/#solutions"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
Solutions
</HashLink>

<HashLink
smooth
to="/#case-studies"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
Case Studies
</HashLink>

<HashLink
smooth
to="/#spark"
onClick={()=>setOpen(false)}
className="hover:text-blue-600"
>
The Spark
</HashLink>

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
className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold w-fit"
>

Get Started

</HashLink>

</div>

)}

</nav>

)

}

export default Navbar