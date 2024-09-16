import React, { useRef, useEffect, ReactNode } from "react";
import ReactPortal from "@/components/ReactPortal";
import { CSSTransition } from "react-transition-group";

interface TModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  onClickBgOverlay?: any;
  noClickBg?: any;
}

const Modal = ({
  children,
  isOpen,
  className,
  onClickBgOverlay,
  noClickBg,
}: TModalProps) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div
          className={`flex items-end md:items-center justify-center fixed w-screen h-full top-0 left-0 overflow-hidden modal z-[120] ${
            className ?? ""
          }`}
          ref={nodeRef}
        >
          <div
            className="bg-[#00000080] w-full h-full absolute top-0 left-0 z-0"
            onClick={onClickBgOverlay}
          />
          <div className={`relative z-1 ${noClickBg ? "w-full" : ""}`}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
