

import PageHero from "../components/PageHero"
import ServiceCard from "../components/ServiceCard"
import { HashLink } from "react-router-hash-link"
import { FiServer, FiShield, FiMonitor } from "react-icons/fi"

function ManagedIT(){

return(

<>

<PageHero
title="Managed IT Services"
subtitle="Reliable IT infrastructure management that ensures security, uptime, and operational efficiency."
image="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000"
/>


{/* KPI STATS */}

<section className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">
24/7
</p>

<p className="text-gray-800 mt-3 text-lg">
Infrastructure Monitoring
</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">
50%
</p>

<p className="text-gray-800 mt-3 text-lg">
Downtime Reduction
</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-10">

<p className="text-5xl font-bold text-blue-600">
30%
</p>

<p className="text-gray-800 mt-3 text-lg">
Operational Cost Savings
</p>

</div>

</div>

</div>

</section>



{/* CAPABILITIES */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16">
Managed IT Capabilities
</h2>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<ServiceCard
title="Infrastructure Monitoring"
desc="Continuous monitoring of enterprise infrastructure to ensure uptime, reliability, and performance."
image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
/>

<ServiceCard
title="IT Support & Service Desk"
desc="Dedicated support teams resolving operational IT issues quickly to minimize disruptions."
image="https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1200"
/>

<ServiceCard
title="Cybersecurity Management"
desc="Advanced security frameworks protecting enterprise IT systems from cyber threats."
image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
/>

</div>

</div>

</section>



{/* TECHNOLOGY STACK */}

{/* <section className="py-24 bg-gray-50">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-extrabold mb-16">
Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

{[
"AWS",
"Azure",
"Kubernetes",
"VMware",
"Linux"
].map((tech,i)=>(

<div
key={i}
className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center"
>

<FiServer className="text-blue-600 text-4xl mb-3"/>

<p className="font-semibold text-lg">
{tech}
</p>

</div>

))}

</div>



<HashLink
smooth
to="/#contact"
className="inline-block mt-16 relative bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold overflow-hidden group"
>

<span className="relative z-10">
Request Managed IT Consultation
</span>

<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition"></span>

</HashLink>

</div>

</section> */}
<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-gray-900 mb-20">
Managed IT Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

{/* VMware */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/vmware.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">VMware</h3>
<p className="text-gray-600 text-sm">
Enterprise virtualization and infrastructure management.
</p>
</div>

{/* Cisco */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/cisco-2.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Cisco</h3>
<p className="text-gray-600 text-sm">
Enterprise networking infrastructure and security.
</p>
</div>

{/* Linux */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/linux-tux.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Linux</h3>
<p className="text-gray-600 text-sm">
Secure and reliable operating systems for enterprise IT.
</p>
</div>

{/* Prometheus */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/prometheus.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">Prometheus</h3>
<p className="text-gray-600 text-sm">
Monitoring and alerting for enterprise infrastructure.
</p>
</div>

{/* ServiceNow */}
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
<img src="https://cdn.worldvectorlogo.com/logos/servicenow.svg" className="h-14 mx-auto mb-4"/>
<h3 className="font-bold text-lg mb-2">ServiceNow</h3>
<p className="text-gray-600 text-sm">
IT service management and workflow automation.
</p>
</div>

</div>

</div>

</section>

</>

)

}

export default ManagedIT