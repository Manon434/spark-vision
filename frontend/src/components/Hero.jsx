

import ThreeScene from "./ThreeScene"
import Particles from "./Particles"

function Hero() {

  return (
<section className="pt-36 pb-28 relative overflow-hidden bg-gradient-to-r from-teal-50 via-white to-white">

      {/* floating particles */}
      <Particles />

      <div className="container-main grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE - 3D MODEL */}

        <div className="flex justify-center">
          <ThreeScene />
        </div>

        {/* RIGHT SIDE - TEXT */}

        <div>

          <p className="uppercase text-sm tracking-[4px] text-teal-500 mb-4">
            SPARK VISION CONSULTING
          </p>

          <h1 className="text-[72px] leading-[80px] font-bold text-gray-900">

            ARCHITECTING<br/>

            YOUR
            <span className="text-teal-500"> DIGITAL</span><br/>

            FUTURE.

          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">

            Strategic Enterprise IT Consulting,
            SAP Solutions, Cloud Migration,
            and Advanced Data Analytics.

          </p>

          {/* <div className="mt-10 flex gap-4">

            <a
              href="#solutions"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              EXPLORE SOLUTIONS →
            </a>

            <a
              href="#contact"
              className="border border-gray-300 px-8 py-4 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
            >
              Talk to an Expert
            </a>

          </div> */}
          <div className="mt-10 flex gap-4">

  <a
    href="#solutions"
    className="relative px-8 py-4 rounded-xl font-semibold text-white
    bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
    shadow-[0_8px_30px_rgba(255,120,0,0.4)]
    hover:scale-105 transition"
  >
    EXPLORE SOLUTIONS →
  </a>

  <a
    href="#contact"
    className="border border-gray-300 px-8 py-4 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
  >
    Talk to an Expert
  </a>

</div>

        </div>

      </div>

    </section>

  )

}

export default Hero