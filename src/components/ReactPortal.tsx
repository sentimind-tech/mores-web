import { useState, useLayoutEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "@/module/helper";

interface ReactPortalProps {
  children: ReactNode;
  wrapperId?: string;
}

const ReactPortal = ({
  children,
  wrapperId = "portal-wrapper",
}: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<any>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(
    children,
    document.getElementById(wrapperId) as HTMLElement
  );
};

export default ReactPortal;
