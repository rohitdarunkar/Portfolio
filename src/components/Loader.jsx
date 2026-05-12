import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[#020617]
          "
        >
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-7xl
                md:text-8xl
                font-black
                tracking-tight
              "
            >
              Rohit
              <span className="text-pink-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                text-gray-400
                tracking-[6px]
                text-sm
                mt-4
              "
            >
              MERN STACK DEVELOPER
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}