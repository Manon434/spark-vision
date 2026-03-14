import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="flex items-center gap-2">

      <motion.svg
        width="220"
        height="70"
        viewBox="0 0 500 150"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        {/* Spark text */}
        <text
          x="10"
          y="60"
          fontSize="60"
          fontWeight="bold"
          fill="#0f4c75"
          fontFamily="Arial"
        >
          Spark
        </text>

        {/* Vision text */}
        <text
          x="120"
          y="110"
          fontSize="60"
          fontWeight="bold"
          fill="#2563eb"
          fontFamily="Arial"
        >
          Vision
        </text>

        {/* Consulting text */}
        <text
          x="140"
          y="140"
          fontSize="20"
          fill="#6b7280"
          fontFamily="Arial"
          letterSpacing="5"
        >
          CONSULTING
        </text>

        {/* Shooting star */}
        <motion.circle
          cx="430"
          cy="20"
          r="6"
          fill="#facc15"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Star trail */}
        <path
          d="M300 40 Q380 0 430 20"
          stroke="#facc15"
          strokeWidth="3"
          fill="none"
        />

      </motion.svg>

    </div>
  );
}

export default Logo;