

// import ThreeScene from "./ThreeScene"

// function Innovation(){

// return(

// <section
// id="spark"
// className="relative py-32 overflow-hidden"
// style={{
// background:
// "linear-gradient(180deg,#e8f7f7 0%, #d7efef 100%)"
// }}
// >

// <div className="max-w-7xl mx-auto px-6 text-center">

// <p className="text-teal-600 tracking-widest text-sm mb-4">
// THE CORE SPARK
// </p>

// <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-16">

// Innovation at the

// <span className="text-teal-600">
// Intersection
// </span>

// of Strategy & Tech

// </h2>

// {/* 3D MODEL */}

// <div className="flex justify-center mb-20">

// <ThreeScene/>

// </div>

// {/* STATS */}

// <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

// <div className="bg-white rounded-xl shadow-md py-10">

// <p className="text-5xl font-bold text-orange-500">
// 15+
// </p>

// <p className="text-gray-500 mt-2 tracking-widest text-sm">
// YEARS EXPERIENCE
// </p>

// </div>

// <div className="bg-white rounded-xl shadow-md py-10">

// <p className="text-5xl font-bold text-orange-500">
// 200+
// </p>

// <p className="text-gray-500 mt-2 tracking-widest text-sm">
// PROJECTS DELIVERED
// </p>

// </div>

// <div className="bg-white rounded-xl shadow-md py-10">

// <p className="text-5xl font-bold text-orange-500">
// 98%
// </p>

// <p className="text-gray-500 mt-2 tracking-widest text-sm">
// CLIENT RETENTION
// </p>

// </div>

// </div>

// </div>

// </section>

// )

// }

// export default Innovation


function Innovation(){

return(

<section
id="spark"
className="relative py-28 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
>

{/* BACKGROUND GLOW */}

<div className="absolute w-[500px] h-[500px] bg-teal-200 opacity-20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

<div className="max-w-6xl mx-auto px-6 text-center relative">

<p className="text-teal-600 tracking-widest text-sm mb-4">
THE CORE SPARK
</p>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">

Innovation at the

<span className="text-teal-600"> Intersection </span>

of Strategy & Tech

</h2>


{/* STATS */}

<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-xl shadow-md py-10 hover:shadow-xl transition">

<p className="text-4xl font-bold text-orange-500">
15+
</p>

<p className="text-gray-500 mt-2 tracking-wide text-sm">
Years Experience
</p>

</div>

<div className="bg-white rounded-xl shadow-md py-10 hover:shadow-xl transition">

<p className="text-4xl font-bold text-orange-500">
200+
</p>

<p className="text-gray-500 mt-2 tracking-wide text-sm">
Projects Delivered
</p>

</div>

<div className="bg-white rounded-xl shadow-md py-10 hover:shadow-xl transition">

<p className="text-4xl font-bold text-orange-500">
98%
</p>

<p className="text-gray-500 mt-2 tracking-wide text-sm">
Client Retention
</p>

</div>

</div>

</div>

</section>

)

}

export default Innovation