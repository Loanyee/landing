import React from "react";
import Image from "next/image";
import Logo from "../../../assets/logo-xl.svg";
import Arrow from "../../../assets/arrow.svg";
import Circel from "../../../assets/circel-line.svg";
import Dollar from "../../../assets/dollar.svg";
import Line from "../../../assets/line.svg";
import Button from "../../../components/button";
import { openInNewTab } from "utils/openNewTab";

const Hero = () => {
  return (
    <section className=" mx-auto pt-16 pb-24">
      <div className="container mx-auto">
        <div className=" relative z-50 pl-0  md:pl-24	">
          <div>
            <div className="flex items-center">
              <h1 className="text-white xl:text-7xl lg:text-5xl text-3xl  mr-0 md:mr-6	inline font-normal md:font-medium">
                Lending protocol against
              </h1>
              <div className=" hidden md:inline brand-logo ">
                <Logo />
              </div>
            </div>

            <h1 className="text-white xl:text-7xl lg:text-5xl  text-3xl  font-normal md:font-medium">
              your salary stream with
              <span className="emp-text"> Superfluid</span>
            </h1>
          </div>
          <ul className="list-none my-10">
            <li className="text-white text-xl flex items-center mb-5">
              <Arrow />
              <span className="inline-block ml-5">Lend up to 20% APY</span>
            </li>
            <li className="text-white text-xl flex items-center mb-5">
              <Arrow />
              <span className="inline-block ml-5">Borrow from 10% APR</span>
            </li>
          </ul>
          {/* <Button
            title="Launch app"
            onClick={() => openInNewTab("https://app.loanyee.xyz")}
          /> */}
          {/* hide the button so far */}
        </div>
      </div>
      <div className="curv-bg-wrapper">
        <div className="pt-28 pb-16 md:pb-28 relative z-10">
          <h1 className="text-white text-center xl:text-7xl lg:text-5xl  text-3xl  mb-4 font-normal md:font-medium">
            How it Works
          </h1>
          <p
            className="text-center text-base text-gray-400 font-normal	mx-auto"
            style={{ maxWidth: "600px" }}
          >
            We enable the uncollateralized loan by splitting the salary
            streaming on Superfluid from the employer to the borrower and
            lender.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20  lg:gap-52 pl-0  md:pl-24">
            <div>
              <Circel />
              <p className="text-base text-gray-300 font-normal mt-8">
                Borrowers set their loan conditions like the amount or duration
                they want to borrow. we limit it with 50% DTI (debt-to-income
                ratio) as maximum.
              </p>
            </div>
            <div>
              <Dollar />
              <p className="text-base text-gray-300 font-normal mt-8">
                Borrowers ask employers to change the destination of their
                salary stream, from their wallet address to our contract
                address.
              </p>
            </div>
            <div>
              <Line />
              <p className="text-base text-gray-300 font-normal mt-8">
                Once lenders deploy the loan to borrowers, the salary stream
                will be automatically split to borrowers and lenders, depending
                on the loan condition and interest rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
