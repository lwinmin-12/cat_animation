"use client";
import Image from "next/image";
import SocialMediaLogo from "./SocialMedialLogo";
import HomeAnimation from "@/assets/lottie/BordFix.json";
import MobileHomeAnimation from "@/assets/lottie/BordFix1.json";

import WalkingPerson from "@/assets/lottie/walkingPerson.json";

import viewCollectionImage from "@/assets/image/socail/viewCollection.svg";
import { useEffect, useState } from "react";
import CatImageElement from "./CatSlide";

import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const maxScrollDelta = windowSize.width < 768 ? 1000 : 2100;

  const rotateStyle = {
    transform: `rotate(${scrollPosition / 10}deg)`,
  };

  const loadingManStyle = {
    transform:
      scrollPosition > (windowSize.width < 768 ? 800 : 1300)
        ? `translateY(${windowSize.width < 768 ? 100 : 200}px) scale(${
            windowSize.width < 768 ? 1.5 : 2
          }) translateX(0px) rotate(0deg)`
        : scrollPosition >= (windowSize.width < 768 ? 300 : 500)
        ? `translateY(${windowSize.width < 768 ? 100 : 180}px) scale(${
            windowSize.width < 768 ? 2 : 3
          }) rotate(-90deg)`
        : "scale(1)",
    transition: "transform 0.8s ease-out",
  };

  const logoStyle = {
    opacity:
      scrollPosition <= 2200
        ? Math.max(0, Math.min(1, (scrollPosition - 300) / 200))
        : Math.max(0, Math.min(1, 0 / scrollPosition)),
    transition: "opacity 1s",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      const scrollDelta = currentScrollPosition - scrollPosition;

      const newScrollPosition =
        scrollDelta > 0
          ? Math.min(scrollPosition + maxScrollDelta, currentScrollPosition)
          : Math.max(scrollPosition - maxScrollDelta, currentScrollPosition);

      setScrollPosition(newScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <main className="relative min-h-[65vh] lg:min-h-screen bg-white overflow-hidden">
      {/* backgroud image */}

      {windowSize.width < 768 ? (
        <div className=" inset-0 z-0 w-fu">
          <Lottie
            src={MobileHomeAnimation}
            background="transparent"
            speed={1}
            loop
            autoplay
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 z-0  lg:w-full lg:h-full w-[150%] h-[150%]">
          <Lottie
            src={HomeAnimation}
            background="transparent"
            speed={1}
            loop
            autoplay
            className="w-full h-full object-cover"
          />
        </div>
      )}
          <CatImageElement scrollPosition={scrollPosition} />


      {/* View collection button */}
      <div className="fixed -right-3 lg:-right-3 -bottom-6 lg:-bottom-20 z-[222] cursor-pointer">
        <Image
          className="w-[150px] lg:w-[225px]"
          src={viewCollectionImage}
          alt="viewCollectionImage"
        />
      </div>
      <div className="fixed lg:right-4 right-3 text-sm bottom-5 cursor-pointer tracking-[2px] lg:tracking-[6px] z-[333]">
        <p className="text-white text-[12px]">view collection</p>
      </div>

      {/* Social icons */}
      <SocialMediaLogo />

      <div className="fixed z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Lottie
          src={WalkingPerson}
          speed={1}
          loop
          autoplay
          className="w-[200px]"
          style={{ ...logoStyle, ...rotateStyle, ...loadingManStyle }}
        />
      </div>
    </main>
  );
}
