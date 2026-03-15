

import PageHero from "../components/PageHero"
import { HashLink } from "react-router-hash-link"

function SAPCaseStudy(){

return(

<>

<PageHero
title="SAP S/4HANA Transformation"
subtitle="Helping a leading manufacturing enterprise modernize operations and unlock real-time business intelligence."
image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000"
/>


{/* CLIENT OVERVIEW */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
Client Overview
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white rounded-xl shadow-lg p-10 text-center">

<img
src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-6"
/>

<p className="text-gray-700 text-lg font-semibold">Industry</p>

<p className="text-2xl font-bold text-blue-600 mt-2">
Paper Manufacturing
</p>

</div>


<div className="bg-white rounded-xl shadow-lg p-10 text-center">

<img
src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-6"
/>

<p className="text-gray-700 text-lg font-semibold">Project Duration</p>

<p className="text-2xl font-bold text-blue-600 mt-2">
18 Months
</p>

</div>


<div className="bg-white rounded-xl shadow-lg p-10 text-center">

<img
src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-6"
/>

<p className="text-gray-700 text-lg font-semibold">Locations Covered</p>

<p className="text-2xl font-bold text-blue-600 mt-2">
5 Mills • 2 Plants • 8 DCs
</p>

</div>

</div>

</div>

</section>



{/* PROJECT SCOPE */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<img
// src="https://images.unsplash.com/photo-1565514020179-026b92b2d3c8?q=80&w=1400"
// className="rounded-2xl shadow-xl"
src="https://images.unsplash.com/photo-1581091215367-59ab6d4b8b0c?auto=format&fit=crop&w=1400&q=80"
alt="Manufacturing digital transformation"
className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
/>

<div>

<h2 className="text-5xl font-bold mb-8 text-gray-900">
Project Scope
</h2>

<p className="text-xl text-gray-700 leading-relaxed">

The client faced fragmented systems, siloed data,
and inefficient inventory management across mills
and plants.

Spark Vision implemented SAP S/4HANA to create
a modern digital core enabling real-time
decision making, operational visibility,
and optimized supply chains.

</p>

</div>

</div>

</section>



{/* KEY CHALLENGES */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
Key Challenges
</h2>

<div className="grid md:grid-cols-2 gap-12">


{/* CHALLENGE 1 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200"
className="h-48 w-full object-cover"
/>

<div className="p-8">

<h3 className="text-2xl font-bold mb-4">
Lack of Real-Time Production Visibility
</h3>

<p className="text-gray-700 text-lg">
Production managers lacked centralized dashboards to monitor
machine utilization, production throughput, and inventory levels.
This resulted in delayed decision making and inefficient
production planning across multiple mills.
</p>

</div>

</div>


{/* CHALLENGE 2 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200"
className="h-48 w-full object-cover"
/>

<div className="p-8">

<h3 className="text-2xl font-bold mb-4">
Manual Procurement & Scheduling
</h3>

<p className="text-gray-700 text-lg">
Procurement and production scheduling processes were largely
manual and disconnected across departments. This caused
frequent delays in order fulfillment and inefficient use
of raw materials.
</p>

</div>

</div>


{/* CHALLENGE 3 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200"
className="h-48 w-full object-cover"
/>

<div className="p-8">

<h3 className="text-2xl font-bold mb-4">
High Energy Consumption
</h3>

<p className="text-gray-700 text-lg">
Production facilities experienced high energy consumption due
to inefficient machine scheduling and lack of predictive
maintenance systems to monitor machine health.
</p>

</div>

</div>


{/* CHALLENGE 4 */}

<div className="bg-white rounded-xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200"
className="h-48 w-full object-cover"
/>

<div className="p-8">

<h3 className="text-2xl font-bold mb-4">
Fragmented Financial Reporting
</h3>

<p className="text-gray-700 text-lg">
Financial data across mills and plants was stored in
separate systems, making it difficult for leadership
to gain real-time cost visibility and profitability insights.
</p>

</div>

</div>


</div>

</div>

</section>


{/* SOLUTION IMPLEMENTED */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
Solution Architecture
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">SAP S/4HANA</h3>

<p className="text-gray-700">
Enterprise digital core enabling real-time analytics
and integrated operations.
</p>

</div>


<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">Production Planning</h3>

<p className="text-gray-700">
SAP PP optimized machine utilization
and automated production scheduling.
</p>

</div>


<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">Warehouse Management</h3>

<p className="text-gray-700">
SAP EWM improved inventory visibility
across all plants and distribution centers.
</p>

</div>


<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">Materials Management</h3>

<p className="text-gray-700">
SAP MM automated procurement workflows
and raw material tracking.
</p>

</div>


<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">Financial Control</h3>

<p className="text-gray-700">
SAP FICO enabled mill-wise profitability
and cost transparency.
</p>

</div>


<div className="bg-gray-50 p-10 rounded-xl shadow">

<h3 className="text-xl font-bold mb-3">IoT Monitoring</h3>

<p className="text-gray-700">
IoT sensors monitored machine health
to prevent production downtime.
</p>

</div>

</div>

</div>

</section>

{/* SOLUTION ARCHITECTURE FLOW */}

<section className="py-28 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold mb-20 text-gray-900">
Digital Transformation Architecture
</h2>

<div className="grid md:grid-cols-5 gap-6 items-center">

<div className="bg-blue-50 p-8 rounded-xl shadow">

<h3 className="font-bold text-lg mb-2">Production</h3>

<p className="text-gray-700">
IoT Sensors
</p>

</div>

<div className="text-3xl font-bold text-blue-500">→</div>

<div className="bg-blue-50 p-8 rounded-xl shadow">

<h3 className="font-bold text-lg mb-2">ERP Core</h3>

<p className="text-gray-700">
SAP S/4HANA
</p>

</div>

<div className="text-3xl font-bold text-blue-500">→</div>

<div className="bg-blue-50 p-8 rounded-xl shadow">

<h3 className="font-bold text-lg mb-2">Analytics</h3>

<p className="text-gray-700">
SAP Fiori Dashboards
</p>

</div>

</div>

<p className="mt-12 text-lg text-gray-700 max-w-3xl mx-auto">

The architecture integrated shop floor data, enterprise systems,
and analytics dashboards to provide leadership with real-time
operational insights across plants and distribution centers.

</p>

</div>

</section>



{/* RESULTS */}

<section className="py-28 bg-blue-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
Transformation Impact
</h2>

<div className="grid md:grid-cols-3 gap-10 text-center">

<div className="bg-white p-12 rounded-xl shadow-lg">

<p className="text-5xl font-bold text-blue-600">25%</p>

<p className="mt-4 text-gray-700 text-lg">
Raw Material Waste Reduction
</p>

</div>


<div className="bg-white p-12 rounded-xl shadow-lg">

<p className="text-5xl font-bold text-blue-600">20%</p>

<p className="mt-4 text-gray-700 text-lg">
Production Efficiency Increase
</p>

</div>


<div className="bg-white p-12 rounded-xl shadow-lg">

<p className="text-5xl font-bold text-blue-600">30%</p>

<p className="mt-4 text-gray-700 text-lg">
Faster Order Fulfillment
</p>

</div>

</div>

</div>

</section>



{/* TECHNOLOGY STACK */}

<section className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold mb-16 text-gray-900">
Technology Stack
</h2>

<div className="flex flex-wrap justify-center gap-6">

{[
"SAP S/4HANA",
"SAP Fiori",
"SAP EWM",
"SAP PP",
"SAP MM",
"SAP FICO",
"IoT Sensors"
].map((tech,i)=>(

<div
key={i}
className="bg-blue-100 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold"
>
{tech}
</div>

))}

</div>


<HashLink
smooth
to="/#contact"
className="inline-block mt-16 bg-blue-600 text-white px-12 py-5 text-lg rounded-lg font-semibold hover:bg-blue-700 transition"
>

Start Your SAP Transformation

</HashLink>

</div>

</section>
{/* TECHNOLOGY STACK */}

{/* <section className="py-28 bg-gray-50">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold mb-20 text-gray-900">
Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{[
"SAP S/4HANA",
"SAP Fiori",
"SAP EWM",
"SAP PP",
"SAP MM",
"SAP FICO",
"IoT Sensors",
"Analytics Dashboards"
].map((tech,i)=>(

<div
key={i}
className="bg-white p-10 rounded-xl shadow hover:shadow-xl transition"
>

<p className="text-xl font-semibold text-gray-800">
{tech}
</p>

</div>

))}

</div>

</div>

</section> */}
</>

)

}

export default SAPCaseStudy