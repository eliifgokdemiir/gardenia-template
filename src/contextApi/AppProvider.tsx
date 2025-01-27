"use client";

import React, { createContext, useState, useEffect } from "react";
import { AppContextType } from "@/interFace/interFace";
import { usePathname } from "next/navigation";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [filterType, setFilterType] = useState<string>("");
  const [modalData, setModalData] = useState<any>({})
  const [niceSelectData, setNiceSelectData] = useState<string>("no-data");
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  useEffect(() => {
    setNiceSelectData("no-data");
  }, [pathName]);

  const contextValue: AppContextType = {
    scrollDirection,
    sideMenuOpen,
    setSideMenuOpen,
    setScrollDirection,
    toggleSideMenu,
    filterType,
    setFilterType,
    niceSelectData,
    modalData,
    setModalData,
    setNiceSelectData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
