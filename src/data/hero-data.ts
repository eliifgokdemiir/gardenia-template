
//home one hero img
import heroImg1 from "../../public/assets/img/banner/banner-1-1.jpg";
import heroImg2 from "../../public/assets/img/banner/banner-2-1.jpg";
import heroImg3 from "../../public/assets/img/banner/banner-4-1.jpg";
//home  two hero img
import banner1 from "../../public/assets/img/banner/banner-2-1.jpg";
import banner2 from "../../public/assets/img/banner/banner-4-1.jpg";
import banner3 from "../../public/assets/img/banner/banner-1-1.jpg";
import reviewThumb from "../../public/assets/img/banner/meta-review-thumb.png";
import { StaticImageData } from "next/image";
// home three hero img
import banner4 from "../../public/assets/img/banner/banner-3-1.jpg";
import banner5 from "../../public/assets/img/banner/banner-4-1-dark.jpg";
import banner6 from "../../public/assets/img/banner/banner-1-1-dark.jpg";
//home five hero img
import banner7 from "../../public/assets/img/banner/banner-5-1.png";
import banner8 from "../../public/assets/img/banner/banner-5-2.png";

//home one hero data
interface THero{
    id:number,
    sliderBg:StaticImageData,
    sliderSubtitle:string,
    sliderTitle:string,
    sliderbtn:string,
    sliderbtn2:string
}
export const HomeOneSliderItem:THero[]  = [
    {
        id: 1,
        sliderBg: heroImg1,
        sliderSubtitle: 'Provides hassle-free backyard transformations',
        sliderTitle: 'make dream gardening',
        sliderbtn: 'request an estimate',
        sliderbtn2: 'About Us',
    },
    {
        id: 2,
        sliderBg: heroImg2,
        sliderSubtitle: 'Provides hassle-free backyard transformations',
        sliderTitle: 'Jik Flower Scaping',
        sliderbtn: 'request an estimate',
        sliderbtn2: 'About Us',
    },
    {
        id: 3,
        sliderBg: heroImg3,
        sliderSubtitle: 'Provides hassle-free backyard transformations',
        sliderTitle: 'k.i Flower plants',
        sliderbtn: 'request an estimate',
        sliderbtn2: 'About Us',
    }
];

//home two hero data
interface THeroTwo{
    id:number,
    sliderBg:StaticImageData,
    sliderSubtitle:string,
    sliderTitle:string,
    sliderDesc:string,
    slidereviewImg:StaticImageData,
    slidereviewText:string,
    slidereviewCount:string,
    sliderBtn:string
}
export const HomeTwoSliderItem:THeroTwo[] = [
    {
        id: 1,
        sliderBg: banner1,
        sliderSubtitle: `[ since from 2000 ]`,
        sliderTitle: 'Jik Flower Scaping',
        sliderDesc: 'The laying out and care of a plot of ground devoted partially or wholly to the growing of plants such as flowers.',
        slidereviewImg: reviewThumb,
        slidereviewText: 'Active Review',
        slidereviewCount: '3200+',
        sliderBtn: 'get in touch',
    },
    {
        id: 2,
        sliderBg: banner2,
        sliderSubtitle: `[ since from 2000 ]`,
        sliderTitle: 'k.i Flower plants',
        sliderDesc: 'The laying out and care of a plot of ground devoted partially or wholly to the growing of plants such as flowers.',
        slidereviewImg: reviewThumb,
        slidereviewText: 'Active Review',
        slidereviewCount: '3200+',
        sliderBtn: 'get in touch',
    },
    {
        id: 3,
        sliderBg: banner3,
        sliderSubtitle: `[ since from 2000 ]`,
        sliderTitle: 'make dream gardening',
        sliderDesc: 'The laying out and care of a plot of ground devoted partially or wholly to the growing of plants such as flowers.',
        slidereviewImg: reviewThumb,
        slidereviewText: 'Active Review',
        slidereviewCount: '3200+',
        sliderBtn: 'get in touch',
    }
];
//home two hero data end

//home three hero data
//data type
interface TSliderItem{
    id:number,
    sliderBg:StaticImageData,
    sliderSubtitle:string,
    sliderTitle:string,
    sliderbtn:string,
}
export const SliderItem:TSliderItem[] = [
    {
        id: 1,
        sliderBg: banner4,
        sliderSubtitle: 'since from 2000',
        sliderTitle: 'Jik Flower Scaping',
        sliderbtn: 'Get estimate',
    },
    {
        id: 2,
        sliderBg: banner5,
        sliderSubtitle: 'since from 2000',
        sliderTitle: 'k.i Flower plants',
        sliderbtn: 'Get estimate',
    },
    {
        id: 3,
        sliderBg: banner6,
        sliderSubtitle: 'since from 2000',
        sliderTitle: 'make dream gardening',
        sliderbtn: 'Get estimate',
    }
];
//home three hero data end
//home four hero data
//data type
interface THeroFourSliderItem{
    id:number,
    sliderBg:StaticImageData,
    sliderSubtitle:string,
    sliderTitle:string,
    sliderbtn:string,
    sliderTitleBig:string,
    sliderbtn1:string
}
export const HeroFourSliderItem:THeroFourSliderItem[] = [
    {
        id: 1,
        sliderBg: banner2,
        sliderSubtitle: 'Best service in new york',
        sliderTitle: 'Welcome To',
        sliderTitleBig: 'Gardomia',
        sliderbtn: 'Get estimate',
        sliderbtn1: 'learn more',
    },
    {
        id: 2,
        sliderBg: banner1,
        sliderSubtitle: 'Best service in new york',
        sliderTitle: 'Best Garden',
        sliderTitleBig: 'Services',
        sliderbtn: 'Get estimate',
        sliderbtn1: 'learn more',
    }
];

//home five hero data
//data type
interface THomeFiveHero{
    id:number,
    sliderBg:StaticImageData,
    sliderSubtitle:string,
    sliderTitle:string,
    sliderbtn:string,
    sliderbtn1:string
}
export const HomeFiveSliderItem:THomeFiveHero[] = [
    {
        id: 1,
        sliderBg: banner7,
        sliderSubtitle: 'start from $29',
        sliderTitle: 'Jik Flower Scaping',
        sliderbtn: 'request an estimate',
        sliderbtn1: 'our shop',
    },
    {
        id: 2,
        sliderBg: banner8,
        sliderSubtitle: 'start from $28',
        sliderTitle: 'k.i Flower plants',
        sliderbtn: 'request an estimate',
        sliderbtn1: 'our shop',
    }
];