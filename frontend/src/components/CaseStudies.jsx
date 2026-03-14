

// import { motion } from "framer-motion"

// function CaseStudies(){

// return(

// <section
// id="case-studies"
// className="py-28 bg-white"
// >

// <div className="max-w-7xl mx-auto px-6">

// <p className="text-blue-600 text-sm tracking-widest mb-4">
// PROVEN RESULTS
// </p>

// <h2 className="text-5xl font-bold text-gray-900 mb-16">
// Client Success Stories
// </h2>

// <div className="grid md:grid-cols-3 gap-10">

// {/* CARD 1 */}

// <motion.div
// whileHover={{y:-6}}
// className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
// >

// <div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

// <img
// src="/icons/cloud.svg"
// className="h-16"
// />

// </div>

// <p className="text-sm text-gray-400 mb-2">
// Fortune 500 Manufacturing
// </p>

// <h3 className="text-xl font-semibold text-gray-900 mb-4">
// Digital Transformation Success
// </h3>

// <div className="flex items-end gap-3 mb-6">

// <span className="text-4xl font-bold text-blue-600">
// 40%
// </span>

// <span className="text-gray-500">
// Efficiency Gain
// </span>

// </div>

// <div className="flex gap-3 flex-wrap">

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// IoT
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// Cloud
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// Automation
// </span>

// </div>

// </motion.div>


// {/* CARD 2 */}

// <motion.div
// whileHover={{y:-6}}
// className="bg-white border border-teal-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
// >

// <div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

// <img
// src="/icons/sap.svg"
// className="h-16"
// />

// </div>

// <p className="text-sm text-gray-400 mb-2">
// Pan-India Retail Chain
// </p>

// <h3 className="text-xl font-semibold text-gray-900 mb-4">
// SAP S/4HANA Migration
// </h3>

// <div className="flex items-end gap-3 mb-6">

// <span className="text-4xl font-bold text-blue-600">
// 60%
// </span>

// <span className="text-gray-500">
// Faster Reporting
// </span>

// </div>

// <div className="flex gap-3 flex-wrap">

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// SAP
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// ERP
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// Finance
// </span>

// </div>

// </motion.div>


// {/* CARD 3 */}

// <motion.div
// whileHover={{y:-6}}
// className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
// >

// <div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

// <img
// src="/icons/analytics.svg"
// className="h-16"
// />

// </div>

// <p className="text-sm text-gray-400 mb-2">
// BFSI Enterprise
// </p>

// <h3 className="text-xl font-semibold text-gray-900 mb-4">
// Cloud-First Data Platform
// </h3>

// <div className="flex items-end gap-3 mb-6">

// <span className="text-4xl font-bold text-blue-600">
// 3x
// </span>

// <span className="text-gray-500">
// Analytics Speed
// </span>

// </div>

// <div className="flex gap-3 flex-wrap">

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// AWS
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// Data Lake
// </span>

// <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
// ML
// </span>

// </div>

// </motion.div>

// </div>

// </div>

// </section>

// )

// }

// export default CaseStudies

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function CaseStudies(){

return(

<section
id="case-studies"
className="py-28 bg-white"
>

<div className="max-w-7xl mx-auto px-6">

<p className="text-blue-600 text-sm tracking-widest mb-4">
PROVEN RESULTS
</p>

<h2 className="text-5xl font-bold text-gray-900 mb-16">
Client Success Stories
</h2>

<div className="grid md:grid-cols-3 gap-10">

{/* CARD 1 */}

<motion.div
whileHover={{y:-6}}
className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
>

<div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

<img
src="/icons/cloud.svg"
className="h-16"
/>

</div>

<p className="text-sm text-gray-400 mb-2">
Fortune 500 Manufacturing
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-4">
Digital Transformation Success
</h3>

<div className="flex items-end gap-3 mb-6">

<span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">
40%
</span>

<span className="text-gray-500">
Efficiency Gain
</span>

</div>

<div className="flex gap-3 flex-wrap">

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
IoT
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
Cloud
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
Automation
</span>

</div>

</motion.div>


{/* CARD 2 (CLICKABLE SAP CASE STUDY) */}

<Link to="/case-study/sap-migration">

<motion.div
whileHover={{y:-6}}
className="cursor-pointer bg-white border border-blue-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
>

<div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

<img
src="/icons/sap.svg"
className="h-16"
/>

</div>

<p className="text-sm text-gray-400 mb-2">
Pan-India Manufacturing Enterprise
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-4">
SAP S/4HANA Transformation
</h3>

<div className="flex items-end gap-3 mb-6">

<span className="text-4xl font-bold text-blue-600">
25%
</span>

<span className="text-gray-500">
Waste Reduction
</span>

</div>

<div className="flex gap-3 flex-wrap">

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
SAP
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
EWM
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
FICO
</span>

</div>

<p className="text-blue-600 text-sm mt-5 font-semibold">
View Full Case Study →
</p>

</motion.div>

</Link>


{/* CARD 3 */}

<motion.div
whileHover={{y:-6}}
className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
>

<div className="h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">

<img
src="/icons/analytics.svg"
className="h-16"
/>

</div>

<p className="text-sm text-gray-400 mb-2">
BFSI Enterprise
</p>

<h3 className="text-xl font-semibold text-gray-900 mb-4">
Cloud-First Data Platform
</h3>

<div className="flex items-end gap-3 mb-6">

<span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">
3x
</span>

<span className="text-gray-500">
Analytics Speed
</span>

</div>

<div className="flex gap-3 flex-wrap">

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
AWS
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
Data Lake
</span>

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
ML
</span>

</div>

</motion.div>

</div>

</div>

</section>

)

}

export default CaseStudies