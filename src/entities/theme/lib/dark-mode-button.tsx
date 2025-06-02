import { useEffect, useRef } from "react";
import useStore from "~/lib/store";
import { gsap } from "gsap";
import { DarkModeIconRef } from "~/entities/theme/model/types";

const useDarkModeButton = ({ iconButtonRef }: DarkModeIconRef) => {
  const { toggleDarkMode } = useStore();
  const tlRef = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    // Timeline을 한 번만 생성하고 재사용
    tlRef.current = gsap.timeline({ paused: true })
      .to(iconButtonRef.current, {
        rotate: 360,
        duration: 0.5,
        ease: "power2.inOut",
      });
  }, []);

  const handleClick = () => {
    tlRef.current?.restart();
    toggleDarkMode();
  }

  return { handleClick };
};

export default useDarkModeButton;
