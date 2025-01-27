import { StaticImageData } from "next/image";
import testIconOne from "../../public/assets/img/icon/test-icon.png";
//home two author image
import authorImgOne from "../../public/assets/img/testimonial/author-2.jpg";
import authorImgTwo from "../../public/assets/img/testimonial/author-3.jpg";
import authorImgThree from "../../public/assets/img/testimonial/author-4.jpg";
//shape home four
import shapeImg from "../../public/assets/img/bg/testimonial-4-shape.png";

//home-1 testimonial data & type
interface TTestimonial{
  id:number,
  icon:StaticImageData,
  desc:string,
  rating:number
}
export const testimonial:TTestimonial[] = [
    {
      id:1,
      icon: testIconOne,
      desc:`“ started with a simple idea: Deliver quality, well-designed landscape for home, business and public spaces. ”`,
      rating: 5,
    },
    {
      id:2,
      icon: testIconOne,
      desc:`“ well-designed landscape for home, started with a simple idea: Deliver quality, business and public spaces. ”`,
      rating: 4.5,
    },
    {
      id:3,
      icon: testIconOne,
      desc:`“ started with a simple idea: Deliver quality, well-designed landscape for home, business and public spaces. ”`,
      rating: 5,
    },
    {
      id:4,
      icon: testIconOne,
      desc:`“ well-designed landscape for home, started with a simple idea: Deliver quality, business and public spaces. ”`,
      rating: 4.5,
    }
  ]
  
  export const testimonial_nav = [
    {
      img:'/assets/img/testimonial/author-2.jpg',
      designation: 'head of idea',
      author: 'humble d. dow',
    },
    {
      img:'/assets/img/testimonial/author-1.jpg',
      designation: 'designer',
      author: 'yellow m. milso',
    },
    {
      img:'/assets/img/testimonial/author-2.jpg',
      designation: 'head of idea',
      author: 'humble d. dow',
    },
    {
      img:'/assets/img/testimonial/author-1.jpg',
      designation: 'designer',
      author: 'yellows m. milso',
    }
  ]

  //testimonial home one end

  //data type
  interface TTestimonialTwo{
    id:number;
    count:string;
    desc:string;
    authorImg:StaticImageData;
    designation:string;
    author:string
  }
  export const testimonial_two:TTestimonialTwo[] = [
    {
      id: 1,
      count: '01',
      desc: `“ started with a simple idea: Deliver quality, well-designed landscape for home, business and public spaces. ”`,
      authorImg:authorImgOne,
      designation: 'head of idea',
      author: 'humble d. dow',
    },
    {
      id: 2,
      count: '02',
      desc: `“ One of the best gardening tips you will ever get is to plan your new garden near  a water source. ”`,
      authorImg:authorImgTwo,
      designation: 'founder',
      author: 'rosalina d. william',
    },
    {
      id: 3,
      count: '03',
      desc: `“ When starting a garden, one of the top pieces of advice is o invest in soil that is nutrient rich & well drained. ”`,
      authorImg:authorImgThree,
      designation: 'ceo of halim co.',
      author: 'miranda h. halim',
    },
    {
      id: 4,
      count: '04',
      desc: `“ started with a simple idea: Deliver quality, well-designed landscape for home, business and public spaces. ”`,
      authorImg:authorImgOne,
      designation: 'head of idea',
      author: 'humble d. dow',
    },
  ]
  //testimonial home two end
  //home three data
 //data type
 interface TTestimonialThree{
  id:number;
  desc:string;
  authorImg:StaticImageData;
  designation:string;
  author:string
}
  export const testimonial_three:TTestimonialThree[] = [
    {
      id: 7,
      desc: `“ started with a simple idea Deliver quality, well designed landscape for home & spaces. ”`,
      authorImg:authorImgOne,
      designation: 'head of idea',
      author: 'humble d. dow',
    },
    {
      id: 8,
      desc: `“ well designed home & spaces landscape for, started with a simple idea Deliver quality. ”`,
      authorImg:authorImgTwo,
      designation: 'designer',
      author: 'yellow m. milso',
    },
    {
      id: 9,
      desc: `“ landscape for home & spaces started with a simple idea Deliver, well designed quality. ”`,
      authorImg:authorImgThree,
      designation: 'manager',
      author: 'dillon m. milso',
    },
    {
      id: 10,
      desc: `“ started with a simple idea Deliver quality, well designed landscape for home & spaces. ”`,
      authorImg:authorImgOne,
      designation: 'head of idea',
      author: 'humble d. dow',
    },
    {
      id: 11,
      desc: `“ well designed home & spaces landscape for, started with a simple idea Deliver quality. ”`,
      authorImg:authorImgTwo,
      designation: 'designer',
      author: 'yellow m. milso',
    },
  ]
  //testimonial home three end
  //home four data
 //data type
 interface TTestimonialFour{
  id:number;
  desc:string;
  authorImg:StaticImageData;
  shapeImg:StaticImageData, 
  designation:string;
  author:string,
  ratings:number,
}
  export const testimonial_four:TTestimonialFour[] = [
    {
      id: 10,
      desc: `“ started with simple idea Deliver quality, welldesign landscape for home ”`,
      authorImg:authorImgOne,
      shapeImg:shapeImg,
      designation: 'head of idea',
      author: 'dillon m. milso',
      ratings:5,
    },
    {
      id: 11,
      desc: `“ The freshly planted while gardening is the process or action of cultivating “`,
      authorImg:authorImgTwo,
      shapeImg:shapeImg,
      designation: 'founder',
      author: 'rosalina d. william',
      ratings:4,
    },
    {
      id: 12,
      desc: `“ started with simple idea Deliver quality, welldesign landscape for home ”`,
      authorImg:authorImgOne,
      shapeImg:shapeImg,
      designation: 'head of idea',
      author: 'dillon m. milso',
      ratings:5,
    },
  ]
  //testimonial home four end