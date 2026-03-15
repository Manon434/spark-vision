

import PageHero from "../components/PageHero"
import { HashLink } from "react-router-hash-link"

function AboutSpark(){

return(

<>

<PageHero
title="About Spark Vision Consulting"
subtitle="Driving innovation at the intersection of technology and business strategy."
image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000"
/>


{/* OUR EXPERTISE */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16">
Our Expertise
</h2>

<p className="text-center text-lg text-gray-800 max-w-3xl mx-auto mb-14">
Our consultants bring deep expertise in enterprise technology,
SAP transformation, cloud computing, data analytics, and digital platforms.
We partner with organizations to modernize operations,
unlock insights from data, and accelerate innovation.
</p>


<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white rounded-2xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
className="w-full h-52 object-cover"
/>

<div className="p-8">

<h3 className="text-xl font-bold mb-3">
SAP & Enterprise Systems
</h3>

<p className="text-gray-800">
Extensive experience implementing SAP S/4HANA,
optimizing ERP systems, and modernizing enterprise architecture.
</p>

</div>

</div>


<div className="bg-white rounded-2xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200"
className="w-full h-52 object-cover"
/>

<div className="p-8">

<h3 className="text-xl font-bold mb-3">
Cloud Architecture
</h3>

<p className="text-gray-800">
Designing scalable cloud infrastructure using AWS,
Azure, and modern DevOps frameworks.
</p>

</div>

</div>


<div className="bg-white rounded-2xl shadow-lg overflow-hidden">

<img
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
className="w-full h-52 object-cover"
/>

<div className="p-8">

<h3 className="text-xl font-bold mb-3">
Data & Analytics
</h3>

<p className="text-gray-800">
Advanced analytics platforms enabling businesses
to transform raw data into strategic insights.
</p>

</div>

</div>

</div>

</div>

</section>



{/* OUR APPROACH */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-extrabold text-center mb-20">
Our Approach
</h2>

<div className="grid md:grid-cols-3 gap-12">

{/* CARD 1 */}

<div className="bg-gray-50 rounded-2xl p-12 shadow hover:shadow-xl transition text-center">

<img
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-8"
/>

<h3 className="text-2xl font-bold mb-4">
Understand
</h3>

<p className="text-gray-800 text-lg">
We begin by understanding our client’s business model,
operational challenges, and strategic goals to design
technology solutions that deliver real impact.
</p>

</div>


{/* CARD 2 */}

<div className="bg-gray-50 rounded-2xl p-12 shadow hover:shadow-xl transition text-center">

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-8"
/>

<h3 className="text-2xl font-bold mb-4">
Design
</h3>

<p className="text-gray-800 text-lg">
Our consultants design customized technology strategies
including enterprise architecture, cloud infrastructure,
and data platforms.
</p>

</div>


{/* CARD 3 */}

<div className="bg-gray-50 rounded-2xl p-12 shadow hover:shadow-xl transition text-center">

<img
src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
className="h-36 w-full object-cover rounded-lg mb-8"
/>

<h3 className="text-2xl font-bold mb-4">
Deliver
</h3>

<p className="text-gray-800 text-lg">
We implement solutions efficiently while ensuring
scalability, security, and measurable business outcomes.
</p>

</div>

</div>

</div>

</section>


{/* MISSION */}

<section className="py-24 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-14 items-center">

<img
src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200"
className="rounded-2xl shadow-lg"
/>

<div>

<h2 className="text-4xl font-extrabold mb-6">
Our Mission
</h2>

<p className="text-gray-800 text-lg leading-relaxed">
Our mission is to empower businesses to reach their full potential
through technology. We help organizations modernize systems,
optimize operations, and unlock new opportunities through digital transformation.
</p>

</div>

</div>

</div>

</section>



{/* TEAM */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16">
Our Team
</h2>

<div className="grid md:grid-cols-3 gap-10">


<div className="bg-gray-50 rounded-2xl shadow overflow-hidden">

<img
src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200"
className="w-full h-60 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold">
Enterprise Consultants
</h3>

<p className="text-gray-800 mt-2">
Specialists in SAP systems, enterprise architecture,
and large-scale digital transformation.
</p>

</div>

</div>


<div className="bg-gray-50 rounded-2xl shadow overflow-hidden">

<img
src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200"
className="w-full h-60 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold">
Cloud Architects
</h3>

<p className="text-gray-800 mt-2">
Experts designing scalable cloud infrastructure
and modern DevOps ecosystems.
</p>

</div>

</div>


<div className="bg-gray-50 rounded-2xl shadow overflow-hidden">

<img
src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200"
className="w-full h-60 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold">
Data Scientists
</h3>

<p className="text-gray-800 mt-2">
Analysts and engineers transforming enterprise
data into actionable business intelligence.
</p>

</div>

</div>

</div>



<HashLink
smooth
to="/#contact"
className="block text-center mt-16 relative bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold overflow-hidden group w-fit mx-auto"
>

<span className="relative z-10">
Start Your Transformation
</span>

<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition"></span>

</HashLink>

</div>

</section>

</>

)

}

export default AboutSpark