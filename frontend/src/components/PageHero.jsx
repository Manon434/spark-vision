// function PageHero({title,subtitle,image}){

// return(

// <section className="relative pt-36 pb-24 text-white overflow-hidden">

// <img
// src={image}
// className="absolute inset-0 w-full h-full object-cover"
// />

// <div className="absolute inset-0 bg-black/60"></div>

// <div className="relative max-w-7xl mx-auto px-6 text-center">

// <h1 className="text-4xl md:text-6xl font-bold mb-6">
// {title}
// </h1>

// <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
// {subtitle}
// </p>

// </div>

// </section>

// )

// }

// export default PageHero

function PageHero({ title, subtitle, image }) {

return (

<section className="relative pt-40 pb-28 text-white overflow-hidden">

{/* BACKGROUND IMAGE */}

<img
src={image}
alt={title}
className="absolute inset-0 w-full h-full object-cover scale-105"
/>


{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>


{/* CONTENT */}

<div className="relative max-w-7xl mx-auto px-6 text-center">

<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">

{title}

</h1>


<p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed">

{subtitle}

</p>

</div>

</section>

)

}

export default PageHero