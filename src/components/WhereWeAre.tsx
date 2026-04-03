import { motion } from "framer-motion";

const WhereWeAre = () => {
  return (
    <section id="onde-estamos" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">
            Localização
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Onde estamos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <svg
              viewBox="0 0 600 700"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Brazil outline simplified */}
              <path
                d="M290 50 L350 55 L400 70 L440 60 L480 75 L500 100 L510 130
                   L520 160 L530 180 L540 200 L545 230 L540 260 L530 290
                   L520 310 L510 330 L500 350 L490 370 L480 390 L460 420
                   L440 440 L420 460 L400 475 L380 490 L360 500 L340 510
                   L320 520 L300 530 L280 540 L260 550 L240 555 L220 550
                   L200 540 L180 525 L165 510 L155 490 L150 470 L140 450
                   L130 430 L120 400 L110 370 L105 340 L100 310 L95 280
                   L90 250 L100 220 L110 200 L120 180 L130 160 L140 140
                   L160 120 L180 100 L200 85 L220 70 L240 60 L260 52 Z"
                className="fill-muted stroke-border"
                strokeWidth="1.5"
              />

              {/* Minas Gerais highlighted */}
              <path
                d="M310 300 L340 290 L370 295 L390 310 L400 330 L395 355
                   L380 375 L360 385 L340 390 L320 385 L300 375 L285 360
                   L280 340 L285 320 L295 305 Z"
                className="fill-primary/20 stroke-primary"
                strokeWidth="2"
              />

              {/* Divinópolis dot */}
              <motion.circle
                cx="335"
                cy="340"
                r="5"
                className="fill-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              />

              {/* Pulsing ring */}
              <motion.circle
                cx="335"
                cy="340"
                r="5"
                className="stroke-primary fill-none"
                strokeWidth="2"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />

              {/* City label */}
              <text
                x="348"
                y="336"
                className="fill-foreground text-[11px] font-semibold"
              >
                Divinópolis
              </text>
              <text
                x="348"
                y="350"
                className="fill-muted-foreground text-[9px]"
              >
                Minas Gerais
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeAre;
