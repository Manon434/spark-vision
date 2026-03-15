
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

//             {/* BUTTONS & ENHANCED STATS */}
//             <div className="flex flex-col sm:flex-row items-center gap-12">
//               <HashLink
//                 smooth
//                 to="/#contact"
//                 className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-200 transition-all w-full sm:w-auto"
//               >
//                 Request Consultation
//                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </HashLink>

//               <div className="flex gap-10">
//                 <div className="relative">
//                   <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 leading-none">
//                     5+
//                   </p>
//                   <p className="mt-2 text-[11px] font-extrabold text-blue-600 uppercase tracking-widest">
//                     Years Exp.
//                   </p>
//                 </div>
                
//                 <div className="w-[1.5px] h-14 bg-slate-100 self-center" />

//                 <div className="relative">
//                   <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 leading-none">
//                     98%
//                   </p>
//                   <p className="mt-2 text-[11px] font-extrabold text-blue-600 uppercase tracking-widest">
//                     Retention
//                   </p>
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
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full -z-10" />

//               <motion.div
//                 animate={{ x: [-10, 10, -10] }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
//                   alt="Global Digital Network"
//                   className="w-full h-auto max-h-[500px] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] object-cover ring-8 ring-slate-50"
//                 />

//                 {/* CERTIFIED TAG BELOW IMAGE */}
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
import { FiGlobe, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  const countries = [
    { name: "Dubai", flag: "🇦🇪" },
    { name: "Sharjah", flag: "🇦🇪" },
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
              {/* Outer orbit ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] border border-slate-100 rounded-full -z-10" />
              
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" 
                  alt="Global Digital Network"
                  className="w-full h-auto max-h-[550px] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] object-cover ring-8 ring-slate-50"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;