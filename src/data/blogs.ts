//blog home one image
import blogImgOne from "../../public/assets/img/blog/blog-8.jpg";
import blogImgTwo from "../../public/assets/img/blog/blog-9.jpg";
import blogImgThree from "../../public/assets/img/blog/blog-10.jpg";
//blog home two image
import blogImgFour from "../../public/assets/img/blog/blog-11.jpg";
import blogImgFive from "../../public/assets/img/blog/blog-12.jpg";
import blogImgSix from "../../public/assets/img/blog/blog-13.jpg";
// blog home five image
import blogImgSeven from "../../public/assets/img/blog/blog-15.jpg";
// blog sidebar image
import blogImgEight from "../../public/assets/img/portfolio/portfolio-sub1.jpg";
import blogImgNine from "../../public/assets/img/portfolio/portfolio-sub2.jpg";
import blogImgTen from "../../public/assets/img/portfolio/portfolio-sub3.jpg";
// blog page image
import blogImgEleven from "../../public/assets/img/blog/blog-1.jpg";
import blogImg12 from "../../public/assets/img/banner/banner-4-1.jpg";
import blogImg13 from "../../public/assets/img/banner/banner-1-1.jpg";

import blogImg14 from "../../public/assets/img/banner/banner-2-1.jpg";
import blogImg15 from "../../public/assets/img/banner/banner-4-1.jpg";
import blogImg16 from "../../public/assets/img/blog/blog-7.jpg";
import { StaticImageData } from "next/image";
//author img
import author1 from "../../public/assets/img/blog/blog-author1.jpg";
import author2 from "../../public/assets/img/blog/blog-author2.jpg";
import author3 from "../../public/assets/img/blog/blog-author3.jpg";

