import React from "react";
import Image from "next/image";
import Logo from "../../../assets/logo-xl.svg";
import Arrow from "../../../assets/arrow.svg";
import Circel from "../../../assets/circel-line.svg";
import Dollar from "../../../assets/dollar.svg";
import Line from "../../../assets/line.svg";
import Button from "../../../components/button";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


const Hero = () => {
  return (
    <section className=" mx-auto pt-16 pb-24">
      <div className="container mx-auto">
        <div className="hero-content">
          <div>
            <div className="flex items-center">
              <h1
                className="text-white xl:text-8xl lg:text-6xl text-4xl	inline"
                style={{ marginRight: "30px" }}
              >
                Uncollateralized lending
              </h1>
              <div className="mt-7 hidden md:inline">
                <Logo />
              </div>
            </div>

            <h1 className="text-white xl:text-8xl lg:text-6xl  text-4xl ">
              against your <span className="emp-text">on-chain salary</span>
            </h1>
          </div>
          <ul className="list-none my-10">
            <li className="text-white text-xl flex items-center mb-5">
              <Arrow />
              <span className="inline-block ml-5">Lend up to 30% APY</span>
            </li>
            <li className="text-white text-xl flex items-center mb-5">
              <Arrow />
              <span className="inline-block ml-5">Borrow from 10% APR</span>
            </li>
          </ul>
          <Button title="Launch app" onClick={() => openInNewTab("https://app.loanyee.xyz")} />
        </div>
      </div>
      <div className="curv-bg-wrapper">
        <div className="pt-28 pb-16 md:pb-28 relative z-10">
          <h1 className="text-white text-center text-5xl md:text-7xl mb-4 font-normal md:font-medium">
            How it Works
          </h1>
          <p className="text-center text-base text-gray-400 font-normal	">
            We enable the uncollateralized loan by splitting the salary
            streaming on <br />
            Superfluid from the employer to the borrower and lender.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20  lg:gap-52">
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
