
// import {FiMapPin,FiPhone,FiMail} from "react-icons/fi"

// function Contact(){

// return(

// <section
// id="contact"
// className="py-28 bg-gray-50"
// >

// <div className="max-w-7xl mx-auto px-8">

// <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
// Start Your Transformation
// </h2>

// <div className="grid md:grid-cols-2 gap-14">

// {/* LOCATION SECTION */}

// <div className="space-y-8">

// {/* LOCATION CARD */}

// <div className="bg-white p-7 rounded-xl shadow-md flex gap-5
// hover:shadow-xl hover:-translate-y-1 transition duration-300">

// <div className="bg-teal-100 p-3 rounded-lg h-fit
// hover:bg-teal-500 transition">

// <FiMapPin className="text-teal-600 text-xl hover:text-white transition"/>

// </div>

// <div>

// <h3 className="font-semibold text-lg text-gray-900">
// Mumbai
// <span className="text-teal-600 text-sm ml-2">
// HEADQUARTERS
// </span>
// </h3>

// <p className="text-gray-500">
// Bandra Kurla Complex, Mumbai MH 400051
// </p>

// <div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">

// <FiPhone/>

// +91 22 6123 4567

// </div>

// <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">

// <FiMail/>

// mumbai@sparkvision.co.in

// </div>

// </div>

// </div>


// {/* CHANDIGARH */}

// <div className="bg-white p-7 rounded-xl shadow-md flex gap-5
// hover:shadow-xl hover:-translate-y-1 transition duration-300">

// <div className="bg-teal-100 p-3 rounded-lg h-fit hover:bg-teal-500 transition">

// <FiMapPin className="text-teal-600 text-xl hover:text-white transition"/>

// </div>

// <div>

// <h3 className="font-semibold text-lg text-gray-900">
// Chandigarh
// <span className="text-teal-600 text-sm ml-2">
// INNOVATION HUB
// </span>
// </h3>

// <p className="text-gray-500">
// IT Park Sector 22 Chandigarh
// </p>

// <div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">

// <FiPhone/>

// +91 172 456 7890

// </div>

// <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">

// <FiMail/>

// chd@sparkvision.co.in

// </div>

// </div>

// </div>


// {/* RAJASTHAN */}

// <div className="bg-white p-7 rounded-xl shadow-md flex gap-5
// hover:shadow-xl hover:-translate-y-1 transition duration-300">

// <div className="bg-teal-100 p-3 rounded-lg h-fit hover:bg-teal-500 transition">

// <FiMapPin className="text-teal-600 text-xl hover:text-white transition"/>

// </div>

// <div>

// <h3 className="font-semibold text-lg text-gray-900">
// Rajasthan
// <span className="text-teal-600 text-sm ml-2">
// DELIVERY CENTER
// </span>
// </h3>

// <p className="text-gray-500">
// Mahindra SEZ Jaipur
// </p>

// <div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">

// <FiPhone/>

// +91 141 789 0123

// </div>

// <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">

// <FiMail/>

// jaipur@sparkvision.co.in

// </div>

// </div>

// </div>

// </div>


// {/* CONTACT FORM */}

// <div className="bg-white p-10 rounded-xl shadow-md">

// <h3 className="text-2xl font-semibold mb-3 text-gray-900">
// Request a Consultation
// </h3>

// <p className="text-gray-500 mb-8">
// Discuss your IT strategy, SAP implementation, or analytics needs with our experts.
// </p>

// <form className="space-y-5">

// <div className="grid grid-cols-2 gap-4">

// <input
// placeholder="Full Name"
// className="border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
// />

// <input
// placeholder="Company"
// className="border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
// />

// </div>

// <input
// placeholder="Business Email"
// className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-400 outline-none"
// />

// <textarea
// rows="4"
// placeholder="Describe your project requirements..."
// className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-400 outline-none"
// />

