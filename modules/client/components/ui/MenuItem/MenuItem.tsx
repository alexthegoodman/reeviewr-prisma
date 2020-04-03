import * as React from "react";
import { Menu } from "@blueprintjs/core";

import { MenuItemProps } from "./MenuItem.d";

const MenuItem: React.FC<MenuItemProps> = ({
  ref = null,
  className = "",
  active = false,
  labelElement = <></>,
  onClick = () => console.info("Click"),
  children = null,
  disabled = false,
  text = "",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Menu.Item
      ref={ref}
      className={`menuItem ${className}`}
      onClick={clickHandler}
      active={active}
      labelElement={labelElement}
      text={text !== "" ? text : children}
      disabled={disabled}
    />
  );
};

export default MenuItem;
