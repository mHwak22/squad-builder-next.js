import { ReactNode } from "react";
import { Room } from "./Room";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
