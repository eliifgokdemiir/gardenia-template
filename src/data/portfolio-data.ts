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
        portfolioImg:img10,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'DÜNYA LEZZETLERİ',
    },
   
    {
        id:6,
        portfolioImg:img15,
        portfolioTag:'kafe',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:'KAHVE ÇEŞİTLERİ',
    },
    //home four portfolio end
    {
        id:7,
        portfolioImg:img16,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'YAŞ PASTA ÇEŞİTLERİ',
    },
    {
        id:8,
        portfolioImg:img17,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'TATLILAR',
    },
    {
        id:9,
        portfolioImg:img18,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'SÜTLÜ TATLILAR',
    },
    {
        id:10,
        portfolioImg:img19,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ŞERBETLİ TATLILAR',
    },
    {
        id:11,
        portfolioImg:img20,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'UNLU MAMÜLLER',
    },
    {
        id:12,
        portfolioImg:img21,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'PETİFÜRLER',
    },
    {
        id:13,
        portfolioImg:img22,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'EKLER ÇEŞİTLERİ',
    },
    {
        id:14,
        portfolioImg:img23,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ADET TATLILAR',
    },
    {
        id:15,
        portfolioImg:img24,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'TARTOLET',
    },
   
    {
        id:27,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ANA YEMEKLER',
    },
    {
        id:28,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'BURGERLER',
    },
    {
        id:29,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'WRAPLAR',
    },
    {
        id:30,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'MAKARNALAR',
    },
    {
        id:31,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'MANTILAR',
    },
    {
        id:32,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'SALATALAR',
    },
    {
        id:33,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'BOWLLAR',
    },
    {
        id:34,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'PİZZALAR',
    },
    {
        id:35,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ATIŞTIRMALIKLAR',
    },
    {
        id:36,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'BUN LEZZETLER',
    },
    {
        id:37,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'KREMLİ BUN',
    },  
    {
        id:38,
        portfolioImg:img27,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'TATLILAR',
    },  
    {
        id:39,
        portfolioImg:img27,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'KURU PASTALAR',
    },  
    {
        id:40,
        portfolioImg:img27,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'EKLER ÇEŞİTLERİ',
    }, 
    {
        id:41,
        portfolioImg:img27,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ET DÖNER',
    }, 
    {
        id:42,
        portfolioImg:img27,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'TAVUK DÖNER',
    }, 
    {
        id:43,
        portfolioImg:img27,
        portfolioTag:'döner',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'SERVİS DÖNER',
    }, 
    //home five portfolio start
  ]
  
  export default portfolioList;