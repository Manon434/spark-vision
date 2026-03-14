

import { Link } from "react-router-dom"
import { FiBarChart2, FiDatabase, FiTrendingUp, FiCpu } from "react-icons/fi"

function Analytics(){

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
Data Analytics Consulting
</span>

</div>


{/* HERO */}

<div className="text-center mb-20">

<div className="text-blue-600 text-5xl mb-6 flex justify-center">
<FiBarChart2/>
</div>

<h1 className="text-4xl font-bold text-blue-700 mb-6">
Data Analytics Consulting
</h1>

<p className="max-w-2xl mx-auto text-gray-700 font-medium">

We help organizations unlock the full potential of their data by
building modern analytics platforms, real-time dashboards,
and AI-driven insights that support better decision-making.

</p>

</div>


{/* KEY BENEFITS */}

<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
3x
</p>

<p className="text-gray-600 font-semibold">
Faster Analytics
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
40%
</p>

<p className="text-gray-600 font-semibold">
Improved Decision Speed
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">

<p className="text-4xl font-bold text-blue-600 mb-2">
60%
</p>

<p className="text-gray-600 font-semibold">
Reporting Automation
</p>

</div>

</div>


{/* CAPABILITIES */}

<h2 className="text-2xl font-bold mb-10 text-center text-gray-900">
Key Capabilities
</h2>

<div className="grid md:grid-cols-2 gap-10 mb-20">


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<div className="text-blue-600 text-3xl">
<FiDatabase/>
</div>

<div>

<h3 className="font-bold mb-2">
Enterprise Data Platforms
</h3>

<p className="text-gray-600">
Design and implementation of modern data lakes,
warehouses and scalable analytics infrastructure.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<div className="text-blue-600 text-3xl">
<FiTrendingUp/>
</div>

<div>

<h3 className="font-bold mb-2">
Business Intelligence
</h3>

<p className="text-gray-600">
Interactive dashboards and reporting solutions
that enable leadership teams to make faster decisions.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<div className="text-blue-600 text-3xl">
<FiCpu/>
</div>

<div>

<h3 className="font-bold mb-2">
AI & Predictive Analytics
</h3>

<p className="text-gray-600">
Machine learning models that forecast demand,
optimize operations and reduce business risk.
</p>

</div>

</div>


<div className="flex gap-5 bg-blue-50 p-6 rounded-xl">

<div className="text-blue-600 text-3xl">
<FiBarChart2/>
</div>

<div>

<h3 className="font-bold mb-2">
Real-Time Insights
</h3>

<p className="text-gray-600">
Streaming analytics platforms that provide
real-time operational visibility.
</p>

</div>

</div>

</div>


{/* TECHNOLOGY STACK */}

<h2 className="text-2xl font-bold mb-8 text-center">
Technology Stack
</h2>

<div className="flex flex-wrap justify-center gap-4 mb-20">

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
Power BI
</span>

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
Tableau
</span>

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
Python
</span>

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
Snowflake
</span>

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
AWS Analytics
</span>

<span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium">
Azure Data Platform
</span>

</div>


{/* CTA */}

<div className="text-center">

<Link
to="/#contact"
className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
>

Start Your Analytics Transformation →

</Link>

</div>

</div>

</section>

)

}

export default Analytics