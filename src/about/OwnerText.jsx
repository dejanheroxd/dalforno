import React from "react";
import { motion } from "framer-motion";

export default function OwnerText() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="pt-8 text-xl italic pb-10"
      >
        "Το Al Dente σε κάνει να χαμογελάς"
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="w-80 lg:w-[440px] lg:text-lg"
      >
        Η δημιουργία πίτσας είναι μια τέχνη. Κάθε συστατικό συνδυάζεται
        αρμονικά, δημιουργώντας ένα συναίσθημα γεύσης. Δεν είναι απλά φαγητό,
        είναι μια εμπειρία. Κάθε κομμάτι λέει μια ιστορία, ανάβοντας τις
        αισθήσεις με ευχαρίστηση. Έλα μαζί μου σε αυτό το γαστρονομικό ταξίδι.
      </motion.p>
    </div>
  );
}
