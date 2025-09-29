import { useEffect } from "react";
const usePreventScroll = (ref, active) => {
  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    const el = ref.current;

    if (active && el) {
      el.addEventListener("wheel", preventScroll, { passive: false });
      el.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", preventScroll);
        el.removeEventListener("touchmove", preventScroll);
      }
    };
  }, [ref, active]);
};

export default usePreventScroll;
