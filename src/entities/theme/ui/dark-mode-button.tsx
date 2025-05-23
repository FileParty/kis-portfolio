'use client'

import useStore from "~/lib/store";
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Slide } from "@mui/material";

export const DarkModeButton = () => {

  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <IconButton 
      size="large" 
      onClick={toggleDarkMode}
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Slide 
        direction="left" 
        in={isDarkMode} 
        mountOnEnter 
        unmountOnExit
        timeout={300}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: isDarkMode ? 'rotateIn 0.3s ease-in-out' : 'rotateOut 0.3s ease-in-out',
          }}
        >
          <DarkMode />
        </div>
      </Slide>
      <Slide 
        direction="right" 
        in={!isDarkMode} 
        mountOnEnter 
        unmountOnExit
        timeout={300}
      >
        <div className="absolute flex items-center justify-center w-full h-full">
          <LightMode />
        </div>
      </Slide>
    </IconButton>
  )
}
