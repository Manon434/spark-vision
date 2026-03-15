

// import { HashLink } from "react-router-hash-link"
// import { FiGlobe } from "react-icons/fi"

// function Hero(){

// return(

// <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-36 pb-28">

// <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


// {/* LEFT CONTENT */}

// <div>

// <p className="text-blue-200 text-sm tracking-widest mb-4 font-semibold">
// GLOBAL DIGITAL TRANSFORMATION PARTNER
// </p>

// <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

// Transforming Businesses with
// <span className="text-blue-300"> Technology & Strategy</span>

// </h1>

// <p className="text-blue-100 text-lg mb-8 leading-relaxed">

// Spark Vision Consulting helps enterprises modernize operations,
// optimize supply chains, and unlock data-driven insights through
// SAP transformation, cloud infrastructure, analytics, and
// enterprise technology solutions.

// </p>


// {/* GLOBAL PRESENCE */}

// <div className="flex items-center gap-3 mb-4">

// <FiGlobe className="text-blue-300 text-2xl"/>

// <p className="font-semibold text-lg">
// Global Project Experience
// </p>

// </div>


// {/* COUNTRIES */}

// <div className="flex flex-wrap gap-3 mb-10">

// <span className="bg-blue-600/40 px-4 py-2 rounded-full text-sm backdrop-blur">
// 🇦🇪 Dubai
// </span>

// <span className="bg-blue-600/40 px-4 py-2 rounded-full text-sm backdrop-blur">
// 🇸🇦 Saudi Arabia
// </span>

// <span className="bg-blue-600/40 px-4 py-2 rounded-full text-sm backdrop-blur">
// 🇺🇸 United States
// </span>

// <span className="bg-blue-600/40 px-4 py-2 rounded-full text-sm backdrop-blur">
// 🇮🇳 India
// </span>

// </div>


// {/* BUTTONS */}

// <div className="flex flex-col md:flex-row gap-4">

// <HashLink
// smooth
// to="/#contact"
// className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-lg font-semibold shadow-lg transition"
// >
// Request Consultation
// </HashLink>

// <HashLink
// smooth
// to="/#solutions"
// className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
// >
// Explore Solutions
// </HashLink>

// </div>

// </div>



// {/* RIGHT SIDE GLOBE */}

// <div className="flex justify-center">

// <img
// src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000"
// alt="Global presence"
// className="w-[420px] md:w-[520px] rounded-xl shadow-2xl"
// />

// </div>

// </div>



// {/* STATS INSIDE HERO */}

// <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">

// <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center border border-white/10">

// <p className="text-4xl font-bold text-white">
// 15+
// </p>

// <p className="text-blue-200 mt-2">
// Years Experience
// </p>

// </div>


// <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center border border-white/10">

// <p className="text-4xl font-bold text-white">
// 200+
// </p>

// <p className="text-blue-200 mt-2">
// Projects Delivered
// </p>

// </div>


// <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center border border-white/10">

// <p className="text-4xl font-bold text-white">
// 98%
// </p>

// <p className="text-blue-200 mt-2">
// Client Retention
// </p>

// </div>

// </div>

// </section>

// )

// }

// export default Hero



// import { HashLink } from "react-router-hash-link";
// import { FiGlobe, FiArrowRight } from "react-icons/fi";
// import { motion } from "framer-motion";

// function Hero() {
//   const countries = [
//     { name: "Dubai", flag: "🇦🇪" },
//     { name: "Saudi Arabia", flag: "🇸🇦" },
//     { name: "United States", flag: "🇺🇸" },
//     { name: "India", flag: "🇮🇳" },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white pt-32 pb-20">
//       {/* STYLISH BACKGROUND DECORATION */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse" />
//         <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-40" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6 border border-blue-100">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//             </span>
//             GLOBAL DIGITAL TRANSFORMATION PARTNER
//           </div>

//           <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-6">
//             Transforming Businesses with 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Technology & Strategy</span>
//           </h1>

