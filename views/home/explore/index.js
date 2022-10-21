import React from "react";
import { columns, data } from "./data";
import Image from "next/image";
import USDC from "assets/icons/usdc.svg";
import ETH from "assets/icons/eth.svg";
import Matic from "assets/icons/matic.svg";

const shortenAddress = (str) => {
  return str.substring(0, 5) + "..." + str.substring(str.length - 3);
};
const Explore = () => {
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
            style={{ maxWidth: "1080px" }}
          >
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  {columns.map((col) => {
                    return (
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
                {data.map((item, index) => {
                  const { valueType } = item;
                  return (
                    <tr class="border-b" key={index}>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center gap-2">
                          <Image src={item.icon} />
                          {shortenAddress(item.borrowerAddress)}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex gap-2">
                          {valueType == "USDC" ? (
                            <USDC />
                          ) : valueType == "ETH" ? (
                            <ETH />
                          ) : (
                            <Matic />
                          )}
                          {item.value}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.maturity}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.creditScore}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.salaryHistory}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.APR}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500">
                        {item.status}
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
