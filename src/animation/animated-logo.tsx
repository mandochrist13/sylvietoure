import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedSylvie() {
  const letterVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-full fill-accent stroke-accent"
      >
        {/* Lettre S */}
        <motion.path
          d="M225,50 
             C150,50 150,150 225,150 
             C300,150 300,250 225,250 
             C150,250 150,350 225,350"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3.5, ease: "easeInOut" },
            fill: { duration: 3.5, ease: [1, 0, 0.8, 1] },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre Y */}
        <motion.path
          d="M300 50 L350 150 L300 250 M350 150 L400 50"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3.5, ease: "easeInOut" },
            fill: { duration: 3.5, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre L */}
        <motion.path
          d="M450 50 L450 250 L500 250"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
            fill: { duration: 2.5, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre V */}
        <motion.path
          d="M550 50 L600 250 L650 50"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3.5, ease: "easeInOut" },
            fill: { duration: 3.5, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre I */}
        <motion.path
          d="M700 50 L700 250"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
            fill: { duration: 2.5, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre E */}
        <motion.path
          d="M750 50 L750 250 L800 250 M750 150 L800 150 M750 50 L800 50"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.8, ease: "easeInOut" },
            fill: { duration: 2.8, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />
      </motion.svg>
    </AnimatePresence>
  );
}
