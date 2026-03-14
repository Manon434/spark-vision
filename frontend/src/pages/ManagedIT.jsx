// function ManagedIT(){

// return(

// <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">

// <h1 className="text-4xl font-bold text-blue-700 mb-6">
// Managed IT Services
// </h1>

// <p className="text-gray-600 mb-6">
// Our Managed IT Services help organizations maintain reliable, secure, and
// high-performing technology environments. We manage infrastructure, monitor
// systems, and provide strategic IT support so businesses can focus on growth.
// </p>

// <h2 className="text-2xl font-semibold mb-4">
// Services Offered
// </h2>

// <ul className="space-y-3 text-gray-600 mb-10">

// <li>• IT infrastructure monitoring and maintenance</li>

// <li>• Network and cybersecurity management</li>

// <li>• Cloud infrastructure management</li>

// <li>• IT support and service desk operations</li>

// <li>• Strategic IT planning and digital roadmap development</li>

// </ul>

// <h2 className="text-2xl font-semibold mb-4">
// Benefits
// </h2>

// <ul className="space-y-3 text-gray-600">

// <li>• Reduced IT operational costs</li>

// <li>• Increased system reliability</li>

// <li>• Enhanced cybersecurity protection</li>

// <li>• 24/7 infrastructure monitoring</li>

// </ul>

// </section>

// )

// }

// export default ManagedIT

import { Link } from "react-router-dom"
import { FiSettings, FiMonitor, FiShield, FiActivity } from "react-icons/fi"

function ManagedIT(){

return(

<section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white">

<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">


<div className="text-sm text-gray-500 mb-8">

<Link to="/" className="hover:text-blue-600">Home</Link>

<span className="mx-2">/</span>

<span>Managed IT Services</span>

</div>


<div className="text-center mb-20">

<FiSettings className="text-blue-600 text-5xl mx-auto mb-6"/>

<h1 className="text-4xl font-bold text-blue-700 mb-6">
Managed IT Services
</h1>

<p className="max-w-2xl mx-auto text-gray-700 font-medium">
Our managed IT services ensure reliable technology
operations while allowing businesses to focus on growth.
</p>

</div>


<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">24/7</p>
<p className="font-semibold text-gray-600">Monitoring</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">50%</p>
<p className="font-semibold text-gray-600">Downtime Reduction</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">30%</p>
<p className="font-semibold text-gray-600">IT Cost Savings</p>
</div>

</div>


<div className="grid md:grid-cols-2 gap-10 mb-20">

<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiMonitor className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">Infrastructure Monitoring</h3>
<p className="text-gray-600">Continuous monitoring of IT infrastructure.</p>
</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiShield className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">Cybersecurity Management</h3>
<p className="text-gray-600">Protection against cyber threats.</p>
</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiActivity className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">Performance Optimization</h3>
<p className="text-gray-600">Improve system reliability.</p>
</div>

</div>

</div>


<div className="text-center">

<Link
to="/#contact"
className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
>

Request Managed IT Consultation →

</Link>

</div>

</div>

</section>

)

}

export default ManagedIT