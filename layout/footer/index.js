import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import Ploygon from "assets/footer-icon/ploygon.svg";
import Optimism from "assets/footer-icon/optimism.svg";
import SuperFluid from "assets/footer-icon/super.svg";
import Tabledland from "assets/footer-icon/tableland.svg";
import Graph from "assets/footer-icon/graph.png";
import ENS from "assets/footer-icon/ens.svg";
import IPFS from "assets/footer-icon/IPFS.png";
import PUSH from "assets/footer-icon/push.svg";

const Footer = () => {
  return (
    <footer className={`${style.footer} py-20 relative z-20 `}>
      <div className="container mx-auto">
        <h3 className="text-center emp-text uppercase text-3xl font-bold">
          On the shoulders of giants
        </h3>
        <div className="px-0 md:px-10 mt-16">
          <ul className="flex gap-5 md:gap-10 flex-wrap lg:flex-nowrap  justify-center items-center">
            <li className="basis-full md:basis-5/12	  flex justify-center ">
              <Ploygon />
            </li>
            <li className="basis-full md:basis-5/12	flex justify-center ">
              <Optimism />
            </li>
            <li className="basis-full md:basis-5/12	 flex justify-center">
              <SuperFluid />
            </li>
            <li className="basis-full md:basis-5/12	 flex justify-center">
              <Tabledland />
            </li>
          </ul>
          <ul className="mt-12 md:px-16 justify-center items-center flex gap-5 md:gap-10  	 flex-wrap  lg:flex-nowrap ">
            <li className="basis-full md:basis-5/12	 flex justify-center">
              <Image src={Graph} alt="Not found" />
            </li>
            <li className="basis-full md:basis-5/12	  flex justify-center">
              <ENS />
            </li>
            <li className="basis-full md:basis-5/12	  flex justify-center">
              <Image src={IPFS} alt="Not found" />
            </li>
            <li className="basis-full md:basis-5/12	  flex justify-center">
              <PUSH />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
