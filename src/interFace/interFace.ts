import { StaticImageData } from "next/image";
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  toggleSideMenu: () => void;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  sideMenuOpen:boolean;
  setSideMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: any;
  modalData: any
}
// id type
export interface idType {
  id: number;
}
// product type
export interface ProductsType {
  id: number;
  productImg:StaticImageData,
  productTitle:string,
  productSubTitle?:string,
  stock?:string,
  cartIcon?:string,
  cartEye?:string,
  cartHeart?:string,
  price?:number,
  priceOld?:number,
  ratings?:number,
  quantity?:number,
  trendingClass?:string,
  trendingValue?:string,
  newClass?:string,
  newValue?:string,
  discountClass?:string,
  discountValue?:string,
  totalCart?: number
}
