import React from "react";
import Logo from "assets/logo.svg";
import Button from "components/button";

const Header = () => {
  return (
    <header className="container-fluid mx-auto py-4 flex justify-between">
      <div className="flex items-center">
        <Logo />
        <span className=" text-3xl md:text-5xl ml-2 text-white">Loanyee</span>
      </div>
      <div>
        <Button title="Launch app" />
      </div>
    </header>
  );
};

export default Header;
