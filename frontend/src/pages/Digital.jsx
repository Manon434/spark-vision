// function Digital(){

// return(

// <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">

// <h1 className="text-4xl font-bold text-blue-700 mb-6">
// Digital Transformation Consulting
// </h1>

// <p className="text-gray-600 mb-6">
// Digital transformation is about reimagining how businesses operate using modern
// technologies. We help enterprises modernize legacy systems, redesign business
// processes, and implement digital platforms that improve agility and innovation.
// </p>

// <h2 className="text-2xl font-semibold mb-4">
// Our Approach
// </h2>

// <ul className="space-y-3 text-gray-600 mb-10">

// <li>• Digital strategy and transformation roadmap development</li>

// <li>• Enterprise system modernization</li>

// <li>• Customer experience transformation</li>

// <li>• Automation and intelligent workflows</li>

// <li>• AI-driven business innovation</li>

// </ul>

// <h2 className="text-2xl font-semibold mb-4">
// Business Outcomes
// </h2>

// <ul className="space-y-3 text-gray-600">

// <li>• Faster business innovation</li>

// <li>• Improved operational efficiency</li>

// <li>• Enhanced customer engagement</li>

// <li>• Future-ready digital infrastructure</li>

// </ul>

// </section>

// )

// }

// export default Digital

import { Link } from "react-router-dom"
import { FiTrendingUp, FiCpu, FiLayers, FiZap } from "react-icons/fi"

function Digital(){

return(

<section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white">

<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">


<div className="text-sm text-gray-500 mb-8">

<Link to="/">Home</Link>

<span className="mx-2">/</span>

<span>Digital Transformation</span>

</div>


<div className="text-center mb-20">

<FiTrendingUp className="text-blue-600 text-5xl mx-auto mb-6"/>

<h1 className="text-4xl font-bold text-blue-700 mb-6">
Digital Transformation Consulting
</h1>

<p className="max-w-2xl mx-auto text-gray-700 font-medium">
We help organizations modernize legacy systems and
accelerate innovation through digital transformation.
</p>

</div>


<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">2x</p>
<p className="font-semibold text-gray-600">Business Agility</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">35%</p>
<p className="font-semibold text-gray-600">Operational Efficiency</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-md text-center">
<p className="text-4xl font-bold text-blue-600">50%</p>
<p className="font-semibold text-gray-600">Faster Innovation</p>
</div>

</div>


<div className="grid md:grid-cols-2 gap-10 mb-20">

<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiLayers className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">Enterprise Modernization</h3>
<p className="text-gray-600">Upgrade legacy enterprise systems.</p>
</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiCpu className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">Automation</h3>
<p className="text-gray-600">Automate business workflows.</p>
</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<FiZap className="text-blue-600 text-3xl"/>

<div>
<h3 className="font-bold mb-2">AI Integration</h3>
<p className="text-gray-600">Integrate AI and advanced analytics.</p>
</div>

</div>

</div>


<div className="text-center">

<Link
to="/#contact"
className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
>

Start Your Digital Transformation →

</Link>

</div>

</div>

</section>

)

}

export default Digital