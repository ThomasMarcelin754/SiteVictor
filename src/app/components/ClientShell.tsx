"use client";
import React from "react";
import SideCart from "./SideCart";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SideCart />
    </>
  );
}
