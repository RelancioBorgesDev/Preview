import { motion } from "framer-motion";

export default function AnimatedTriangle() {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-fixed fixed"
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 180 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient
          id="triangle-gradient"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22222" stopOpacity=".8"></stop>
          <stop offset="1" stopColor="#ffff" stopOpacity=".8"></stop>
        </linearGradient>
      </defs>
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100 10 L190 190 H10 Z"
        fill="url(#triangle-gradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
