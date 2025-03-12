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
import img10 from "../../public/assets/img/portfolio/dunyalezzetleri.jpg";
import img11 from "../../public/assets/img/portfolio/pasta1.jpg";
import img12 from "../../public/assets/img/portfolio/pastane.jpg";
import img13 from "../../public/assets/img/portfolio/suboregi.webp";
import img14 from "../../public/assets/img/portfolio/doner1.jpg";
import img15 from "../../public/assets/img/portfolio/kahvecesitleri.webp";
//home five portfolio image
import img16 from "../../public/assets/img/portfolio/pastacesitleri.webp";
import img17 from "../../public/assets/img/portfolio/tatlilar.jpg";
import img18 from "../../public/assets/img/portfolio/sutlutatlilar.jpg";
import img19 from "../../public/assets/img/portfolio/serbetlitatlilar.webp";
import img20 from "../../public/assets/img/portfolio/unlumamul.jpg";
import img21 from "../../public/assets/img/portfolio/portfolio-6.jpg";
import img22 from "../../public/assets/img/portfolio/ekler.jpg";
import img23 from "../../public/assets/img/portfolio/anayemek.webp";
import img24 from "../../public/assets/img/portfolio/burger.jpg";
import img25 from "../../public/assets/img/portfolio/wrap.jpg";
import img26 from "../../public/assets/img/portfolio/adettatli.jpg";
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
        portfolioTag:'kafe',
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
        id:13,
        portfolioImg:img22,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'EKLER ÇEŞİTLERİ',
    },

   
    {
        id:27,
        portfolioImg:img23,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ANA YEMEKLER',
    },
    {
        id:28,
        portfolioImg:img24,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'BURGERLER',
    },
    {
        id:29,
        portfolioImg:img25,
        portfolioTag:'kafe',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'WRAPLAR',
    },
    {
        id:30,
        portfolioImg:img26,
        portfolioTag:'pastane',
        portfolioIcon:'fal fa-long-arrow-right',
        portfolioTitle:'ADET TATLILAR',
    },



    //home five portfolio start
  ]
  
  export default portfolioList;