// <button
// className="w-full py-4 rounded-lg text-white font-semibold
// bg-gradient-to-r from-teal-500 to-orange-500
// hover:opacity-90 transition"
// >

// Send Message ✈

// </button>

// </form>

// </div>

// </div>

// </div>

// </section>

// )

// }

// export default Contact

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"
import axios from "axios"
import { useState } from "react"

function Contact() {

const [formData, setFormData] = useState({
name: "",
company: "",
email: "",
message: ""
})

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
})
}

const handleSubmit = async (e) => {
e.preventDefault()

try {

await axios.post(
`${import.meta.env.VITE_API_URL}/api/contact`,
formData
)

alert("Consultation request sent successfully!")

setFormData({
name:"",
company:"",
email:"",
message:""
})

} catch (error) {

alert("Error sending message. Please try again.")

}

}

return(

<section id="contact" className="py-28 bg-blue-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
Start Your Transformation
</h2>

<div className="grid md:grid-cols-2 gap-14">


{/* LOCATIONS */}

<div className="space-y-8">


{/* MUMBAI */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-teal-100 p-3 rounded-lg h-fit hover:bg-teal-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>

<h3 className="font-semibold text-lg text-gray-900">
Mumbai
<span className="text-blue-600 text-sm ml-2">
HEADQUARTERS
</span>
</h3>

<p className="text-gray-500">
Bandra Kurla Complex, Mumbai MH 400051
</p>

<div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">
<FiPhone/> +91 22 6123 4567
</div>

<div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">
<FiMail/> mumbai@sparkvision.co.in
</div>

</div>

</div>


{/* CHANDIGARH */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-teal-100 p-3 rounded-lg h-fit hover:bg-teal-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>

<h3 className="font-semibold text-lg text-gray-900">
Chandigarh
<span className="text-blue-600 text-sm ml-2">
INNOVATION HUB
</span>
</h3>

<p className="text-gray-500">
IT Park Sector 22 Chandigarh
</p>

<div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">
<FiPhone/> +91 172 456 7890
</div>

<div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">
<FiMail/> chd@sparkvision.co.in
</div>

</div>

</div>


{/* RAJASTHAN */}

<div className="bg-white p-7 rounded-xl shadow-md flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

<div className="bg-teal-100 p-3 rounded-lg h-fit hover:bg-teal-500 transition">

<FiMapPin className="text-blue-600 text-xl hover:text-white transition"/>

</div>

<div>

<h3 className="font-semibold text-lg text-gray-900">
Rajasthan
<span className="text-blue-600 text-sm ml-2">
DELIVERY CENTER
</span>
</h3>

<p className="text-gray-500">
Mahindra SEZ Jaipur
</p>

<div className="flex items-center gap-2 mt-3 text-gray-500 hover:text-gray-800 transition">
<FiPhone/> +91 141 789 0123
</div>

<div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">
<FiMail/> jaipur@sparkvision.co.in
</div>

</div>

</div>

</div>


{/* CONTACT FORM */}

<div className="bg-white p-10 rounded-xl shadow-md">

<h3 className="text-2xl font-semibold mb-3 text-gray-900">
Request a Consultation
</h3>

<p className="text-gray-500 mb-8">
Discuss your IT strategy, SAP implementation, or analytics needs with our experts.
</p>


<form onSubmit={handleSubmit} className="space-y-5">


<div className="grid grid-cols-2 gap-4">

<input
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Full Name"
className="border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
/>

<input
name="company"
value={formData.company}
onChange={handleChange}
placeholder="Company"
className="border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
/>

</div>


<input
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Business Email"
className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-400 outline-none"
/>


<textarea
name="message"
value={formData.message}
onChange={handleChange}
rows="4"
placeholder="Describe your project requirements..."
className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-400 outline-none"
/>


<button
type="submit"
className="w-full py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-teal-500 to-orange-500 hover:opacity-90 transition"
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