'use client'

import useStore from "~/lib/store";
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { memo, useRef } from "react";
import useDarkModeButton from "~/entities/theme/lib/dark-mode-button";
import { useShallow } from 'zustand/react/shallow'

const DarkModeButtonComponent = () => {
  const isDarkMode = useStore(useShallow(state => state.isDarkMode));
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const { handleClick } = useDarkModeButton({ iconButtonRef });

  return (
    <IconButton
      className="w-[64px] h-[64px] overflow-hidden relative"
      ref={iconButtonRef}
      onClick={handleClick}
      sx={{
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      { isDarkMode ? (
        <DarkMode sx={{ fontSize: '64px' }} />
      ) : (
        <LightMode sx={{ fontSize: '64px' }} />
      )}
    </IconButton>
  )
}

export const DarkModeButton = memo(DarkModeButtonComponent);
