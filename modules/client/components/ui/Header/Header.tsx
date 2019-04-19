import * as React from "react";

import { HeaderProps } from "./Header.d";
import { Navbar, Alignment } from "@blueprintjs/core";

const Header: React.FC<HeaderProps> = ({
  ref = null,
  leftAlign = "center",
  className = "",
  leftElements = <></>,
  rightElements = <></>,
}) => {
  return (
    <Navbar className={`header ${className}`} fixedToTop={true}>
      <Navbar.Group
        align={Alignment.LEFT}
        style={{ justifyContent: leftAlign }}
      >
        {leftElements}
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>{rightElements}</Navbar.Group>
    </Navbar>
  );
};

export default Header;
