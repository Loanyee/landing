import React, { useState, useEffect } from "react";
import Header from "layout/header";
import style from "../styles/Home.module.css";
import Hero from "views/home/hero";
import Benefits from "views/home/benefits";
import Explore from "views/home/explore";
import Footer from "layout/footer";
import axios from "axios";
export default function Home() {
  const [loanData, setLoanData] = useState([]);

  async function fetchLoans() {
    const getLoanHistory = async () => {
      const loanHistory = await axios.post(
        "https://api.studio.thegraph.com/query/35243/loanyee/0.3.0",
        {
          query: `
                {
                    loanHistories(first: 6, orderBy: loanId, orderDirection:desc) {
                      id
                      interestRate
                      borrowAmount
                      interestRate
                      paybackMonths
                      borrower
                      loanId
                    }
                }
                `,
        }
      );
      return loanHistory;
    };

    let loanList = await fetch(
      "https://testnet.tableland.network/query?s=SELECT%20*%20FROM%20loan_5_775"
    );
    const data = await loanList.json();
    const loanDataTemp = await getLoanHistory();
    console.log(loanDataTemp);
    console.log(
      "Loan data from the graph returns ",
      loanDataTemp.data.data.loanHistories
    );
    setLoanData(loanDataTemp.data.data.loanHistories);
  }

  useEffect(() => {
    fetchLoans();
    setTimeout(() => {
      console.log("loanData", loanData);
    }, 1000);
  }, []);

  return (
    <div className="overflow-x-hidden	">
      <section className={style.hero_section_wrapper}>
        <Header />
        <Hero />
      </section>
      <section className="bg-slate-50 pt-20">
        <Benefits />
        <Explore loanData={loanData} />
      </section>
      <Footer />
    </div>
  );
}