//           <p className="text-slate-600 text-xl mb-10 leading-relaxed max-w-xl">
//             Spark Vision Consulting helps enterprises modernize operations, 
//             optimize supply chains, and unlock data-driven insights through 
//             bespoke enterprise technology solutions.
//           </p>

//           {/* GLOBAL PRESENCE INDICATOR */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-2 bg-blue-600 rounded-lg text-white">
//               <FiGlobe className="text-xl animate-spin-slow" />
//             </div>
//             <p className="font-bold text-slate-800 uppercase tracking-tight">
//               Global Project Experience
//             </p>
//           </div>

//           {/* STYLISH COUNTRY TAGS */}
//           <div className="flex flex-wrap gap-3 mb-12">
//             {countries.map((c, i) => (
//               <motion.span 
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-default"
//               >
//                 <span>{c.flag}</span> {c.name}
//               </motion.span>
//             ))}
//           </div>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-5">
//             <HashLink
//               smooth
//               to="/#contact"
//               className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all transform hover:scale-105"
//             >
//               Request Consultation
//               <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </HashLink>

//             <HashLink
//               smooth
//               to="/#solutions"
//               className="flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-slate-700 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
//             >
//               Explore Solutions
//             </HashLink>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE: ANIMATED GLOBE IMAGE */}
//         <motion.div 
//           className="relative"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Decorative Rings around the Image */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full animate-[spin_20s_linear_infinite]" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-blue-50 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
          
//           <div className="relative z-10 flex justify-center">
//             <motion.img
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
//               alt="Digital Globe Network"
//               className="w-full max-w-[550px] rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.2)] object-cover aspect-square md:aspect-auto"
//             />
            
//             {/* Overlaying "Floating" Stats badge */}
//             <motion.div 
//               animate={{ y: [0, 15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-blue-50 hidden md:block"
//             >
//               <p className="text-3xl font-black text-blue-600">200+</p>
//               <p className="text-slate-500 font-bold text-sm uppercase">Global Projects</p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* STATS SECTION */}
//       <div className="max-w-7xl mx-auto px-6 mt-32">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-slate-100">
//           <StatBox number="15+" label="Years of Expertise" />
//           <StatBox number="98%" label="Client Satisfaction" border />
//           <StatBox number="24/7" label="Cloud Monitoring" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatBox({ number, label, border }) {
//   return (
//     <div className={`py-12 px-8 text-center ${border ? 'md:border-x border-slate-100' : ''}`}>
//       <h3 className="text-4xl font-black text-slate-900 mb-2">{number}</h3>
//       <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">{label}</p>
//     </div>
//   );
// }

// export default Hero;


// import { HashLink } from "react-router-hash-link";
// import { FiGlobe, FiArrowRight, FiCheckCircle } from "react-icons/fi";
// import { motion } from "framer-motion";

// function Hero() {
//   const countries = [
//     { name: "Dubai", flag: "🇦🇪" },
//     { name: "Saudi Arabia", flag: "🇸🇦" },
//     { name: "United States", flag: "🇺🇸" },
//     { name: "India", flag: "🇮🇳" },
//   ];

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-12">
//       {/* LUXURY BACKGROUND ELEMENTS */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-70" />
//         <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-50" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
          
//           {/* LEFT CONTENT (6 columns) */}
//           <motion.div 
//             className="lg:col-span-7"
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="inline-flex items-center gap-2 bg-blue-600/5 text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-8 border border-blue-100">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//               </span>
//               GLOBAL DIGITAL TRANSFORMATION PARTNER
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-slate-900 mb-8">
//               Transforming Businesses with 
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600"> 
//                 Technology & Strategy
//               </span>
//             </h1>

//             <p className="text-slate-600 text-xl mb-10 leading-relaxed max-w-2xl">
//               Spark Vision Consulting modernizes operations and unlocks data-driven insights through 
//               world-class SAP transformation and cloud infrastructure.
//             </p>

