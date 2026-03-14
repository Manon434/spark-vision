

// import { Link } from "react-router-dom"

// function SAPCaseStudy(){

// return(

// <section className="pt-32 pb-24 bg-white">

// <div className="max-w-5xl mx-auto px-6">


// {/* BREADCRUMB */}

// <div className="text-sm text-gray-500 mb-8">

// <Link to="/" className="hover:text-blue-600">
// Home
// </Link>

// <span className="mx-2">/</span>

// <span className="text-gray-700">
// Case Study
// </span>

// </div>


// <h1 className="text-4xl font-bold text-blue-700 mb-6">
// SAP S/4HANA Manufacturing Transformation
// </h1>


// <p className="text-gray-600 mb-8">

// One of North India's largest manufacturers operating multiple mills
// and converting plants partnered with Spark Vision Consulting to
// modernize their enterprise systems and improve operational efficiency.

// </p>


// {/* PROJECT OVERVIEW */}

// <div className="bg-blue-50 p-6 rounded-lg mb-10">

// <p className="mb-2">
// 📅 <strong>Project Duration:</strong> 18 months
// </p>

// <p className="mb-2">
// 🏭 <strong>Locations Covered:</strong> 5 mills, 2 converting plants,
// and 8 distribution centers
// </p>

// </div>


// {/* PROJECT SCOPE */}

// <h2 className="text-2xl font-semibold mb-4">
// Project Scope
// </h2>

// <p className="text-gray-600 mb-8">

// The client faced challenges with outdated and siloed operations,
// inefficient inventory management, and limited real-time visibility
// into production data. The objective was to migrate from SAP ECC to
// SAP S/4HANA to build a modern digital core capable of supporting
// future growth and operational optimization.

// </p>


// {/* CHALLENGES */}

// <h2 className="text-2xl font-semibold mb-4">
// Key Challenges
// </h2>

// <ul className="space-y-3 text-gray-600 mb-10">

// <li>• Lack of real-time production and inventory tracking</li>

// <li>• Frequent stockouts and excess raw material waste</li>

// <li>• Manual scheduling and inefficient procurement processes</li>

// <li>• High energy consumption due to inefficient planning</li>

// <li>• Siloed financial reporting across multiple plants</li>

// </ul>


// {/* SOLUTION */}

// <h2 className="text-2xl font-semibold mb-4">
// Solution Implemented
// </h2>

// <ul className="space-y-3 text-gray-600 mb-10">

// <li>🔹 SAP S/4HANA core migration from legacy SAP ECC</li>

// <li>🔹 SAP Production Planning (PP) for optimized scheduling</li>

// <li>🔹 SAP Extended Warehouse Management (EWM)</li>

// <li>🔹 SAP Materials Management (MM) automation</li>

// <li>🔹 SAP Finance & Controlling (FICO) cost visibility</li>

// <li>🔹 SAP Fiori dashboards for real-time operational insights</li>

// </ul>


// {/* RESULTS */}

// <h2 className="text-2xl font-semibold mb-4">
// Key Achievements
// </h2>

// <ul className="space-y-3 text-gray-600 mb-10">

// <li>✔ 25% reduction in raw material waste</li>

// <li>✔ 20% improvement in production efficiency</li>

// <li>✔ 15% reduction in operational costs</li>

// <li>✔ 12% reduction in energy consumption per ton of paper</li>

// <li>✔ 30% faster order fulfillment</li>

// <li>✔ 8% increase in profitability through improved cost visibility</li>

// </ul>


// {/* TECHNOLOGY */}

// <h2 className="text-2xl font-semibold mb-4">
// Technology Stack
// </h2>

// <p className="text-gray-600">

// SAP S/4HANA • SAP Fiori • SAP EWM • SAP PP • SAP MM • SAP FICO •
// IoT sensors for machine health monitoring

// </p>

// </div>

// </section>

// )

// }

// export default SAPCaseStudy

import { Link } from "react-router-dom"

function SAPCaseStudy(){

return(

<section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white">

<div className="max-w-6xl mx-auto px-6">

{/* BREADCRUMB */}

<div className="text-sm text-gray-500 mb-8">

<Link to="/" className="hover:text-blue-600">Home</Link>

<span className="mx-2">/</span>

<span className="text-gray-700">SAP Transformation Case Study</span>

</div>

{/* HERO */}

<h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
SAP S/4HANA Manufacturing Transformation
</h1>

<p className="text-lg text-gray-700 mb-12 max-w-3xl">

A leading North Indian manufacturing enterprise partnered with
Spark Vision Consulting to modernize operations by migrating
from SAP ECC to SAP S/4HANA and implementing advanced supply
chain and financial management capabilities.

</p>

{/* PROJECT OVERVIEW */}

<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-3xl font-bold text-blue-600">18</p>

<p className="text-gray-600">Months Project Duration</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-3xl font-bold text-blue-600">5</p>

<p className="text-gray-600">Manufacturing Mills</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-3xl font-bold text-blue-600">8</p>

<p className="text-gray-600">Distribution Centers</p>

</div>

</div>

{/* CHALLENGES */}

<h2 className="text-2xl font-bold mb-8 text-gray-900">
Key Challenges
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-20">

<div className="bg-white p-6 rounded-xl shadow-sm">
Lack of real-time production and inventory tracking causing
stockouts and excess material waste.
</div>

<div className="bg-white p-6 rounded-xl shadow-sm">
Manual scheduling and procurement delays impacting
order fulfillment timelines.
</div>

<div className="bg-white p-6 rounded-xl shadow-sm">
High energy consumption due to inefficient
production planning.
</div>

<div className="bg-white p-6 rounded-xl shadow-sm">
Siloed financial reporting across mills
making cost analysis difficult.
</div>

</div>

{/* SOLUTION */}

<h2 className="text-2xl font-bold mb-8 text-gray-900">
Solution Implemented
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-20">

<div className="bg-blue-50 p-6 rounded-xl">
SAP S/4HANA core migration enabling real-time
enterprise-wide visibility.
</div>

<div className="bg-blue-50 p-6 rounded-xl">
SAP Production Planning module optimizing
machine utilization and schedules.
</div>

<div className="bg-blue-50 p-6 rounded-xl">
SAP Extended Warehouse Management improving
inventory control across locations.
</div>

<div className="bg-blue-50 p-6 rounded-xl">
SAP Fiori dashboards delivering real-time
analytics for operations and finance.
</div>

</div>

{/* RESULTS */}

<h2 className="text-2xl font-bold mb-8 text-gray-900">
Business Impact
</h2>

<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600">
25%
</p>

<p className="text-gray-600">
Raw Material Waste Reduction
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600">
20%
</p>

<p className="text-gray-600">
Production Efficiency Improvement
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600">
15%
</p>

<p className="text-gray-600">
Operational Cost Reduction
</p>

</div>

</div>

{/* TECHNOLOGY */}

<h2 className="text-2xl font-bold mb-6">
Technology Stack
</h2>

<div className="flex flex-wrap gap-4">

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm">SAP S/4HANA</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm">SAP Fiori</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm">SAP EWM</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm">SAP PP</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm">SAP FICO</span>

</div>

</div>

</section>

)

}

export default SAPCaseStudy