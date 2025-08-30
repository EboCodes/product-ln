import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 font-bold text-xl sm:text-2xl mt-6"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut",
      }}
    >
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center bg-midnight px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/50 transition-all"
        >
          <span className="text-3xl sm:text-4xl text-gold drop-shadow-md">
            {value ?? "0"}
          </span>
          <span className="uppercase text-xs sm:text-sm text-slate-200">
            {unit}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Countdown;
