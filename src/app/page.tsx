import { DarkModeButton } from "~/entities/theme/ui/drak-mode-button";

export default function Home() {
  return (
    <div className="flex">
      <DarkModeButton />
      <h1>Hello World</h1>
    </div>
  );
}
