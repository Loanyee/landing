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
          <ul className="flex gap-5 md:gap-10 md:flex-nowrap	 flex-wrap justify-center items-center">
            <li className="basis-full sm:basis-5/12	 md:basis-1/3 flex justify-center sm:block">
              <Ploygon />
            </li>
            <li className="basis-full sm:basis-5/12		md:basis-1/3 flex justify-center sm:block">
              <Optimism />
            </li>
            <li className="basis-full sm:basis-5/12	md:basis-1/3 flex justify-center sm:block">
              <SuperFluid />
            </li>
            <li className="basis-full sm:basis-5/12	md:basis-1/3 flex justify-center sm:block">
              <Tabledland />
            </li>
          </ul>
          <ul className="mt-12 md:px-16 justify-center items-center flex gap-5 md:gap-10 md:flex-nowrap	 flex-wrap  ">
            <li className="basis-full sm:basis-5/12	 md:basis-1/3 flex justify-center sm:block">
              <Image src={Graph} />
            </li>
            <li className="basis-full sm:basis-5/12	 md:basis-1/3 flex justify-center sm:block">
              <ENS />
            </li>
            <li className="basis-full sm:basis-5/12	 md:basis-1/3 flex justify-center sm:block">
              <Image src={IPFS} />
            </li>
            <li className="basis-full sm:basis-5/12	 md:basis-1/3 flex justify-center sm:block">
              <PUSH />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
