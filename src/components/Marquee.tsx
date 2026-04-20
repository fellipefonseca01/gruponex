import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const parts = ["Criamos o seu ", { bold: "Site" }, " ou ", { bold: "Landing Page" }, " com design exclusivo"] as const;
const items = Array.from({ length: 8 });

const Marquee = () => {
  return (
    <div className="relative border-y border-border bg-secondary/40 py-4 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {items.concat(items).map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                {parts.map((p, idx) =>
                  typeof p === "string" ? (
                    <span key={idx}>{p}</span>
                  ) : (
                    <strong key={idx} className="font-bold text-primary">{p.bold}</strong>
                  )
                )}
              </span>
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
