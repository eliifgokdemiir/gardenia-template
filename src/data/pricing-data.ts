import { StaticImageData } from "next/image";
import pricingIconOne from "../../public/assets/img/icon/pricing-icon-1.png";
import pricingIconTwo from "../../public/assets/img/icon/pricing-icon-2.png";
import pricingIconThree from "../../public/assets/img/icon/pricing-icon-3.png";
import pricingIconFour from "../../public/assets/img/icon/pricing-icon-4.png";

interface TPricing{
    id:number,
    packageIcon:StaticImageData;
    packageName:string,
    packagePrice:number,
    packageService:string,
    packagePlaning:string,
    packageParty:string,
    packageLandscape:string,
    packageFence:string,
    packageBtn: string,
    packageActive: string,
    packageBadge: string,
    packageListClassA: string,
    packageListClassB: string,
    packageListClassC: string,
    packageListClassD: string,
    packageListClassE: string

}

const pricingList:TPricing[] = [
    {
       id: 1,
       packageIcon: pricingIconOne,
       packageName: 'small package',
       packagePrice: 49.00,
       packageService: 'Gardens Service',
       packagePlaning: 'Forest Planning',
       packageParty: 'Gardens Party',
       packageLandscape: 'Preparing Landscape',
       packageFence: 'Garden Fence',
       packageBtn: 'get it now',
       packageActive: 'single-pricing mb-30',
       packageBadge: 'd-none',
       packageListClassA: 'no-inc',
       packageListClassB: 'no-inc',
       packageListClassC: 'n-inc',
       packageListClassD: 'n-inc',
       packageListClassE: 'n-inc'
    },
    {
       id: 2,
       packageIcon: pricingIconTwo,
       packageName: 'best package',
       packagePrice: 59.00,
       packageService: 'Gardens Service',
       packagePlaning: 'Forest Planning',
       packageParty: 'Gardens Party',
       packageLandscape: 'Preparing Landscape',
       packageFence: 'Garden Fence',
       packageBtn: 'get it now',
       packageActive: 'single-pricing mb-30 best-package',
       packageBadge: 'bp-tag',
       packageListClassA: 'no-inc',
       packageListClassB: 'no-inc',
       packageListClassC: 'no-inc',
       packageListClassD: 'n-inc',
       packageListClassE: 'n-inc'
    },
    {
       id: 3,
       packageIcon: pricingIconThree,
       packageName: 'for office',
       packagePrice: 69.00,
       packageService: 'Gardens Service',
       packagePlaning: 'Forest Planning',
       packageParty: 'Gardens Party',
       packageLandscape: 'Preparing Landscape',
       packageFence: 'Garden Fence',
       packageBtn: 'get it now',
       packageActive: 'single-pricing mb-30',
       packageBadge: 'd-none',
       packageListClassA: 'no-inc',
       packageListClassB: 'no-inc',
       packageListClassC: 'no-inc',
       packageListClassD: 'no-inc',
       packageListClassE: 'n-inc'
    },
    {
       id: 4,
       packageIcon: pricingIconFour,
       packageName: 'for house',
       packagePrice: 99.00,
       packageService: 'Gardens Service',
       packagePlaning: 'Forest Planning',
       packageParty: 'Gardens Party',
       packageLandscape: 'Preparing Landscape',
       packageFence: 'Garden Fence',
       packageBtn: 'get it now',
       packageActive: 'single-pricing mb-30',
       packageBadge: 'd-none',
       packageListClassA: 'no-inc',
       packageListClassB: 'no-inc',
       packageListClassC: 'no-inc',
       packageListClassD: 'no-inc',
       packageListClassE: 'no-inc'
    }
 ]

 export default pricingList;