import React, { ReactNode } from "react";
import Tabs from "./components/Tabs";
interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return <div className="bg-zinc-50 min-h-screen">{children}</div>;
}

export default layout;
