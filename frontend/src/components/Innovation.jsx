

// import { Link } from "react-router-dom"
// import { useEffect, useState } from "react"

// function Counter({target,suffix}){

// const [count,setCount] = useState(0)

// useEffect(()=>{

// let start = 0
// const duration = 1500
// const increment = target / (duration / 20)

// const timer = setInterval(()=>{

// start += increment

// if(start >= target){
// start = target
// clearInterval(timer)
// }

// setCount(Math.floor(start))

// },20)

// return ()=>clearInterval(timer)

// },[target])

// return <span>{count}{suffix}</span>

// }

// function Innovation(){

// return(

// <section
// id="spark"
// className="relative py-28 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
// >

// {/* BACKGROUND GLOW */}

// <div className="absolute w-[500px] h-[500px] bg-teal-200 opacity-20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

// <Link to="/about-spark" className="block">

// <div className="max-w-6xl mx-auto px-6 text-center relative cursor-pointer">

// <p className="text-blue-600 tracking-widest text-sm mb-4">
// THE CORE SPARK
// </p>

// <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">

// Innovation at the

// <span className="text-blue-600"> Intersection </span>

// of Strategy & Tech

// </h2>


// {/* STATS */}

// <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">


// {/* CARD 1 */}

// <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col items-center">

// <img
// src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
// loading="lazy"
// className="w-full h-36 object-cover"
// />

// <div className="py-10 px-6">

// <p className="text-5xl font-bold text-blue-600">
// <Counter target={15} suffix="+"/>
// </p>

// <p className="text-gray-800 mt-3 tracking-wide text-lg">
// Years Experience
// </p>

// </div>

// </div>


// {/* CARD 2 */}

// <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col items-center">

// <img
// src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600"
// loading="lazy"
// className="w-full h-36 object-cover"
// />

// <div className="py-10 px-6">

// <p className="text-5xl font-bold text-blue-600">
// <Counter target={200} suffix="+"/>
// </p>

// <p className="text-gray-800 mt-3 tracking-wide text-lg">
// Projects Delivered
// </p>

// </div>

// </div>


// {/* CARD 3 */}

// <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col items-center">

// <img
// src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600"
// loading="lazy"
// className="w-full h-36 object-cover"
// />

// <div className="py-10 px-6">

// <p className="text-5xl font-bold text-blue-600">
// <Counter target={98} suffix="%"/>
// </p>

// <p className="text-gray-800 mt-3 tracking-wide text-lg">
// Client Retention
// </p>

// </div>

// </div>


// </div>

// </div>

// </Link>

// </section>

// )

// }

// export default Innovation

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Counter({target,suffix}){

const [count,setCount] = useState(0)

useEffect(()=>{

let start = 0
const duration = 1500
const increment = target / (duration / 20)

const timer = setInterval(()=>{

start += increment

if(start >= target){
start = target
clearInterval(timer)
}

setCount(Math.floor(start))

},20)

return ()=>clearInterval(timer)

},[target])

return <span>{count}{suffix}</span>

}

function Innovation(){

return(

<section
id="spark"
className="relative py-32 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
>

{/* BACKGROUND GLOW */}

<div className="absolute w-[550px] h-[550px] bg-teal-200 opacity-20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

<Link to="/about-spark" className="block">

<div className="max-w-7xl mx-auto px-6 text-center relative cursor-pointer">

<p className="text-blue-600 tracking-widest text-sm mb-4">
THE CORE SPARK
</p>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-20">

Innovation at the

<span className="text-blue-600"> Intersection </span>

of Strategy & Tech

</h2>


{/* STATS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">


{/* CARD 1 */}

<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">

<img
src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
loading="lazy"
className="w-full h-52 object-cover"
/>

<div className="py-12 px-8">

<p className="text-6xl font-bold text-blue-600">
<Counter target={15} suffix="+"/>
</p>

<p className="text-gray-800 mt-4 tracking-wide text-xl">
Years Experience
</p>

</div>

</div>


{/* CARD 2 */}

<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600"
loading="lazy"
className="w-full h-52 object-cover"
/>

<div className="py-12 px-8">

<p className="text-6xl font-bold text-blue-600">
<Counter target={200} suffix="+"/>
</p>

<p className="text-gray-800 mt-4 tracking-wide text-xl">
Projects Delivered
</p>

</div>

</div>


{/* CARD 3 */}

<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">

<img
src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600"
loading="lazy"
className="w-full h-52 object-cover"
/>

<div className="py-12 px-8">

<p className="text-6xl font-bold text-blue-600">
<Counter target={98} suffix="%"/>
</p>

<p className="text-gray-800 mt-4 tracking-wide text-xl">
Client Retention
</p>

</div>

</div>


</div>

</div>

</Link>

</section>

)

}

export default Innovation