//home one portfolio image 
import img1 from "../../public/assets/img/portfolio/portfolio-630_450-1.jpg";
import img2 from "../../public/assets/img/portfolio/portfolio-630_450-2.jpg";
import img3 from "../../public/assets/img/portfolio/portfolio-630_450-3.jpg";
//home two portfolio image
import img5 from "../../public/assets/img/portfolio/portfolio-14.jpg";
import img6 from "../../public/assets/img/portfolio/portfolio-15.jpg";
import img7 from "../../public/assets/img/portfolio/portfolio-16.jpg";
import img8 from "../../public/assets/img/portfolio/portfolio-17.jpg";
import img9 from "../../public/assets/img/portfolio/portfolio-18.jpg";
//home four portfolio image 
import img10 from "../../public/assets/img/portfolio/portfolio-24.jpg";
import img11 from "../../public/assets/img/portfolio/portfolio-25.jpg";
import img12 from "../../public/assets/img/portfolio/portfolio-26.jpg";
import img13 from "../../public/assets/img/portfolio/portfolio-27.jpg";
import img14 from "../../public/assets/img/portfolio/portfolio-28.jpg";
import img15 from "../../public/assets/img/portfolio/portfolio-29.jpg";
//home five portfolio image
import img16 from "../../public/assets/img/portfolio/portfolio-1.jpg";
import img17 from "../../public/assets/img/portfolio/portfolio-2.jpg";
import img18 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import img19 from "../../public/assets/img/portfolio/portfolio-4.jpg";
import img20 from "../../public/assets/img/portfolio/portfolio-5.jpg";
import img21 from "../../public/assets/img/portfolio/portfolio-6.jpg";
import img22 from "../../public/assets/img/portfolio/portfolio-7.jpg";
import img23 from "../../public/assets/img/portfolio/portfolio-8.jpg";
import img24 from "../../public/assets/img/portfolio/portfolio-9.jpg";
import img25 from "../../public/assets/img/portfolio/portfolio-10.jpg";
import img26 from "../../public/assets/img/portfolio/portfolio-11.jpg";
import img27 from "../../public/assets/img/portfolio/portfolio-12.jpg";
import { StaticImageData } from "next/image";

//type
interface TPortfolio{
    id:number,
    portfolioImg:StaticImageData,
    portfolioTag:string,
    portfolioBudget?:string,
    portfolioTitle:string,
    portfolioIcon?:string
}

const portfolioList:TPortfolio[] = [
    {
        id:1,
        portfolioImg:img1,
        portfolioTag:'gardening',
        portfolioBudget:'$20k budget',
        portfolioTitle:'Hasu House Garden & Barbecue',
    },
    {
        id:2,
        portfolioImg:img2,
        portfolioTag:'landscape',
        portfolioBudget:'$14k budget',    
        portfolioTitle:'Foliage as an Asset in the Garden',
    },
    {
        id:3,
        portfolioImg:img3,
        portfolioTag:'gardening',
        portfolioBudget:'$20k budget',
        portfolioTitle:'lawn and garden maintenance',
    },
    {
        id:4,
        portfolioImg:img1,
        portfolioTag:'gardening',
        portfolioBudget:'$20k budget',
        portfolioTitle:'Tree-Trimming & Removal',
    },
    //home one portfolio end
    {
        id:5,
        portfolioImg:img5,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'lawn and garden maintenance',
    },
    {
        id:6,
        portfolioImg:img6,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Tree-Trimming & Removal',
    },
    {
        id:7,
        portfolioImg:img7,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Junk Removal',
    },
    {
        id:8,
        portfolioImg:img8,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'watering plants',
    },
    {
        id:9,
        portfolioImg:img9,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Mowing the grass',
    },
    {
        id:10,
        portfolioImg:img6,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Tree-Trimming & Removal',
    },
    //home two portfolio end
    {
        id:11,
        portfolioImg:img10,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'watering plants',
    },
    {
        id:12,
        portfolioImg:img11,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Mowing the grass',
    },
    {
        id:13,
        portfolioImg:img12,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'lawn and garden maintenance',
    },
    {
        id:13,
        portfolioImg:img13,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Tree-Trimming & Removal',
    },
    {
        id:14,
        portfolioImg:img14,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Junk Removal',
    },
    {
        id:15,
        portfolioImg:img15,
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Mowing the grass',
    },
    //home four portfolio end
    {
        id:16,
        portfolioImg:img16,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'lawn and garden maintenance',
    },
    {
        id:17,
        portfolioImg:img17,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Tree-Trimming & Removal',
    },
    {
        id:18,
        portfolioImg:img18,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Trimming of hedges',
    },
    {
        id:19,
        portfolioImg:img19,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Junk Removal',
    },
    {
        id:20,
        portfolioImg:img20,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Pruning plants for healthy growth',
    },
    {
        id:21,
        portfolioImg:img21,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'seeding new trees and plants',
    },
    {
        id:22,
        portfolioImg:img22,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Planting new trees and plants',
    },
    {
        id:23,
        portfolioImg:img23,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Mowing the grass',
    },
    {
        id:24,
        portfolioImg:img24,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'watering plants',
    },
    {
        id:25,
        portfolioImg:img25,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Weeding planted areas',
    },
    {
        id:26,
        portfolioImg:img26,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'watering plants',
    },
    {
        id:27,
        portfolioImg:img27,
        portfolioTag:'gardening',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Planting new trees and plants',
    }
    //home five portfolio start
  ]
  
  export default portfolioList;