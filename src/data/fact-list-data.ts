import { StaticImageData } from "next/image"
import factIconImg from '../../public/assets/img/icon/fact-icon.png';

//data type
interface TFactItem{
    id:number,
    factTitle:string,
    factNumber :number,
    factIcon:StaticImageData,
    factDesk:string,
    factPlant:string
}
export const factListData:TFactItem[] = [
    {
        id: 1,
        factTitle: 'year experience since',
        factNumber: 2000,
        factIcon: factIconImg,
        factDesk: 'Delivering solutions for your garden in very easily.',
        factPlant: 'fact-single'
    },
    {
        id: 2,
        factTitle: 'house captured',
        factNumber: 9250,
        factIcon: factIconImg,
        factDesk: 'Delivering solutions for your garden in very easily.',
        factPlant: 'fact-single fact-plant-shape'
    },
    {
        id: 3,
        factTitle: 'worldwide base',
        factNumber: 3200,
        factIcon: factIconImg,
        factDesk: 'Delivering solutions for your garden in very easily.',
        factPlant: 'fact-single'
    }
]

//home three factlist data
//data type
interface TFactList{
id:number,
factSerial:string,
factNumber:number,
factText:string,
factTextK:string
}
export const factList:TFactList[] = [
    {
        id: 1,
        factSerial: '01',
        factNumber: 120,
        factText: 'Active Users',
        factTextK: 'K',
    },
    {
        id: 2,
        factSerial: '02',
        factNumber: 82,
        factText: 'User passive',
        factTextK: 'K',
    },
    {
        id: 3,
        factSerial: '03',
        factNumber: 35,
        factText: 'increase in user',
        factTextK: '%',
    },
    {
        id: 4,
        factSerial: '04',
        factNumber: 50,
        factText: 'good user feedback',
        factTextK: 'K',
    }
]
//end home three factlist data