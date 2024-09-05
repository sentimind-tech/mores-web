"use client";

import React, { useEffect, useState } from "react";
import { getWindowDimensions } from "@/module/helper";

export type TWithDimensionProps = {
  windowDimension: {
    width: number;
    height: number;
  };
};

const withDimension = (OriginalComponent: any) => {
  const WithDimensionHOC = (props: any) => {
    const [windowDimension, setWindowDimension] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      let handleResize = () => {
        setWindowDimension(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <OriginalComponent windowDimension={windowDimension} {...props} />;
  };

  WithDimensionHOC.displayName = "WithDimensionHOC";

  return WithDimensionHOC;
};

export default withDimension;
