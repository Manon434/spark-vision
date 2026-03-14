
// import { FaCloud, FaCogs, FaChartLine } from "react-icons/fa"

// function Solutions() {

// return(

// <section id="solutions" className="py-32 bg-white">

// <div className="container-main">

// <p className="text-center text-sm tracking-[4px] text-teal-500 mb-3">
// OUR SOLUTIONS
// </p>

// <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
// Core Competencies
// </h2>


// <div className="grid lg:grid-cols-3 gap-10">


// {/* CARD 1 */}

// <div className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition">

// <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-6">

// <FaCloud size={40} className="text-teal-600"/>

// </div>

// <h3 className="text-xl font-semibold mb-3">
// Cloud Migration
// </h3>

// <p className="text-gray-600 leading-relaxed mb-5">

// Seamless transition of enterprise workloads to scalable, secure cloud infrastructure with zero downtime.

// </p>

// <a href="#case-studies" className="text-teal-600 font-semibold">
// Explore Module →
// </a>

// </div>



// {/* CARD 2 */}

// <div className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition">

// <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-6">

// <FaCogs size={40} className="text-orange-500"/>

// </div>

// <h3 className="text-xl font-semibold mb-3">
// SAP & IT Strategy
// </h3>

// <p className="text-gray-600 leading-relaxed mb-5">

// Comprehensive SAP S/4HANA implementation and digital core transformation for agile enterprise operations.

// </p>

// <a href="#case-studies" className="text-teal-600 font-semibold">
// Explore Module →
// </a>

// </div>



// {/* CARD 3 */}

// <div className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition">

// <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-6">

// <FaChartLine size={40} className="text-teal-600"/>

// </div>

// <h3 className="text-xl font-semibold mb-3">
// Data Analytics
// </h3>

// <p className="text-gray-600 leading-relaxed mb-5">

// Unlock actionable insights through advanced data lakes, machine learning models and predictive analytics.

// </p>

// <a href="#case-studies" className="text-teal-600 font-semibold">
// Explore Module →
// </a>

// </div>


// </div>

// </div>

// </section>

// )

// }

// export default Solutions

import { motion } from "framer-motion"

function Solutions(){

return(

<section id="solutions" className="py-32 bg-white">

<div className="container-main">

<p className="text-center text-sm tracking-[4px] text-teal-500 mb-3">
OUR SOLUTIONS
</p>

<h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
Core Competencies
</h2>


<div className="grid lg:grid-cols-3 gap-10">


{/* CLOUD */}

<motion.div
whileHover={{y:-6}}
className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl transition border border-transparent hover:border-teal-200"
>

{/* <div className="h-32 flex items-center justify-center mb-6"> */}
<div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
    

<img src="/icons/cloud.svg" alt="cloud"  className="h-20"/>

</div>

<h3 className="text-xl font-semibold mb-3">
Cloud Migration
</h3>

<p className="text-gray-600 mb-5">
Seamless transition of enterprise workloads to scalable and secure cloud infrastructure.
</p>

<a href="#case-studies" className="text-teal-600 font-semibold">
Explore Module →
</a>

</motion.div>



{/* SAP */}

<motion.div
whileHover={{y:-6}}
className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl transition border border-transparent hover:border-teal-200"
>

<div className="h-32 flex items-center justify-center mb-6">

<img src="/icons/sap.svg" alt="sap" className="h-20"/>

</div>

<h3 className="text-xl font-semibold mb-3">
SAP & IT Strategy
</h3>

<p className="text-gray-600 mb-5">
SAP S/4HANA implementation and enterprise architecture modernization.
</p>

<a href="/case-study/sap-migration" className="text-teal-600 font-semibold">
Explore Module →
</a>

</motion.div>



{/* ANALYTICS */}

<motion.div
whileHover={{y:-6}}
className="bg-gray-50 rounded-2xl p-10 shadow-md hover:shadow-2xl transition border border-transparent hover:border-teal-200"
>

<div className="h-32 flex items-center justify-center mb-6">

<img src="/icons/analytics.svg" className="h-20"/>

</div>

<h3 className="text-xl font-semibold mb-3">
Data Analytics
</h3>

<p className="text-gray-600 mb-5">
Machine learning, predictive analytics and enterprise data insights.
</p>

<a href="#case-studies" className="text-teal-600 font-semibold">
Explore Module →
</a>

</motion.div>


</div>

</div>

</section>

)

}

export default Solutions