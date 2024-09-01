/*import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function TextAnimation() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [isPassionnee, setIsPassionnee] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPassionnee(!isPassionnee);
    }, 2000); // Changez l'intervalle en ms pour ajuster la vitesse

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <p>
        Développeuse front-end
        <br />
        {isPassionnee ? "passionnée" : "freelance"}
      </p>
    </motion.div>
  );
}

export default TextAnimation;*/
/*import { useState, useEffect } from "react";

function TextAnimation() {
  const [isPassionnee, setIsPassionnee] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPassionnee(!isPassionnee);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        Développeuse front-end
        <br />
        {isPassionnee ? "passionnée" : "freelance"}
      </p>
    </div>
  );
}
export default TextAnimation;*/
