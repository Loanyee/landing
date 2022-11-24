import React from "react";
import Logo from "assets/logo.svg";
import Button from "components/button";
import { openInNewTab } from "utils/openNewTab";

const Header = () => {
  return (
    <header className="container-fluid mx-auto py-4 flex justify-between">
      <div className="flex items-center">
        <Logo />
      </div>
      {/* <div>
        <Button
          title="Launch app"
          onClick={() => openInNewTab("https://app.loanyee.xyz")}
        />
      </div> */}
    </header>
  );
};

export default Header;
