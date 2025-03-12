import { StaticImageData } from "next/image";
import serviceImg1 from "../../public/assets/img/icon/pasta-ikon.png";
import serviceImg2 from "../../public/assets/img/icon/pasta-ikon.png";
import serviceImg3 from "../../public/assets/img/icon/pasta-ikon.png";
import serviceImg4 from "../../public/assets/img/icon/pasta-ikon.png";

//home theree service image 
import serviceImg5 from "../../public/assets/img/service/service-3-img1.jpg";
import serviceImg6 from "../../public/assets/img/service/service-3-img2.jpg";
import serviceImg7 from "../../public/assets/img/service/service-3-img3.jpg";

//service icon
import iconImg from "../../public/assets/img/icon/pasta-ikon.png"; 
import iconImg2 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg3 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg4 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg5 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg6 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg7 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg8 from "../../public/assets/img/icon/pasta-ikon.png"; 
import iconImg9 from "../../public/assets/img/icon/pasta-ikon.png";
import iconImg10 from "../../public/assets/img/icon/pasta-ikon.png";

export interface TServiceData {
    id: number;
    serviceImg?: StaticImageData;
    serviceIcon?: string;
    serviceIconImg?: StaticImageData;
    serviceTitle: string;
    serviceBadge: string;
    serviceDesc: string;
    serviceBtn?: string;
    slug?: string;
    urunler?: { ad: string; fiyat: number }[];
    menu?: { ad: string; fiyat: number }[];
    cesitler?: { ad: string; fiyat: number }[];
}

// Pastane verileri




// Tüm hizmetleri birleştirelim
const ServicesList: TServiceData[] = [
    {
        id: 1,
        serviceImg: serviceImg1,
        serviceIconImg: iconImg,
        serviceTitle: 'Pastane',
        serviceBadge: '',
        serviceDesc: 'Taze ve lezzetli unlu mamullerle dolu pastanelerimizi keşfedin.',
        
    },
    {
        id: 2,
        serviceImg: serviceImg2,
        serviceIconImg: iconImg,
        serviceTitle: 'Pasta',
        serviceBadge: '',
        serviceDesc: 'Özel günleriniz için özenle hazırlanmış enfes pastalar.',
       
    },
    {
        id: 3,
        serviceImg: serviceImg3,
        serviceIconImg: iconImg,
        serviceTitle: 'Tatlı',
        serviceBadge: '',
        serviceDesc: 'Şerbetli ve sütlü tatlılarla tatlı krizlerinize çözüm sunuyoruz.',
    },
    {
        id: 4,
        serviceImg: serviceImg4,
        serviceIconImg: iconImg,
        serviceTitle: 'Börek Çeşitleri',
        serviceBadge: '',
        serviceDesc: 'El açması, çıtır ve bol malzemeli börek çeşitlerimizi deneyin.',
    },
    {
        id: 5,
        serviceImg: serviceImg1,
        serviceIconImg: iconImg,
        serviceTitle: 'Ekler Çeşitleri',
        serviceBadge: '',
        serviceIcon: 'flaticon-eclair', // Ekler ile ilgili simge
        serviceDesc: 'Farklı dolgularla hazırlanan taptaze ve lezzetli eklerlerimizle tanışın.',
        serviceBtn: 'Daha Fazla Oku',
    },
    {
        id: 6,
        serviceImg: serviceImg2,
        serviceIconImg: iconImg2,
        serviceTitle: 'Kurabiye Çeşitleri',
        serviceBadge: '',
        serviceIcon: 'flaticon-cookie', // Kurabiye ile ilgili simge
        serviceDesc: 'Çay saatlerinizin vazgeçilmezi olan ev yapımı kurabiye çeşitlerimiz.',
        serviceBtn: 'Daha Fazla Oku',
    },
    {
        id: 7,
        serviceImg: serviceImg3,
        serviceIconImg: iconImg3,
        serviceTitle: 'Unlu Mamüller',
        serviceBadge: '',
        serviceIcon: 'flaticon-bread', // Unlu mamüller ile ilgili simge
        serviceDesc: 'Günlük taze olarak üretilen birbirinden lezzetli unlu mamüller.',
        serviceBtn: 'Daha Fazla Oku',
    },
    
    
    //home two service end
    {
        id:8,
        serviceImg:serviceImg5,
        serviceIcon:'flaticon-farmer',
        serviceTitle:'Garden landscaping',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:9,
        serviceImg:serviceImg6,
        serviceIcon:'flaticon-gardening',
        serviceTitle:'commercial planting',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:10,
        serviceImg:serviceImg7,
        serviceIcon:'flaticon-farming-and-gardening',
        serviceTitle:'soil making & solutions',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    

    //home four service end
    {
        id: 14,
        serviceIconImg: iconImg4,
        serviceTitle: 'Pastane & Kafe',
        serviceBadge: '',
        serviceDesc: 'Taze ekmekler, kekler, poğaçalar ve daha fazlasıyla pastanemizde lezzet şöleni yaşayın. Aynı zamanda keyifli kafe ortamımızda kahve ve atıştırmalıkların tadını çıkarın.',
        serviceBtn: '',
        slug: 'pastane-kafe',
    },
    {
        id: 15,
        serviceIconImg: iconImg6,
        serviceTitle: 'Döner',
        serviceBadge: '',
        serviceDesc: 'Lezzetli et ve tavuk döner çeşitlerimiz çok yakında hizmetinizde!',
        serviceBtn: '',
        slug: 'doner',
    },
 
    
    {
        id:17,
        serviceIconImg:iconImg7,
        serviceTitle:'global SHIPPINg',
        serviceBadge:'',
        serviceDesc:'Content is information produce directed at an end-user',
        serviceBtn:'',
    },
    //home five service end
    {
        id:18,
        serviceIconImg:iconImg,
        serviceTitle:'Restoran',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:19,
        serviceIconImg:iconImg2,
        serviceTitle:'soil making & carbo',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:20,
        serviceIconImg:iconImg3,
        serviceTitle:'planting plants',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:21,
        serviceIconImg:iconImg8,
        serviceTitle:'new plant seeds',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:22,
        serviceIconImg:iconImg9,
        serviceTitle:'butterfly solution',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    },
    {
        id:23,
        serviceIconImg:iconImg10,
        serviceTitle:'garden take care',
        serviceBadge:'',
        serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
        serviceBtn:'read more',
    }
    //service page end
]

export default ServicesList;