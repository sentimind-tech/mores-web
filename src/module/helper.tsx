export const getWindowDimensions = (): { width: number; height: number } => {
  if (typeof window == "undefined") return { width: 0, height: 0 };

  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};
