"use client";

import React, { memo, ReactNode, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export type TDrawerComponentProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  direction?: "bottom" | "left" | "right" | "top";
  setClose?: (e: boolean) => void;
  className?: string;
};

const DrawerComponent = (props: TDrawerComponentProps) => {
  const {
    children,
    isOpen,
    onClose,
    setClose,
    className,
    direction = "bottom",
  } = props;

  return (
    <div className="drawer-container">
      <Drawer
        open={isOpen}
        onClose={onClose}
        direction={direction}
        lockBackgroundScroll={true}
        size="auto"
        className={className}
      >
        <div className="relative">{children}</div>
      </Drawer>
    </div>
  );
};

export default memo(DrawerComponent);
