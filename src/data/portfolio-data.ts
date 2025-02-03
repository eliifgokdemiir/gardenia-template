//home one portfolio image 
import img1 from "../../public/assets/img/portfolio/portfolio-630_450-1.jpg";
import img2 from "../../public/assets/img/portfolio/doner.jpg";
import img3 from "../../public/assets/img/portfolio/doner1.jpg";
//home two portfolio image
import img5 from "../../public/assets/img/portfolio/portfolio-14.jpg";
import img6 from "../../public/assets/img/portfolio/portfolio-15.jpg";
import img7 from "../../public/assets/img/portfolio/portfolio-16.jpg";
import img8 from "../../public/assets/img/portfolio/portfolio-17.jpg";
import img9 from "../../public/assets/img/portfolio/portfolio-18.jpg";
//home four portfolio image 
import img10 from "../../public/assets/img/portfolio/pasta.jpg";
import img11 from "../../public/assets/img/portfolio/pasta1.jpg";
import img12 from "../../public/assets/img/portfolio/pastane.jpg";
import img13 from "../../public/assets/img/portfolio/suboregi.webp";
import img14 from "../../public/assets/img/portfolio/doner1.jpg";
import img15 from "../../public/assets/img/portfolio/doner.jpg";
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
        portfolioTag:'kafe',
        portfolioBudget:'$20k budget',
        portfolioTitle:'En lezzetli tatlılarımız!',
    },
    {
        id:2,
        portfolioImg:img2,
        portfolioTag:'döner',
        portfolioBudget:'$14k budget',    
        portfolioTitle:'En lezzetlisi!',
    },
    {
        id:3,
        portfolioImg:img3,
        portfolioTag:'döner',
        portfolioBudget:'$20k budget',
        portfolioTitle:'Et Döner',
    },
    {
        id:4,
        portfolioImg:img1,
        portfolioTag:'kafe',
        portfolioBudget:'$20k budget',
        portfolioTitle:'Su Böreği',
    },
    //home one portfolio end
    {
        id:5,
        portfolioImg:img5,
        portfolioTag:'pastane',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'baklava',
    },
    {
        id:6,
        portfolioImg:img6,
        portfolioTag:'pastane',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'Havuçlu tarçınlı kek',
    },
    {
        id:7,
        portfolioImg:img7,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'latte',
    },
    {
        id:8,
        portfolioImg:img8,
        portfolioTag:'döner',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'ssk döner',
    },
    {
        id:9,
        portfolioImg:img9,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'un kurabiyesi',
    },
    {
        id:10,
        portfolioImg:img6,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'çikolatalı krem bisküvili',
    },
    //home two portfolio end
    {
        id:11,
        portfolioImg:img10,
        portfolioTag:'pastane',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'ÇİKOLATALI PASTA',
    },
    {
        id:12,
        portfolioImg:img11,
        portfolioTag:'pastane',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'ÇİLEKLİ PASTA',
    },
    {
        id:13,
        portfolioImg:img12,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'EKLER',
    },
    {
        id:14,
        portfolioImg:img13,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'SU BÖREĞİ',
    },
    {
        id:15,
        portfolioImg:img14,
        portfolioTag:'döner',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'ET DÖNER',
    },
    {
        id:16,
        portfolioImg:img15,
        portfolioTag:'döner',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'TAVUK DÖNER',
    },
    //home four portfolio end
    {
        id:17,
        portfolioImg:img16,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'İSKENDER',
    },
    {
        id:18,
        portfolioImg:img17,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'profiterol!',
    },
    {
        id:19,
        portfolioImg:img18,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'baklava',
    },
    {
        id:20,
        portfolioImg:img19,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'Soslu Döner',
    },
    {
        id:21,
        portfolioImg:img20,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'sigara böreği',
    },
    {
        id:22,
        portfolioImg:img21,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'beyti kebap',
    },
    {
        id:23,
        portfolioImg:img22,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'cheesecake',
    },
    {
        id:24,
        portfolioImg:img23,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'kıymalı börek',
    },
    {
        id:25,
        portfolioImg:img24,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'cookie ',
    },
    {
        id:26,
        portfolioImg:img25,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'meyveli pasta',
    },
    {
        id:27,
        portfolioImg:img26,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'muzlu pasta',
    },
    {
        id:28,
        portfolioImg:img27,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'kestaneli pasta',
    }
    //home five portfolio start
  ]
  
  export default portfolioList;