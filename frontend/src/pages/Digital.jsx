

import PageHero from "../components/PageHero"
import ServiceCard from "../components/ServiceCard"
import { HashLink } from "react-router-hash-link"
import { FiCpu } from "react-icons/fi"

function Digital(){

return(

<>

<PageHero
title="Digital Transformation Consulting"
subtitle="Accelerate innovation and modernize business processes through technology."
image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000"
/>


<section className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-10 text-center">

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">30%</p>
<p className="mt-3 text-lg text-gray-800">Operational Efficiency</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">2x</p>
<p className="mt-3 text-lg text-gray-800">Innovation Speed</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">50%</p>
<p className="mt-3 text-lg text-gray-800">Process Automation</p>
</div>

</div>

</div>

</section>



<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16">
Digital Transformation Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

<ServiceCard
title="Process Automation"
desc="Automate business workflows and reduce operational inefficiencies."
image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200"
/>

<ServiceCard
title="Customer Experience Platforms"
desc="Build digital platforms that improve engagement and customer satisfaction."
image="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200"
/>

<ServiceCard
title="Enterprise Integration"
desc="Integrate enterprise systems for seamless data flow and collaboration."
image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200"
/>

</div>

</div>

</section>


<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-gray-900 mb-20">
Digital Transformation Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

{/* SAP */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/sap-3.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">SAP</h3>
<p className="text-gray-600 text-sm">
Enterprise ERP transformation and business process integration.
</p>
</div>

{/* Salesforce */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Salesforce</h3>
<p className="text-gray-600 text-sm">
Customer relationship platforms and digital engagement systems.
</p>
</div>

{/* Power Platform */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Power Platform</h3>
<p className="text-gray-600 text-sm">
Low-code automation and enterprise application development.
</p>
</div>

{/* API Integration */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">API Integration</h3>
<p className="text-gray-600 text-sm">
Seamless connectivity across enterprise systems.
</p>
</div>

{/* Automation */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/UiPath_logo.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Automation</h3>
<p className="text-gray-600 text-sm">
Business process automation and operational efficiency.
</p>
</div>

</div>

</div>

</section>

</>

)

}

export default Digital