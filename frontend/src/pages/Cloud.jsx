// function Cloud(){

// return(

// <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">

// <h1 className="text-4xl font-bold text-blue-700 mb-6">
// Cloud Computing Services
// </h1>

// <p className="text-gray-600 mb-6">

// Our cloud consulting services help organizations modernize infrastructure,
// optimize costs and improve scalability by leveraging modern cloud platforms
// such as AWS, Azure and Google Cloud.

// </p>

// <h2 className="text-2xl font-semibold mb-4">
// What We Offer
// </h2>

// <ul className="space-y-3 text-gray-600">

// <li>• Cloud infrastructure architecture and migration</li>

// <li>• Hybrid and multi-cloud environments</li>

// <li>• DevOps automation and CI/CD pipelines</li>

// <li>• Cloud security and compliance solutions</li>

// <li>• Cost optimization and performance monitoring</li>

// </ul>

// </section>

// )

// }

// export default Cloud

import { Link } from "react-router-dom"
import { FiCloud, FiServer, FiShield, FiCpu } from "react-icons/fi"

function Cloud(){

return(

<section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white">

<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">


{/* BREADCRUMB */}

<div className="text-sm text-gray-500 mb-8">

<Link to="/" className="hover:text-blue-600">
Home
</Link>

<span className="mx-2">/</span>

<span className="text-gray-700">
Cloud Computing Services
</span>

</div>


{/* HERO */}

<div className="text-center mb-20">

<div className="text-blue-600 text-5xl mb-6 flex justify-center">
<FiCloud/>
</div>

<h1 className="text-4xl font-bold text-blue-700 mb-6">
Cloud Computing Services
</h1>

<p className="max-w-2xl mx-auto text-gray-700 font-medium">

We design scalable cloud architectures that improve operational
efficiency, reduce infrastructure costs, and enable businesses
to innovate faster.

</p>

</div>


{/* METRICS */}

<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
40%
</p>

<p className="font-semibold text-gray-600">
Infrastructure Cost Reduction
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
3x
</p>

<p className="font-semibold text-gray-600">
Scalability Improvement
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
99.9%
</p>

<p className="font-semibold text-gray-600">
System Reliability
</p>

</div>

</div>


{/* CAPABILITIES */}

<h2 className="text-2xl font-bold mb-10 text-center">
Key Capabilities
</h2>

<div className="grid md:grid-cols-2 gap-10 mb-20">


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiServer className="text-blue-600 text-3xl"/>

<div>

<h3 className="font-bold mb-2">
Cloud Architecture
</h3>

<p className="text-gray-600">
Design and deployment of scalable cloud infrastructure
using modern cloud platforms.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiShield className="text-blue-600 text-3xl"/>

<div>

<h3 className="font-bold mb-2">
Cloud Security
</h3>

<p className="text-gray-600">
Enterprise-grade security frameworks ensuring
compliance and risk protection.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiCpu className="text-blue-600 text-3xl"/>

<div>

<h3 className="font-bold mb-2">
DevOps Automation
</h3>

<p className="text-gray-600">
Automated CI/CD pipelines enabling faster
software delivery cycles.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiCloud className="text-blue-600 text-3xl"/>

<div>

<h3 className="font-bold mb-2">
Cloud Migration
</h3>

<p className="text-gray-600">
Migration of legacy systems to modern
cloud-native architectures.
</p>

</div>

</div>

</div>


{/* TECHNOLOGY */}

<h2 className="text-2xl font-bold mb-8 text-center">
Cloud Platforms
</h2>

<div className="flex flex-wrap justify-center gap-4 mb-20">

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">AWS</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">Azure</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">Google Cloud</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">Kubernetes</span>
<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">Docker</span>

</div>


{/* CTA */}

<div className="text-center">

<Link
to="/#contact"
className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
>

Start Your Cloud Transformation →

</Link>

</div>

</div>

</section>

)

}

export default Cloud