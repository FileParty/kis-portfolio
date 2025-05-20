import { z } from "zod/v4";

export const ThemeSchema = z.object({
    isDarkMode: z.boolean(),
})

export type Theme = z.infer<typeof ThemeSchema>;


