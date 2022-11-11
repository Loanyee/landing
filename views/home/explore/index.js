import React from "react";
import { columns, data } from "./data";
import Image from "next/image";
import USDC from "assets/icons/usdc.svg";
import DAI from "assets/icons/dai.svg";
import ETH from "assets/icons/eth.svg";
import Matic from "assets/icons/matic.svg";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"; //Randomly generated profiles

const shortenAddress = (str) => {
  return str.substring(0, 5) + "..." + str.substring(str.length - 3);
};
const Explore = ({ loanData }) => {
  return (
    <div className="mx-auto curv-bg-wrapper-white">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-medium text-center">
          Explore <br />
          borrowers
        </h1>
        <div className="container mx-auto">
          <div
            class="overflow-auto mt-16 mx-auto rounded shadow-md"
            style={{ maxWidth: "1080px", maxHeight: "500px" }}
          >
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  {columns.map((col) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-500 px-6 py-4 text-left"
                        id={col.id}
                      >
                        {col.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {loanData.map((item, index) => {
                  return (
                    <tr class="border-b" key={index}>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center gap-2">
                          {/* <Image src={item.icon} /> */}
                          <Jazzicon
                            diameter={50}
                            seed={jsNumberForAddress(item.borrower)}
                          />
                          {shortenAddress(item.borrower)}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex gap-2">
                          {item.currency == "USDC" && (
                            <USDC width="2rem"></USDC>
                          )}
                          {item.currency == "ETH" && <ETH width="2rem"></ETH>}
                          <DAI />
                          {(item.borrowAmount / 1000000000000000000).toFixed(
                            0
                          )}{" "}
                          DAI
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.paybackMonths} months
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.interestRate}%
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex gap-2 items-center">
                          <div className="w-5 h-5 rounded-full bg-green-400" />
                          <span>Active</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
