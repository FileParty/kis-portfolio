"use client"

import useStore from "~/lib/store";
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from "@mui/material";

export const DarkModeButton = () => {

  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <IconButton size="large" onClick={toggleDarkMode}>
      { isDarkMode ? <DarkMode /> : <LightMode /> }
    </IconButton>
  )
}
