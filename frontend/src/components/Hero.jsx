

import { HashLink } from "react-router-hash-link"

function Hero(){

return(

<section className="pt-32 pb-24 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

{/* IMAGE */}

{/* <div className="flex justify-center">

<img
src="https://i.imgur.com/GzRS9Xa.jpeg"
alt="Spark Vision"
className="w-80 md:w-[480px] object-contain drop-shadow-xl hover:scale-125 transition"
/>

</div> */}

<div className="flex justify-center items-center relative">

<div className="absolute w-[400px] h-[400px] bg-blue-200 opacity-20 blur-3xl rounded-full animate-pulse"></div>

<img
src="https://i.imgur.com/GzRS9Xa.jpeg"
alt="Spark Vision"
className="relative w-[320px] md:w-[520px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
/>

</div>

{/* TEXT */}

<div className="text-center md:text-left">

<p className="text-blue-600 text-sm tracking-widest mb-4">
DIGITAL TRANSFORMATION PARTNER
</p>

<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">

Transforming Businesses with
<span className="text-blue-600"> Technology & Strategy</span>

</h1>

<p className="text-gray-600 mb-8">

Spark Vision Consulting helps enterprises modernize operations,
optimize supply chains, and unlock data-driven insights through
SAP transformation, analytics, and custom technology solutions.

</p>

<div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">

{/* CONTACT BUTTON */}

<HashLink
smooth
to="/#contact"
className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
>

<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition"></span>

Request Consultation

</HashLink>

{/* SOLUTIONS BUTTON */}

<HashLink
smooth
to="/#solutions"
className="border border-brand-primary text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-brand-light hover:text-white transition"
>

Explore Solutions

</HashLink>

</div>

</div>

</div>

</section>

)

}

export default Hero