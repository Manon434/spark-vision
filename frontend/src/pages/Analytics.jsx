
import PageHero from "../components/PageHero"
import ServiceCard from "../components/ServiceCard"
import { HashLink } from "react-router-hash-link"
import { FiBarChart2 } from "react-icons/fi"

function Analytics(){

return(

<>

<PageHero
title="Data & Analytics Consulting"
subtitle="Transform enterprise data into strategic insights through advanced analytics and AI."
image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000"
/>


<section className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-10 text-center">

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">5x</p>
<p className="mt-3 text-lg text-gray-800">Data Processing Speed</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">70%</p>
<p className="mt-3 text-lg text-gray-800">Improved Insights</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-lg">
<p className="text-5xl font-bold text-blue-600">3x</p>
<p className="mt-3 text-lg text-gray-800">Faster Decision Making</p>
</div>

</div>

</div>

</section>



<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-extrabold text-center mb-16">
Analytics Capabilities
</h2>

<div className="grid md:grid-cols-3 gap-10">

<ServiceCard
title="Data Warehousing"
desc="Enterprise-grade data warehouses integrating operational and analytical workloads."
image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200"
/>

<ServiceCard
title="Business Intelligence"
desc="Interactive dashboards and reporting platforms enabling real-time insights."
image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
/>

<ServiceCard
title="Machine Learning"
desc="Predictive analytics models that unlock new growth opportunities."
image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
/>

</div>

</div>

</section>



<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-gray-900 mb-20">
Analytics Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

{/* Python */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Python
</h3>

<p className="text-gray-600 text-sm">
Data processing, ML pipelines and enterprise analytics.
</p>

</div>


{/* Spark */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Apache Spark
</h3>

<p className="text-gray-600 text-sm">
Distributed big data processing and high-performance analytics.
</p>

</div>


{/* Power BI */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Power BI
</h3>

<p className="text-gray-600 text-sm">
Enterprise dashboards and business intelligence reporting.
</p>

</div>


{/* Tableau */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Tableau
</h3>

<p className="text-gray-600 text-sm">
Interactive visual analytics for strategic decision making.
</p>

</div>


{/* Snowflake */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://upload.wikimedia.org/wikipedia/commons/3/37/Snowflake_Logo.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Snowflake
</h3>

<p className="text-gray-600 text-sm">
Cloud data warehouse for scalable enterprise analytics.
</p>

</div>


{/* Hadoop */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

<img
src="https://cdn.worldvectorlogo.com/logos/hadoop.svg"
className="h-14 mx-auto mb-4"
/>

<h3 className="font-bold text-lg mb-2">
Hadoop
</h3>

<p className="text-gray-600 text-sm">
Big data storage and distributed analytics infrastructure.
</p>

</div>

</div>

</div>

</section>

</>

)

}

export default Analytics

