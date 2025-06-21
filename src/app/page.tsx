"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import initialLoadingImage from "@/assets/image/animated/animatedLoadingMan.webp";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import SecondPage from "@/components/SecondPage";
import ThirdSection from "@/components/ThirdPage";
const page = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="bg-white">
      {initialLoading ? (
        <div className="flex min-h-screen bg-white justify-center items-center">
          <Image src={initialLoadingImage} alt="Loading"></Image>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <SecondPage/>
          <ThirdSection />
        </>
      )}
    </div>
  );
};

export default page;
