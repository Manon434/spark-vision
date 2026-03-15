function ServiceCard({title,desc,image}){

return(

<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

<div className="h-52 overflow-hidden">

<img
src={image}
loading="lazy"
className="w-full h-full object-cover"
/>

</div>

<div className="p-8">

<h3 className="text-xl font-semibold mb-3 text-gray-900">
{title}
</h3>

<p className="text-gray-800">
{desc}
</p>

</div>

</div>

)

}

export default ServiceCard