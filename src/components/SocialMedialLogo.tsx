import Image from "next/image";
import React from "react";
import discordLogo from "@/assets/image/socail/discord.svg";
import twitterLogo from "@/assets/image/socail/twitter.svg";
import openseaLogo from "@/assets/image/socail/opensea.svg";

const SocialMediaLogo = () => {
  return (
    <div className="fixed flex w-10 gap-5 left-10 bottom-8 z-[100]">
      <Image
        src={discordLogo}
        className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
        alt="discordLogo"
      />
      <Image
        src={openseaLogo}
        className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
        alt="openseaLogo"
      />
      <Image
        src={twitterLogo}
        className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
        alt="twitterLogo"
      />
    </div>
  );
};

export default SocialMediaLogo;
