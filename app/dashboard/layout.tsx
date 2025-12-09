import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div>
      layout
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default layout;
