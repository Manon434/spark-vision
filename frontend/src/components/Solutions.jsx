

import { Link } from "react-router-dom"
import { FiCloud, FiBarChart2, FiSettings, FiTrendingUp } from "react-icons/fi"

const solutions = [

{
title:"Cloud Computing Services",
icon:<FiCloud/>,
description:"Scalable cloud infrastructure and migration services that improve operational efficiency and reduce IT costs.",
path:"/solutions/cloud"
},

{
title:"Data Analytics Consulting",
icon:<FiBarChart2/>,
description:"Transform enterprise data into actionable insights using modern analytics, BI dashboards and AI models.",
path:"/solutions/analytics"
},

{
title:"Managed IT Services",
icon:<FiSettings/>,
description:"End-to-end IT infrastructure monitoring, management and strategic support for modern organizations.",
path:"/solutions/managed"
},

{
title:"Digital Transformation",
icon:<FiTrendingUp/>,
description:"Technology modernization strategies that help enterprises innovate faster and scale operations.",
path:"/solutions/digital"
}

]

function Solutions(){

return(

<section id="solutions" className="py-24 bg-blue-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<p className="text-blue-600 text-sm tracking-widest mb-3">
OUR SOLUTIONS
</p>

<h2 className="text-4xl font-bold text-gray-900">
Core Competencies
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{solutions.map((item,index)=>(

<div
key={index}
className="bg-white p-7 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition flex flex-col justify-between"
>

<div>

<div className="text-blue-600 text-4xl mb-5">
{item.icon}
</div>

<h3 className="font-semibold text-lg text-gray-900 mb-3">
{item.title}
</h3>

<p className="text-gray-600 text-sm">
{item.description}
</p>

</div>

<Link
to={item.path}
className="mt-6 font-semibold text-blue-600 flex items-center gap-1 hover:gap-2 transition"
>

Explore More →

</Link>

</div>

))}

</div>

</div>

</section>

)

}

export default Solutions