//blog data type 
interface TBlog{
  id:number,
  img:StaticImageData,
  title:string,
  metaBy:string,
  metaAuthor : string,
  date:string,
  blogBtn:string,
  blogView:string,
  blogComment:string,
  desc?:string,
  columClass?:string,
  imgClass?:string,
  metaAuthorImg?:StaticImageData,
  blogCat?:string,
  blogCatA?:string,
  catClass?:string,
  authorClass?:string,
  video?:boolean,
  imgA?:StaticImageData,
  imgB?:StaticImageData,
  slider?:boolean,
  withoutImg?:boolean
}
const blogItemsList:TBlog[] = [
  {
    id:1,
    img:blogImgOne,
    title:'Most gardens are a mix of natural & constructed',
    metaBy:'by',
    metaAuthor:'domson',
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'55 Views ',
    blogComment:'26 Comments',
  },
  {
    id:2,
    img:blogImgTwo,
    title:'Starting a garden is just like real estate it',
    metaBy:'by',
    metaAuthor:'jeson',
    date:'August 24, 2022',
    blogBtn:'read more',
    blogView:'125 Views ',
    blogComment:'30 Comments',
  },
  {
    id:3,
    img:blogImgThree,
    title:'all about location. Place your garden in a part',
    metaBy:'by',
    metaAuthor:'peter',
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'95 Views ',
    blogComment:'16 Comments',
  },
  // blog home one end
  {
    id:4,
    img:blogImgFour,
    title:'Most gardens consist of a mix of natural',
    metaBy:'by',
    metaAuthor:'Jack',
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'95 Views ',
    blogComment:'16 Comments',
  },
  {
    id:5,
    img:blogImgFive,
    title:'Place your garden in a part of your yard',
    metaBy:'by',
    metaAuthor:'jeson',
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'75 Views ',
    blogComment:'18 Comments',
  },
  {
    id:6,
    img:blogImgSix,
    title:`you'll see it regularly of sight, out of mind`,
    metaBy:'by',
    metaAuthor:'Andrew',
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'84 Views ',
    blogComment:'17 Comments',
  },
  // blog home two end
  {
    id:7,
    img:blogImgSeven,
    title:'As nouns the difference between planting',
    desc:'Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.',
    metaBy:'by',
    metaAuthor:'jeson',
    date:'August 17, 2022',
    blogBtn:'read more',
    columClass:'col-xl-8 col-lg-12 order-xl-2',
    imgClass:'blog-thumb',
    blogView:'36 Views ',
    blogComment:'21 Comments',
  },
  {
    id:8,
    img:blogImgSix,
    title:`Most gardens consist of a mix of natural`,
    desc:'Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.',
    metaBy:'by',
    metaAuthor:'Andrew',
    date:'August 23, 2022',
    blogBtn:'read more',
    columClass:'col-xl-4 col-lg-6 order-xl-1',
    imgClass:'blog-thumb d-none',
    blogView:'85 Views ',
    blogComment:'14 Comments',
  },
  // blog home five end
  {
    id:9,
    img:blogImgEight,
    title:`aving education in an area helps`,
    desc:'Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.',
    metaBy:'by',
    metaAuthor:'Andrew',
    date:'August 23, 2022',
    blogBtn:'read more',
    columClass:'col-xl-4 col-lg-6 order-xl-1',
    imgClass:'blog-thumb d-none',
    blogView:'65 Views ',
    blogComment:'10 Comments',
  },
  {
    id:10,
    img:blogImgNine,
    title:`People think, feel, & behave in a way`,
    desc:'Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.',
    metaBy:'by',
    metaAuthor:'Andrew',
    date:'August 23, 2022',
    blogBtn:'read more',
    columClass:'col-xl-4 col-lg-6 order-xl-1',
    imgClass:'blog-thumb d-none',
    blogView:'135 Views ',
    blogComment:'50 Comments',
  },
  {
    id:11,
    img:blogImgTen,
    title:`That contributes to their success`,
    desc:'Most gardens consist of a mix of natural & constructed elements, although even very natural gardens are always.',
    metaBy:'by',
    metaAuthor:'Andrew',
    date:'August 23, 2022',
    blogBtn:'read more',
    columClass:'col-xl-4 col-lg-6 order-xl-1',
    imgClass:'blog-thumb d-none',
    blogView:'172 Views ',
    blogComment:'25 Comments',
  },
  // blog sidebar end
  {
    id:12,
    img:blogImgEleven,
    title:`Service Construct deals physical damage with his basic attack in the match.`,
    desc:`Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.`,
    metaBy:'by',
    metaAuthor:'Peter',
    metaAuthorImg:author1,
    date:'August 22, 2022',
    blogBtn:'read more',
    blogView:'100 Views ',
    blogComment:'28 Comments',
    blogCat:'Business ,',
    blogCatA:'Design',
    catClass: 'tags',
    authorClass: 'blog-author',
  },
  {
    id:13,
    img:blogImg12,
    title:`But he is able to grab the front-most hero, truely paralyzing and dealing`,
    desc:`Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.`,
    metaBy:'by',
    metaAuthor:'Steven',
    metaAuthorImg:author2,
    date:'August 23, 2022',
    blogBtn:'read more',
    blogView:'150 Views ',
    blogComment:'17 Comments',
    blogCat:'Business',
    video:true,
    catClass: 'tags',
    authorClass: 'blog-author',
  },
  {
    id:14,
    img:blogImg13,
    imgA:blogImg14,
    imgB:blogImg15,
    title:`Pure damage for a duration. This ability is the only interruptable by stuns`,
    desc:`Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.`,
    metaBy:'by',
    metaAuthor:'Andrew',
    metaAuthorImg:author3,
    date:'August 24, 2022',
    blogBtn:'read more',
    blogView:'160 Views ',
    blogComment:'20 Comments',
    blogCat:'Business ,',
    blogCatA:'UX',
    slider:true,
    catClass: 'tags',
    authorClass: 'blog-author',
  },
  {
    id:15,
    img:blogImg16,
    title:`Then they need to establish a company branch office/partnership.`,
    desc:`Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.`,
    metaBy:'by',
    metaAuthor:'Watson',
    date:'August 25, 2022',
    blogBtn:'read more',
    blogView:'175 Views ',
    blogComment:'30 Comments',
    blogCat:'',
    withoutImg: true,
    catClass: 'tags d-none',
    authorClass: 'blog-author d-none',
  }
  // blog page end
]

export default blogItemsList;