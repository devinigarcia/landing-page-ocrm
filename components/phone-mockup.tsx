"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PhoneMockupProps = {
  frontImageSrc?: string;
  backImageSrc?: string;
  className?: string;
};

export function PhoneMockup({
  frontImageSrc = "/WhatsApp Image 2025-10-07 at 16.21.22.jpeg",
  backImageSrc = "/WhatsApp Image 2025-10-07 at 16.21.00.jpeg",
  className,
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-full h-full ${className ?? ""}`}>
      {/* Back phone */}
      <motion.div
        className="absolute -right-[6%] bottom-[2%] origin-center"
        style={{ perspective: 1200 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[70%] aspect-[10/19] rounded-[28px] bg-[#111827] shadow-[0_40px_90px_rgba(0,0,0,0.6)] rotate-[-18deg]">
          <div className="absolute inset-[10px] rounded-[26px] overflow-hidden bg-black">
            <Image
              src={backImageSrc}
              alt="Phone back"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Frame shine */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-2 ring-white/25" />
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-24 rounded-b-xl bg-black/80" />
        </div>
      </motion.div>

      {/* Front phone */}
      <motion.div
        className="absolute left-0 top-0 origin-center"
        style={{ perspective: 1200 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[72%] aspect-[10/19] rounded-[28px] bg-[#111827] shadow-[0_40px_90px_rgba(0,0,0,0.7)] rotate-[8deg]">
          <div className="absolute inset-[10px] rounded-[26px] overflow-hidden bg-black">
            <Image
              src={frontImageSrc}
              alt="Phone front"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-2 ring-white/30" />
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-24 rounded-b-xl bg-black/80" />
        </div>
      </motion.div>
    </div>
  );
}
