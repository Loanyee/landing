import Link from "next/link";
import Image from "next/image";
import LOGO from "../public/image/LogoTwo.png";
import Lonayee from "../public/image/loan.png";
import lonyeeLogo from '../public/image/LonyeeLogo.svg'
import line from "../public/image/lines.png";
import Headline from '../public/image/HeadLine.svg'
import Mid from "../public/image/mid.png";
import On from "../public/image/on.png";
import Circle from "../public/image/Microsoft-circle.png";
import Dollar from "../public/image/Dollar.png";
import inBox from "../public/image/Box.png";
import BorrowerProfile from "../components/borrowerProfile";
import Capture from '../public/image/icons.png';
import Card from "@mui/material/Card";
import fone from '../public/image/FooterLogoone.svg'
import ftwo from '../public/image/FooterLogoTwo.svg'
import fthree from '../public/image/FooterLogoThree.svg'
import ffour from '../public/image/FooterLogoFour.svg'
import Box from "@mui/material/Box";
import footersOne from "../public/image/footersOne.svg"
import footersTwo from "../public/image/footersTwo.svg"
import footersThree from "../public/image/footersThree.svg"
import footersfour from "../public/image/footersfour.svg"
import ESPL from "../public/image/ESPL.svg"
import { theme } from "./theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/useContext";
//import StyleCss from "./assets/index.style";
//import '../pages/assets/main.css'
import ImgOne from '../public/image/bgTwo (1).png'
import ImgTwo from '../public/image/bgTwo (2).png'
// import fone  from '../public/image/fone.png'
// import ftwo from '../public/image/ftwo.png'
// import fthree from '../public/image/fthree.png'
// import ffour from '../public/image/ffour.png'

