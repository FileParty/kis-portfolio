'use client'

import useStore from "~/lib/store";
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useRef } from "react";
import useDarkModeButton from "~/entities/theme/lib/dark-mode-button";

export const DarkModeButton = () => {
  const { isDarkMode } = useStore();
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const { handleClick } = useDarkModeButton({ iconButtonRef });
  return (
    <IconButton
      ref={iconButtonRef}
      onClick={handleClick}
      sx={{
        overflow: 'hidden',
        position: 'relative',
        width: '64px',
        height: '64px',
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
