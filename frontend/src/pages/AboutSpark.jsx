// import { Link } from "react-router-dom"

// function AboutSpark(){

// return(

// <section className="pt-32 pb-24 bg-white">

// <div className="max-w-5xl mx-auto px-6">


// {/* BREADCRUMB */}

// <div className="text-sm text-gray-500 mb-8">

// <Link to="/" className="hover:text-blue-600">
// Home
// </Link>

// <span className="mx-2">/</span>

// <span className="text-gray-700">
// About Spark Vision
// </span>

// </div>


// <h1 className="text-4xl font-bold text-blue-700 mb-8">
// About Spark Vision Consulting
// </h1>


// {/* EXPERTISE */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Expertise
// </h2>

// <p className="text-gray-600 mb-8">

// At Spark Vision Consulting, our team consists of highly experienced
// technology consultants specializing in SAP transformation, cloud
// computing, enterprise architecture, and advanced IT infrastructure.

// Our expertise enables us to design and implement solutions that
// optimize business operations, improve scalability, and drive
// sustainable digital growth.

// </p>


// {/* APPROACH */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Approach
// </h2>

// <p className="text-gray-600 mb-8">

// Every organization has unique challenges and operational requirements.
// We take the time to deeply understand our clients' business processes,
// technology landscape, and long-term goals.

// By combining strategic consulting with technical expertise, we design
// customized digital transformation roadmaps that deliver measurable
// business value.

// </p>


// {/* RESULTS */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Results
// </h2>

// <p className="text-gray-600 mb-8">

// We focus on delivering real, measurable outcomes. From optimizing ERP
// systems and modernizing infrastructure to streamlining enterprise
// processes, our solutions consistently help clients improve efficiency,
// reduce operational costs, and unlock new growth opportunities.

// </p>


// {/* MISSION */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Mission
// </h2>

// <p className="text-gray-600 mb-8">

// Our mission is to empower organizations through technology.
// Spark Vision Consulting helps businesses of all sizes leverage modern
// digital platforms, advanced analytics, and enterprise solutions to
// reach their full potential.

// </p>


// {/* TEAM */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Team
// </h2>

// <p className="text-gray-600 mb-8">

// Our consultants bring years of experience across enterprise
// technology, SAP ecosystems, and digital transformation initiatives.
// We are passionate about helping organizations succeed and pride
// ourselves on delivering exceptional consulting expertise.

// </p>


// {/* SERVICES */}

// <h2 className="text-2xl font-semibold mb-4">
// Our Services
// </h2>

// <p className="text-gray-600">

// Our consulting services accelerate digital transformation journeys.
// Whether it's SAP migration, greenfield implementations, or managing
// complex digital ecosystems, our experts ensure a seamless transition
// that supports long-term business success.

// </p>

// </div>

// </section>

// )

// }

// export default AboutSpark

import { Link } from "react-router-dom"
import { FiCpu, FiTarget, FiTrendingUp, FiUsers, FiLayers } from "react-icons/fi"

function AboutSpark(){

return(

<section className="pt-32 pb-24 bg-white">

<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">


{/* BREADCRUMB */}

<div className="text-sm text-gray-500 mb-10">

<Link to="/" className="hover:text-blue-600">
Home
</Link>

<span className="mx-2">/</span>

<span className="text-gray-700">
About Spark Vision
</span>

</div>


{/* TITLE */}

<h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">
The Spark Behind Spark Vision
</h1>


{/* CARDS */}

<div className="grid md:grid-cols-2 gap-10">


{/* EXPERTISE */}

<div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">

<div className="text-blue-600 text-3xl mb-4">
<FiCpu/>
</div>

<h2 className="text-xl font-bold mb-3">
Our Expertise
</h2>

<p className="text-gray-700 leading-relaxed font-medium">

Our consultants specialize in SAP ecosystems, cloud computing,
enterprise architecture, and advanced IT infrastructure.

By combining deep technical expertise with industry knowledge,
we deliver scalable digital solutions that optimize operations
and accelerate innovation.

</p>

</div>


{/* APPROACH */}

<div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">

<div className="text-blue-600 text-3xl mb-4">
<FiTarget/>
</div>

<h2 className="text-xl font-bold mb-3">
Our Approach
</h2>

<p className="text-gray-700 leading-relaxed font-medium">

Every business operates differently. We take the time to
understand each client's technology landscape, operational
challenges, and growth objectives.

This allows us to create tailored digital transformation
strategies that deliver measurable business impact.

</p>

</div>


{/* RESULTS */}

<div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">

<div className="text-blue-600 text-3xl mb-4">
<FiTrendingUp/>
</div>

<h2 className="text-xl font-bold mb-3">
Our Results
</h2>

<p className="text-gray-700 leading-relaxed font-medium">

From ERP optimization and infrastructure modernization to
process automation and analytics transformation, our work
consistently delivers measurable improvements in efficiency,
cost reduction, and operational performance.

</p>

</div>


{/* TEAM */}

<div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">

<div className="text-blue-600 text-3xl mb-4">
<FiUsers/>
</div>

<h2 className="text-xl font-bold mb-3">
Our Team
</h2>

<p className="text-gray-700 leading-relaxed font-medium">

Our team consists of experienced consultants, enterprise
architects, and technology specialists who have worked across
multiple industries including manufacturing, retail, and finance.

We are passionate about helping organizations succeed.

</p>

</div>


</div>


{/* MISSION */}

<div className="mt-20 bg-blue-600 text-white p-10 rounded-xl text-center shadow-lg">

<div className="text-3xl mb-4 flex justify-center">
<FiLayers/>
</div>

<h2 className="text-2xl font-bold mb-4">
Our Mission
</h2>

<p className="max-w-3xl mx-auto leading-relaxed">

Our mission is to help businesses unlock their full potential
through technology. Whether it's SAP migration, greenfield
implementations, or complex enterprise modernization projects,
Spark Vision Consulting ensures a smooth and successful digital
transformation journey.

</p>

</div>


</div>

</section>

)

}

export default AboutSpark