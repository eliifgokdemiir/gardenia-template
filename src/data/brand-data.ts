//home one brand image
import brandImgOne from "../../public/assets/img/client/client-6.png";
import brandImgTwo from "../../public/assets/img/client/client-7.png";
import brandImgThree from "../../public/assets/img/client/client-8.png";
import brandImgFour from "../../public/assets/img/client/client-9.png";
import brandImgFive from "../../public/assets/img/client/client-10.png";
import { StaticImageData } from "next/image";
//home two brand image
import brandImgSix from "../../public/assets/img/client/client-1.png";
import brandImgSeven from "../../public/assets/img/client/client-2.png";
import brandImgEight from "../../public/assets/img/client/client-3.png";
import brandImgNine from "../../public/assets/img/client/client-4.png";
import brandImgTen from "../../public/assets/img/client/client-5.png";
import brandImgEleven from "../../public/assets/img/client/client-1.png";

interface TBrand{
    brandImg:StaticImageData
}
//home one brand data
export const homeOnebrandData:TBrand[] = [
{brandImg :brandImgOne},
{brandImg :brandImgTwo},
{brandImg :brandImgThree},
{brandImg :brandImgFour},
{brandImg :brandImgFive},
{brandImg :brandImgOne},
{brandImg :brandImgThree},
{brandImg :brandImgTwo},
]
//home two brand data
export const homeTwobrandData:TBrand[] = [
    {brandImg :brandImgSix},
    {brandImg :brandImgSeven},
    {brandImg :brandImgEight},
    {brandImg :brandImgNine},
    {brandImg :brandImgTen},
    {brandImg :brandImgEleven},
    {brandImg :brandImgSix},
    ]
