import * as React from "react";

import { Link } from "react-navi";
import { LogoProps } from "./Logo.d";

const Logo: React.FC<LogoProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  white = false,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="logoContainer">
      <Link href="/">
        {white ? (
          <img className="logo" src="/public/img/logo-w.png" />
        ) : (
          <img className="logo" src="/public/img/logo.png" />
        )}
      </Link>
    </section>
  );
};

export default Logo;
