import Image from "next/image";
import React from "react";
import logo from "@/assets/image/logo/logoImage.svg";
import BlodAnimation from "@/assets/lottie/blob.json";
import { Player as Lottie } from "@lottiefiles/react-lottie-player";

const SecondPage = () => {
  return (
    <div className="container relative  mx-auto overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 w-[200%] lg:w-[130%] h-full">
        <Lottie
          src={BlodAnimation}
          background="transparent"
          speed={1}
          loop
          autoplay
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div>
        <div className="flex min-h-screen items-center justify-center ">
          <Image
            src={logo}
            className="w-[170px] lg:w-[650px]  z-[1000]"
            alt="Fluffy Hugs Logo"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