export default function Home() {

  const profile1 = {

    borrowerAddress: "0x53203942123",
    currency: "USDC",
    value: "25,000",
    maturity: "30 days",
    creditScore: "4",
    salaryHistory: "5 months",
    APR: "15%",
    status: "Active"
  }

  const profile2 = {

    borrowerAddress: "0x35759232432",
    currency: "ETH",
    value: "1.5",
    maturity: "90 days",
    creditScore: "2",
    salaryHistory: "3 months",
    APR: "7%",
    status: "Active"
  }

  const profile3 = {
    borrowerAddress: "0x982032948824",
    currency: "USDC",
    value: "50,000",
    maturity: "30 days",
    creditScore: "2",
    salaryHistory: "9 months",
    APR: "10%",
    status: "Inactive"
  }

  const profile4 = {
    borrowerAddress: "0x9189382013124",
    currency: "USDC",
    value: "120,000",
    maturity: "30 days",
    creditScore: "5",
    salaryHistory: "9 months",
    APR: "12%",
    status: "Active"
  }

  const profile5 = {
    borrowerAddress: "0x84628163732822",
    currency: "ETH",
    value: "2.25",
    maturity: "90 days",
    creditScore: "3",
    salaryHistory: "1 year",
    APR: "5%",
    status: "Active"
  }

  const dataSet = [profile1, profile2, profile3, profile1, profile4, profile5, profile1, profile2, profile4, profile4, profile2, profile3, profile5, profile2, profile5, profile1, profile2, profile3, profile1, profile2, profile3]

  return (
    <>
      <div className="Card">
        <div class="min-h-screen bg-cover">
          <div className="CardDiv">
            <div className="logo" >
              <Image src={lonyeeLogo} width={200} height={40}></Image>
            </div>
            <div class="col mr-5 flex flex-row gap-3 items-center ml-80">
              <div className="launcha">
                <button class="text-white w-40 -ml-8 rounded-full border-1 border-zinc-50 ">
                  Launch App
                </button>
              </div>
              {/* <Link>
            <a></a>
          </Link> */}
            </div>
            <div class="scale-125 modal-title  row container mt-40 ml-24 text-white text-8xl ">
              <span className="Uncollaterized">Uncollateralized lending</span><span class="ml-10"><Image src={line} width={160} height={70}></Image></span>
            </div>
            <div class="scale-125 ml-24 text-8xl mt-2 row container  text-white">
              <span className="basedOn">against your</span>
              <div className="chain">
                <Image src={On} width={650} height={110}></Image>
              </div>
            </div>
            <div class="row container -ml-16 mt-12 mx-auto text-white text-2xl">
              → <span class="ml-4 tracking-widest"> Lend up to 30% APY  </span>
            </div>
            <div class="row container -ml-16 mt-4 mx-auto text-white text-2xl">
              → <span class="ml-4 tracking-widest">Borrow from 10% APR</span>
            </div>

            {/* <button class=" bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white w-40 h-12 rounded-full mt-10 border-2 border-solid-zinc-500 md:border-none">
              Launch App
            </button> */}
            <div className="launcha2">
                <button class="text-white w-40 -ml-8 rounded-full border-1 border-zinc-50 ">
                  Launch App
                </button>
              </div>

            <div className="mid">
              <Image src={Mid}></Image>
            </div>
            <div className="how">
              <div>
                <div class="row container mt-12 mx-auto text-white text-8xl font-medium">
                  How it works
                </div>
              </div>
              <div>
                <div class="row container mt-12 mx-auto text-white text-xl font-thin ml-3">
                  We enable the Uncollaterized loan by splitting the salary
                  streaming on <br />
                </div>
              </div>
              <div class="row container mx-auto text-white text-xl -mt-1 ml-10- font-thin">
                Superfluid from the employer to the borrower or lender.
              </div>
            </div>
            <div class='grid grid-rows-3 grid-flow-col gap-4'>
              <div className="circle">
                <Image src={Circle} width={80} height={80}></Image>
                <div class="row-span-3 ... text-white text-xl mt-6">
                  Borrower reveals their credit score
                  <br />
                  on RociFi and the salary history,
                  <br />
                  and set the loan conditions
                </div>
              </div>
            </div>
            <div className="dollar">
              <Image src={Dollar} width={80} height={80}></Image>
              <div class="row-span-3 ... text-white text-xl mt-6">
                Borrower asks employer to
                <br />
                approve the transaction to change
                <br />
                the destination of the salary
                <br />
                streaming from borrower's address
                <br />
                to the lending contract's address.
              </div>
            </div>
            <div className="box">
              <Image src={inBox} width={80} height={80}></Image>
              <div class="row-span-3 ... text-white text-xl text-normal mt-6">
                Lender selects the borrower to
                <br />
                lend, based on their credit score,
                <br />
                APY etc... and once they lend, the
                <br />
                salary stream will be split to the
                <br />
                borrower and the lender.
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-slate-200">
          {/* Header */}
          <div>
            <header class="img-fluid flex justify-between align-middle py-4 px-8 border-b-1  border-grey-200">
              <div class=" text-8xl font-medium font-Neue Montreal mt-8 ml-52">Benefits</div>
              <div class="mr-96 mt-20">  <Image src={Headline} width={1000} height={3}></Image> </div>
            </header>
            {/* Banner */}
            {/* Categories */}
            <div class="ml-56 mt-10">
              <div class="flex ">
                <div class=""> <Image src={ImgTwo} width={650} height={610}></Image></div>
                <div class=" ml-40"><Image src={ImgOne} width={650} height={610}></Image></div>
              </div>
            </div>

            <div className="img_sectionsec" >
              <div style={{ paddingTop: "305px" }}>
                <div style={{ paddingTop: "50px" }} >
                  <h2 class="tracking-wider text-center font-bold text-6xl mt-2">Explore</h2>
                  <h2 class="tracking-wider text-center font-bold text-6xl">borrowers</h2>
                </div>
                <div className="CardDiv">
                  <Card className="card">
                    <div class="overflow">
                      <div class="container font-bold ml-1 mt-5 mx-11 px-4 py-5 grid grid-cols-12 justify-between text-lg text-stone-500 items-center">
                        <div class="col-span-2 ml-5 brwsr">Borrower</div>
                        <div class="col-span- 2 ml-0 vlue ">Value</div>
                        <div class="col-span-2  ml-24  mturty">Maturity</div>
                        <div class="col-span-2 ml-12 crdt">Credit Score</div>
                        <div class="col-span-2 ml-12 slry">Salary History</div>
                        <div class="col-span-2 ml-12 last ap">APR</div>
                        <div class="col-span-1 stts -ml-10">Status</div>
                      </div>
                      <hr />
                      {/* Borrowers List */}
                      <div className="cardItem" class="container mx-auto  h-80 overflow-auto mt-20">
                        {dataSet.map((borrower, index) => {
                          return (<>
                            <Box className="BoxHeight">
                              <BorrowerProfile index={index} data={borrower} class="cardItem" />
                            </Box>
                          </>
                          )
                        }
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div class="w-auto h-96 bg-gray-900">
                <div className="img_section2">
                  <div class="inline-block mt-20 -ml-36">
                    <p class=" tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300  ml-36 font-bold text-xl" className="footerPara">ON THE SHOULDERS OF GIANTS</p>
                  </div>
                  <div></div>
                  <div class="flex -ml-80">
                    <div class="mr-12 mt-20"><Image src={ffour} width={200} height={40}></Image></div>
                    <div class="mr-12 mt-20"> <Image src={fthree} width={200} height={40}></Image></div>
                    <div class="mr-12  mt-20"><Image src={ftwo} width={200} height={40}></Image></div>
                    <div class="mr-12 mt-20"> <Image src={fone} width={200} height={40}></Image></div>
                  </div>
                  <div class="flex -ml-96">
                    <div className="image" class="mr-12 ml-36 mt-10"><Image src={footersOne} width={150} height={70}></Image></div>
                    <div className="image3" class="mt-10 ml-20"><Image src={footersThree} width={150} height={70}></Image></div>
                    <div className="image" class="mr-12 mt-10 ml-20" >
                      <div class="flex">
                        <div class="mr-12 mt-2 -ml-10"> <Image src={footersfour} width={70}></Image> </div>
                        <div class="mr-12 -ml-20"><Image src={footersTwo} width={150} height={70} class="-ml-10"></Image></div>
                      </div>
                    </div>
                    <div className="image2">
                      <p class="ml-2 mt-10"><Image src={ESPL} width={150} height={70}></Image></p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
