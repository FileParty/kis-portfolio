import { RefObject } from "react";
import { z } from "zod";

export type DarkModeIconProps = {
  iconButtonRef: RefObject<HTMLButtonElement | null>;
}

export const ThemeSchema = z.object({
  isDarkMode: z.boolean(),
})

export type ThemeState = z.infer<typeof ThemeSchema>;

export type ThemeAction = {
  toggleDarkMode: () => void;
}

export type ThemeStore = ThemeState & ThemeAction;
