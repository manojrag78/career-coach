import { childrenInterface } from "@/lib/interfaces/interfaces";
import React from "react";

const MainLayout = async ({ children } : childrenInterface) => {
  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};

export default MainLayout;
