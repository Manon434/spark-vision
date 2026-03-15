

// function PageHero({ title, subtitle, image }) {

// return (

// <section className="relative pt-40 pb-28 text-white overflow-hidden">

// {/* BACKGROUND IMAGE */}

// <img
// src={image}
// alt={title}
// className="absolute inset-0 w-full h-full object-cover scale-105"
// />


// {/* DARK OVERLAY */}

// <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>


// {/* CONTENT */}

// <div className="relative max-w-7xl mx-auto px-6 text-center">

// <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">

// {title}

// </h1>


// <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed">

// {subtitle}

// </p>

// </div>

// </section>

// )

// }

// export default PageHero

function PageHero({ title, subtitle, image }) {

return (

<section className="relative pt-40 pb-28 overflow-hidden text-white">

{/* BACKGROUND IMAGE */}

<img
src={image}
alt={title}
className="absolute inset-0 w-full h-full object-cover scale-105"
/>


{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75"></div>


{/* CONTENT */}

<div className="relative max-w-7xl mx-auto px-6 text-center">

{/* TITLE */}

<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl">

{title}

</h1>


{/* SUBTITLE */}

<p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 font-medium leading-relaxed drop-shadow-lg">

{subtitle}

</p>

</div>

</section>

)

}

export default PageHero