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
        {/* Lettre M */}
        <motion.path
          d="M50 250 L50 50 L100 150 L150 50 L150 250"
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

        {/* Lettre A */}
        <motion.path
          d="M200 250 L250 50 L300 250 M225 150 L275 150"
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

        {/* Lettre Y */}
        <motion.path
          d="M350 50 L400 150 L350 250 M400 150 L450 50"
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

        {/* Apostrophe ' */}
        <motion.path
          d="M500 70 L510 50"
          strokeWidth="5"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeInOut" },
            fill: { duration: 1.5, ease: "easeInOut" },
          }}
          fill="none"
          stroke="#1f8d93"
        />

        {/* Lettre S */}
        <motion.path
          d="M550,50 
     C500,50 500,150 550,150 
     C600,150 600,250 550,250"
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
      </motion.svg>
    </AnimatePresence>
  );
}
