import React from "react";
import { motion } from "framer-motion";
import catAni from "@/assets/image/cat/catImage.webp";
import Image from "next/image";

const CatImageElement = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <div
      className={`fixed top-3 lg:top-10 right-1 lg:right-10 duration-500  scale-0 z-[1000] ${
        scrollPosition > 1500 ? "scale-100" : ""
      }`}
    >
      <motion.div
        style={{ transformOrigin: "top" }}
        animate={{ rotate: [30, -30, 30, -30] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Image src={catAni} alt="Test" width={150} height={150} />
      </motion.div>
    </div>
  );
};

export default CatImageElement;
