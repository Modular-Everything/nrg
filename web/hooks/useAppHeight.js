const useAppHeight = () => {
  const appHeight = () => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", appHeight);
  }

  appHeight();
};

export default useAppHeight;
