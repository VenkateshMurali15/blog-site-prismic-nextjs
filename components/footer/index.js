import React from "react";
import Image from "next/dist/client/image";

function Footer() {
  return (
    <div className="bg-primary-shade0 p-6 mt-5">
      <div className="grid">
        <p className="text-text-white">Follow Me on</p>
        <div className="mt-3 flex gap-3">
          <div className="w-6 h-6">
            <Image src="/instagram.png" width={24} height={24} alt="" />
          </div>

          <div className="w-6 h-6">
            <Image src="/facebook.png" width={24} height={24} alt="" />
          </div>
          <div className="w-6 h-6">
            <Image src="/discord.png" width={24} height={24} alt="" />
          </div>
          <div className="w-6 h-6">
            <Image src="/youtube.png" width={24} height={24} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