//             {/* INTEGRATED STATS (Now part of the main flow) */}
//             <div className="grid grid-cols-3 gap-6 mb-12 border-l-4 border-blue-600 pl-6">
//               <div>
//                 <p className="text-3xl font-black text-slate-900">15+</p>
//                 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Years Exp.</p>
//               </div>
//               <div>
//                 <p className="text-3xl font-black text-slate-900">200+</p>
//                 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Projects</p>
//               </div>
//               <div>
//                 <p className="text-3xl font-black text-slate-900">98%</p>
//                 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Retention</p>
//               </div>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-5 items-center">
//               <HashLink
//                 smooth
//                 to="/#contact"
//                 className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
//               >
//                 Request Consultation
//                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </HashLink>

//               <div className="flex -space-x-3 overflow-hidden">
//                 {countries.map((c, i) => (
//                   <div key={i} title={c.name} className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-50 flex items-center justify-center text-xl shadow-sm">
//                     {c.flag}
//                   </div>
//                 ))}
//                 <div className="flex items-center justify-center h-10 px-3 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 ring-2 ring-white">
//                   + GLOBAL
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: THE BIG IMAGE (5 columns) */}
//           <motion.div 
//             className="lg:col-span-5 relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Spinning Orbit Rings */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border-2 border-dashed border-blue-100 rounded-full animate-[spin_40s_linear_infinite] -z-10" />
            
//             <div className="relative">
//               <motion.div
//                 animate={{ x: [-15, 15, -15] }} // Left-Right Motion
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative z-10"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
//                   alt="Digital Globe Network"
//                   className="w-full h-auto rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] object-cover ring-1 ring-slate-100"
//                 />
                
//                 {/* Floating "Live" Badge */}
//                 <div className="absolute top-8 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-3">
//                   <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
//                   <span className="text-sm font-bold text-slate-800">Active Deployments</span>
//                 </div>

//                 {/* Bottom Card Overlay */}
//                 <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl max-w-[200px]">
//                   <FiCheckCircle className="text-blue-400 text-3xl mb-3" />
//                   <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter mb-1">Quality Assurance</p>
//                   <p className="text-sm font-medium leading-snug">Certified SAP Partner & Cloud Expert</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


/////
// import { HashLink } from "react-router-hash-link";
// import { FiGlobe, FiArrowRight, FiCheckCircle } from "react-icons/fi";
// import { motion } from "framer-motion";

// function Hero() {
//   const countries = [
//     { name: "Dubai", flag: "🇦🇪" },
//     { name: "Saudi Arabia", flag: "🇸🇦" },
//     { name: "United States", flag: "🇺🇸" },
//     { name: "India", flag: "🇮🇳" },
//   ];

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-28 pb-20">
//       {/* MESH BACKGROUND */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-40" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">
          
//           {/* LEFT CONTENT (6 columns) */}
//           <motion.div 
//             className="lg:col-span-6"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-100 uppercase">
//               Global Digital Transformation Partner
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 mb-6">
//               Transforming <br/> Businesses with 
//               <span className="block text-blue-600">Technology & Strategy</span>
//             </h1>

//             <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
//               Spark Vision Consulting modernizes operations and unlocks data-driven insights through 
//               world-class SAP transformation and cloud infrastructure.
//             </p>

//             {/* SPACED GLOBAL EXPERIENCE */}
//             <div className="mb-12">
//               <div className="flex items-center gap-2 text-slate-400 mb-4">
//                 <FiGlobe />
//                 <span className="text-xs font-bold uppercase tracking-widest">Global Project Presence</span>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 {countries.map((c, i) => (
//                   <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl shadow-sm hover:border-blue-400 hover:bg-white transition-all cursor-default">
//                     <span className="text-lg">{c.flag}</span>
//                     <span className="text-sm font-bold text-slate-700">{c.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* BUTTONS & STATS */}
//             <div className="flex flex-col sm:flex-row items-center gap-8">
//               <HashLink
//                 smooth
//                 to="/#contact"
//                 className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-200 transition-all w-full sm:w-auto"
//               >
//                 Request Consultation
//                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </HashLink>

