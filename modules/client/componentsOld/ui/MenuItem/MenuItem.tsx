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
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Menu.Item
      ref={ref}
      className={`menuItem ${className}`}
      onClick={clickHandler}
      active={active}
      labelElement={labelElement}
      text={children}
    />
  );
};

export default MenuItem;
