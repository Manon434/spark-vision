

import PageHero from "../components/PageHero"
import ServiceCard from "../components/ServiceCard"
import { HashLink } from "react-router-hash-link"
import { FiCloud, FiServer, FiLock } from "react-icons/fi"

function Cloud(){

return(

<>

<PageHero
title="Cloud Computing Solutions"
subtitle="Build scalable and secure cloud infrastructure that powers innovation and modern enterprise operations."
image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
/>


{/* KPI STATS */}

<section className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">40%</p>
<p className="text-gray-800 mt-3 text-lg">Infrastructure Cost Reduction</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">3x</p>
<p className="text-gray-800 mt-3 text-lg">Deployment Speed</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">99.9%</p>
<p className="text-gray-800 mt-3 text-lg">Cloud Reliability</p>

</div>

</div>

</div>

</section>



{/* SERVICES */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
Cloud Capabilities
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<ServiceCard
title="Cloud Migration"
desc="Seamless migration of enterprise applications from legacy infrastructure to secure cloud environments."
image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200"
/>

<ServiceCard
title="SAP Cloud Integration"
desc="Seamless integration of SAP systems with modern cloud platforms to enable real-time data access, improved operational efficiency, and scalable enterprise architecture."
image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
/>

<ServiceCard
title="AI Integration"
desc="Embed artificial intelligence into enterprise workflows to automate processes, enhance predictive analytics, and unlock new business insights across cloud platforms."
image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
/>

</div>

</div>

</section>



{/* TECHNOLOGY STACK */}


<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-gray-900 mb-20">
Cloud Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

{/* AWS */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">AWS</h3>
<p className="text-gray-600 text-sm">
Enterprise-grade cloud infrastructure and scalable services.
</p>
</div>

{/* Azure */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Microsoft Azure</h3>
<p className="text-gray-600 text-sm">
Hybrid cloud environments and enterprise cloud transformation.
</p>
</div>

{/* Kubernetes */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/kubernets.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Kubernetes</h3>
<p className="text-gray-600 text-sm">
Container orchestration for scalable cloud-native applications.
</p>
</div>

{/* Docker */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/docker.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Docker</h3>
<p className="text-gray-600 text-sm">
Containerized deployments for modern microservices architecture.
</p>
</div>

{/* Terraform */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Terraform</h3>
<p className="text-gray-600 text-sm">
Infrastructure-as-code automation for scalable deployments.
</p>
</div>

</div>

</div>

</section>

</>

)

}

export default Cloud