//               <div className="flex gap-8">
//                 <div>
//                   <p className="text-2xl font-black text-slate-900 leading-none">15+</p>
//                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Years Exp.</p>
//                 </div>
//                 <div className="w-[1px] h-8 bg-slate-200" />
//                 <div>
//                   <p className="text-2xl font-black text-slate-900 leading-none">98%</p>
//                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Retention</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: LARGE CLEAN IMAGE (6 columns) */}
//           <motion.div 
//             className="lg:col-span-6 flex flex-col items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="relative w-full">
//                {/* Orbital ring deco */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full -z-10" />

//               <motion.div
//                 animate={{ x: [-10, 10, -10] }} // Gentle drift
//                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
//                   alt="Global Digital Network"
//                   className="w-full h-auto max-h-[500px] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] object-cover ring-8 ring-slate-50"
//                 />

//                 {/* RELOCATED CERTIFIED TAG: BELOW IMAGE AS A FOOTER BAND */}
//                 <div className="mt-6 flex items-center justify-between bg-slate-900 text-white p-5 rounded-3xl shadow-xl w-full">
//                   <div className="flex items-center gap-4">
//                     <div className="bg-blue-600 p-2 rounded-lg">
//                       <FiCheckCircle className="text-white text-xl" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-bold">Certified SAP Partner</p>
//                       <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Enterprise Cloud Experts</p>
//                     </div>
//                   </div>
//                   <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
//                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
//                      <span className="text-[10px] font-bold uppercase tracking-tighter">Global Hub Live</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { HashLink } from "react-router-hash-link";
import { FiGlobe, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  const countries = [
    { name: "Dubai", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "United States", flag: "🇺🇸" },
    { name: "India", flag: "🇮🇳" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-28 pb-20">
      {/* MESH BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT (6 columns) */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-100 uppercase">
              Global Digital Transformation Partner
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 mb-6">
              Transforming <br/> Businesses with 
              <span className="block text-blue-600">Technology & Strategy</span>
            </h1>

            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
              Spark Vision Consulting modernizes operations and unlocks data-driven insights through 
              world-class SAP transformation and cloud infrastructure.
            </p>

            {/* SPACED GLOBAL EXPERIENCE */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <FiGlobe />
                <span className="text-xs font-bold uppercase tracking-widest">Global Project Presence</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {countries.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl shadow-sm hover:border-blue-400 hover:bg-white transition-all cursor-default">
                    <span className="text-lg">{c.flag}</span>
                    <span className="text-sm font-bold text-slate-700">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS & ENHANCED STATS */}
            <div className="flex flex-col sm:flex-row items-center gap-12">
              <HashLink
                smooth
                to="/#contact"
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-200 transition-all w-full sm:w-auto"
              >
                Request Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </HashLink>

              <div className="flex gap-10">
                <div className="relative">
                  <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 leading-none">
                    15+
                  </p>
                  <p className="mt-2 text-[11px] font-extrabold text-blue-600 uppercase tracking-widest">
                    Years Exp.
                  </p>
                </div>
                
                <div className="w-[1.5px] h-14 bg-slate-100 self-center" />

                <div className="relative">
                  <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 leading-none">
                    98%
                  </p>
                  <p className="mt-2 text-[11px] font-extrabold text-blue-600 uppercase tracking-widest">
                    Retention
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: LARGE CLEAN IMAGE (6 columns) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full -z-10" />

              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
                  alt="Global Digital Network"
                  className="w-full h-auto max-h-[500px] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] object-cover ring-8 ring-slate-50"
                />

                {/* CERTIFIED TAG BELOW IMAGE */}
                <div className="mt-6 flex items-center justify-between bg-slate-900 text-white p-5 rounded-3xl shadow-xl w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <FiCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Certified SAP Partner</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Enterprise Cloud Experts</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                     <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-tighter">Global Hub Live</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;