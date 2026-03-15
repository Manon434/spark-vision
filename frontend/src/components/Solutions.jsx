
// import { Link } from "react-router-dom"

// function Solutions(){

// const services = [

// {
// title:"Cloud Computing Services",
// desc:"We help enterprises modernize infrastructure using secure and scalable cloud platforms.",
// img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
// link:"/solutions/cloud"
// },

// {
// title:"Data Analytics Consulting",
// desc:"Transform raw data into insights using advanced analytics, BI dashboards, and AI models.",
// img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
// link:"/solutions/analytics"
// },

// {
// title:"Managed IT Services",
// desc:"Comprehensive IT support including infrastructure monitoring, maintenance, and security.",
// img:"https://images.unsplash.com/photo-1581092921461-eab62e97a780",
// link:"/solutions/managed"
// },

// {
// title:"Digital Transformation",
// desc:"Accelerate business innovation with modern technology strategies and digital platforms.",
// img:"https://images.unsplash.com/photo-1518770660439-4636190af475",
// link:"/solutions/digital"
// }

// ]

// return(

// <section id="solutions" className="py-28 bg-gray-50">

// <div className="max-w-7xl mx-auto px-6">

// <p className="text-blue-600 text-sm tracking-widest mb-4">
// OUR SOLUTIONS
// </p>

// <h2 className="text-4xl font-bold text-gray-900 mb-16">
// Technology Services That Drive Growth
// </h2>

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">

// {services.map((s,i)=>(

// <Link key={i} to={s.link}>

// <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2">

// <img
// src={s.img}
// className="w-full h-64 object-cover"
// />

// <div className="p-10">

// <h3 className="text-2xl font-semibold text-gray-900 mb-4">
// {s.title}
// </h3>

// <p className="text-gray-800 text-lg">
// {s.desc}
// </p>

// <p className="text-blue-600 font-semibold mt-6">
// Explore Solution →
// </p>

// </div>

// </div>

// </Link>

// ))}

// </div>

// </div>

// </section>

// )

// }

// export default Solutions

import { Link } from "react-router-dom"

function Solutions(){

const services = [

{
title:"Cloud Computing Services",
desc:"We help enterprises modernize infrastructure using secure and scalable cloud platforms.",
img:"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200",
link:"/solutions/cloud"
},

{
title:"Data Analytics Consulting",
desc:"Transform raw data into insights using advanced analytics, BI dashboards, and AI models.",
img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
link:"/solutions/analytics"
},

{
title:"Managed IT Services",
desc:"Comprehensive IT support including infrastructure monitoring, maintenance, and security.",
img:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
link:"/solutions/managed"
},

{
title:"Digital Transformation",
desc:"Accelerate business innovation with modern technology strategies and digital platforms.",
img:"https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200",
link:"/solutions/digital"
}

]



return(

<section id="solutions" className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<p className="text-blue-600 text-sm tracking-widest mb-4">
OUR SOLUTIONS
</p>

<h2 className="text-4xl font-bold text-gray-900 mb-16">
Technology Services That Drive Growth
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

{services.map((s,i)=>(

<Link key={i} to={s.link}>

<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2 flex flex-col h-full">

{/* IMAGE */}

<div className="w-full h-64 overflow-hidden">

<img
src={s.img}
loading="lazy"
className="w-full h-full object-cover transition duration-500 hover:scale-105"
/>

</div>

{/* CONTENT */}

<div className="p-10 flex flex-col flex-grow">

<h3 className="text-2xl font-semibold text-gray-900 mb-4">
{s.title}
</h3>

<p className="text-gray-800 text-lg leading-relaxed flex-grow">
{s.desc}
</p>

<p className="text-blue-600 font-semibold mt-6">
Explore Solution →
</p>

</div>

</div>

</Link>

))}

</div>

</div>

</section>

)

}

export default Solutions