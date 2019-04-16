import * as React from "react";

import { SidebarProps } from "./Sidebar.d";
import { Drawer, Position } from "@blueprintjs/core";

const Sidebar: React.FC<SidebarProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  mobile = false,
  onClosed = null,
  onOpened = null,
  children,
}) => {
  let props = {
    enforceFocus: false,
    autoFocus: false,
    hasBackdrop: false,
    canEscapeKeyClose: false,
    canOutsideClickClose: false,
    isCloseButtonShown: false,
    isOpen: true,
    size: "300px",
    transitionDuration: 0,
  };
  if (mobile) {
    props = {
      enforceFocus: true,
      autoFocus: true,
      hasBackdrop: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      isCloseButtonShown: true,
      isOpen: false,
      size: Drawer.SIZE_LARGE,
      transitionDuration: 500,
    };
  }
  return (
    <Drawer
      className={`sidebar ${className}`}
      onClosed={onClosed}
      onOpened={onOpened}
      position={Position.LEFT}
      {...props}
    >
      {children}
    </Drawer>
  );
};

export default Sidebar;
