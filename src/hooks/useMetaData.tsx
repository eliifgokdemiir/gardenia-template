//@refresh
"use client";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface WrapperProps {
  children: React.ReactNode;
  pageTitle: string;
}
const MetaData: React.FC<WrapperProps> = ({ children, pageTitle }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`${pageTitle} || Gardomia - Landscape and Gardening React Next js Template`}</title>
        </Helmet>
        {children}
      </HelmetProvider>
    </>
  );
};

export default MetaData;
