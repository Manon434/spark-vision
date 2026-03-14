
function Navbar(){

return(

<nav className="fixed w-full bg-white/90 backdrop-blur border-b z-50">

<div className="container-main flex items-center justify-between h-20">

<h1 className="text-2xl font-bold tracking-wide text-teal-600">
SPARK VISION
</h1>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">

<a href="#solutions" className="hover:text-teal-600">Solutions</a>
<a href="#case-studies" className="hover:text-teal-600">Case Studies</a>
<a href="#spark" className="hover:text-teal-600">The Spark</a>
<a href="#contact" className="hover:text-teal-600">Contact</a>

</div>

{/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow"> */}
<button className="relative px-8 py-4 rounded-xl font-semibold text-white
    bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
    shadow-[0_8px_30px_rgba(255,120,0,0.4)]
    hover:scale-105 transition"
     >

Get Started

</button>

</div>

</nav>

)

}

export default Navbar