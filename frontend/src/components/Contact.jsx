

import {FiMapPin,FiMail} from "react-icons/fi"

function Contact(){

return(

<section
id="contact"
className="py-28 bg-gray-50"
>

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
Start Your Transformation
</h2>

<div className="grid md:grid-cols-2 gap-14">


{/* LOCATIONS */}

<div className="space-y-8">

{/* MUMBAI */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-blue-100 p-3 rounded-lg h-fit hover:bg-blue-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>

<h3 className="font-semibold text-lg text-gray-900">
Mumbai
<span className="text-blue-600 text-sm ml-2">
HEADQUARTERS
</span>
</h3>

<p className="text-gray-600 mt-1">
202,93 east ,
<br/>
Mahakali caves road,
<br/>
Andheri East, Mumbai-93, Maharashtra
</p>

<div className="flex items-center gap-2 mt-3 text-gray-600 hover:text-gray-900 transition">

<FiMail/>

info@sparkvisionconsulting.com

</div>

</div>

</div>



{/* CHANDIGARH */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-blue-100 p-3 rounded-lg h-fit hover:bg-blue-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>

<h3 className="font-semibold text-lg text-gray-900">
Chandigarh
<span className="text-blue-600 text-sm ml-2">
INNOVATION HUB
</span>
</h3>

<div className="flex items-center gap-2 mt-3 text-gray-600 hover:text-gray-900 transition">

<FiMail/>

info@sparkvisionconsulting.com

</div>

</div>

</div>



{/* RAJASTHAN */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-blue-100 p-3 rounded-lg h-fit hover:bg-blue-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>



<h3 className="font-semibold text-lg text-gray-900">
Rajasthan

<span className="text-blue-600 text-sm ml-2">
DELIVERY CENTER
</span>
</h3>
<p className="text-gray-600 mt-1">
Shop no.4,Shivam shopping center
<br/>
Maharishi Dadhichi circle,Subhash Nagar
<br/>
Bhilwa,Rajasthan-311001
</p>



<div className="flex items-center gap-2 mt-3 text-gray-600 hover:text-gray-900 transition">

<FiMail/>

info@sparkvisionconsulting.com

</div>

</div>

</div>

</div>



{/* CONTACT FORM */}

<div className="bg-white p-10 rounded-xl shadow-md">

<h3 className="text-2xl font-semibold mb-3 text-gray-900">
Request a Consultation
</h3>

<p className="text-gray-600 mb-8">
Discuss your IT strategy, SAP implementation, or analytics needs with our experts.
</p>

<form className="space-y-5">

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Full Name"
className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
/>

<input
placeholder="Company"
className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
/>

</div>

<input
placeholder="Business Email"
className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
/>

<textarea
rows="4"
placeholder="Describe your project requirements..."
className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
/>

<button
className="w-full py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition"
>

Send Message ✈

</button>

</form>

</div>

</div>

</div>

</section>

)

}

export default Contact