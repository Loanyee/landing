import Img1 from "assets/icons/1.png";
import Img2 from "assets/icons/2.png";
import Img3 from "assets/icons/3.png";
import Img4 from "assets/icons/4.png";
import Img5 from "assets/icons/5.png";
import Img6 from "assets/icons/6.png";
export const data = [
  {
    borrowerAddress: "0x53203942123",
    currency: "USDC",
    value: "25,000",
    maturity: "30 days",
    creditScore: "4",
    salaryHistory: "5 months",
    APR: "15%",
    status: "Active",
    icon: Img1,
    valueType: "USDC",
  },
  {
    borrowerAddress: "0x35759232432",
    currency: "ETH",
    value: "1.5",
    maturity: "90 days",
    creditScore: "2",
    salaryHistory: "3 months",
    APR: "7%",
    status: "Active",
    icon: Img2,
    valueType: "ETH",
  },
  {
    borrowerAddress: "0x982032948824",
    currency: "USDC",
    value: "50,000",
    maturity: "30 days",
    creditScore: "2",
    salaryHistory: "9 months",
    APR: "10%",
    status: "Active",
    icon: Img3,
    valueType: "USDC",
  },
  {
    borrowerAddress: "0x9189382013124",
    currency: "USDC",
    value: "120,000",
    maturity: "30 days",
    creditScore: "5",
    salaryHistory: "9 months",
    APR: "12%",
    status: "Active",
    icon: Img4,
    valueType: "USDC",
  },
  {
    borrowerAddress: "0x84628163732822",
    currency: "ETH",
    value: "2.25",
    maturity: "90 days",
    creditScore: "3",
    salaryHistory: "1 year",
    APR: "5%",
    status: "Active",
    icon: Img5,
    valueType: "ETH",
  },
  {
    borrowerAddress: "0x84628163732822",
    currency: "ETH",
    value: "2.25",
    maturity: "90 days",
    creditScore: "3",
    salaryHistory: "1 year",
    APR: "5%",
    status: "Active",
    icon: Img5,
    valueType: "MATIC",
  },
];

export const columns = [
  {
    id: 1,
    label: "Borrower",
  },
  {
    id: 2,
    label: "Loan Value",
  },
  {
    id: 3,
    label: "Duration",
  },
  {
    id: 4,
    label: "Interest Rate",
  },
  {
    id: 5,
    label: "Status",
  },
];
