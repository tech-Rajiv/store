import React, { ReactNode } from "react";
import Tabs from "./components/Tabs";
import CuponCodeAdd from "@/components/banners/CuponCodeAdd";
interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div className="shadow min-h-screen sm:p-5">
      <CuponCodeAdd />
      {children}
    </div>
  );
}

export default layout;
