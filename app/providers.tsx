"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
export const Providers = ({ children }: LayoutProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
