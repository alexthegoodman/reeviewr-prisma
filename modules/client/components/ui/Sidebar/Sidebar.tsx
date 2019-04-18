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
  // let props = {
  //   enforceFocus: false,
  //   autoFocus: false,
  //   hasBackdrop: false,
  //   canEscapeKeyClose: false,
  //   canOutsideClickClose: false,
  //   isCloseButtonShown: false,
  //   isOpen: true,
  //   size: "300px",
  //   transitionDuration: 0,
  //   portalClassName: "desktopSidebarPortal",
  // };
  if (mobile) {
    let props = {
      enforceFocus: true,
      autoFocus: true,
      hasBackdrop: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      isCloseButtonShown: true,
      isOpen: false,
      size: Drawer.SIZE_LARGE,
      transitionDuration: 500,
      portalClassName: "",
    };
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
  }

  return (
    <div
      className={`sidebar bp3-drawer bp3-position-left sidebar bp3-overlay-content ${className}`}
    >
      {children}
    </div>
  );
};

export default Sidebar;
