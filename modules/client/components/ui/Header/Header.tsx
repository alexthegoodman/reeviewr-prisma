import * as React from "react";

import { Alignment, Navbar } from "@blueprintjs/core";
import { HeaderProps } from "./Header.d";

const Header: React.FC<HeaderProps> = ({
  ref = null,
  className = "",
  leftElements = <></>,
  rightElements = <></>,
}) => {
  return (
    <header className="headerWrapper">
      <Navbar className={`header ${className}`} fixedToTop={true}>
        <Navbar.Group align={Alignment.LEFT}>{leftElements}</Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>{rightElements}</Navbar.Group>
      </Navbar>
    </header>
  );
};

export default Header;
