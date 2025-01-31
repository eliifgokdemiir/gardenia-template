export type KafeProduct = {
    id: number;
    title: string;
    img: string;
    desc: string;
    price: string;
};

export const kafeProducts: KafeProduct[] = [
    {
        id: 1,
        title: "Sütlü Kahve",
        img: "/assets/img/product/kahve1.jpg",
        desc: "Geleneksel Türk usulü köpüklü kahve",
        price: "₺29,90"
    },
    {
        id: 2,
        title: "Serpme Kahvaltı",
        img: "/assets/img/product/kahvaltı.jpg",
        desc: "Geleneksel kahvaltı",
        price: "₺39,90"
    },
    {
        id: 3,
        title: "Serpme Kahvaltı",
        img: "/assets/img/product/kahvaltı.jpg",
        desc: "Geleneksel kahvaltı",
        price: "₺39,90"
    },
    {
        id: 4,
        title: "Sütlü Kahve",
        img: "/assets/img/product/kahve1.jpg",
        desc: "Geleneksel Türk usulü köpüklü kahve",
        price: "₺29,90"
    },
  
]; 