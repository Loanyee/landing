import React from "react";
import Borrower from "../../assets/borrower.svg";
import Lenders from "../../assets/lenders.svg";
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
      <div className="bg-white rounded shadow-sm p-10 relative card-wrapper">
        <h3 className="text-center font-semibold text-3xl mb-3">Borrowers</h3>
        <p className="text-center font-medium text-lg">
          Instant fund with uncollateralized loan by <br /> sharing the future
          salary to the lender
        </p>
        <div className="absolute card-img-left">
          <Borrower />
        </div>
      </div>
      <div className="bg-white rounded shadow-sm p-10 relative card-wrapper">
        <h3 className="text-center font-semibold text-3xl mb-3">Lenders</h3>
        <p className="text-center font-medium text-lg">
          Higher APY up to 30% <br /> than overcollateralized lending protocol
        </p>
        <div className="absolute card-img-right">
          <Lenders />
        </div>
      </div>
    </div>
  );
};

export default Card;
