import { useCallback, useEffect, useRef } from "react";
import useStore from "~/lib/store";
import { gsap } from "gsap";
import { DarkModeIconProps } from "~/entities/theme/model/types";
import { useShallow } from 'zustand/react/shallow'

const useDarkModeButton = ({ iconButtonRef }: DarkModeIconProps) => {
  const toggleDarkMode = useStore(useShallow(state => state.toggleDarkMode));
  const tlRef = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true })
      .to(iconButtonRef.current, {
        rotate: 360,
        duration: 0.3,
        ease: "power2.inOut",
      });
  }, [iconButtonRef]);

  const handleClick = useCallback(() => {
    tlRef.current?.restart().then(() => {
      toggleDarkMode();
    });
  }, [toggleDarkMode]);

  return { handleClick };
};

export default useDarkModeButton;
