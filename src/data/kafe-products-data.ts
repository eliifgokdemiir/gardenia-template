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
        title: "KAHVALTI TABAĞI",
        img: "/assets/img/product/kahve1.jpg",
        desc: "Protein Breakfast, Fit Kahvaltı, Sıcak Kahvaltı Tabağı, Hellim Avokado Bowl, Simit Kahvaltı, Artisan Breakfast, Continental Breakfast.",
        price: "₺29,90"
    },
    {
        id: 2,
        title: "Sahanlar",
        img: "/assets/img/product/kahvaltı.jpg",
        desc: "Mıhlama, Sucuklu Yumurta, Kavurmalı Yumurta, Sucuklu Poşe Yumurta, Menemen ve daha fazlası...",
        price: "₺39,90"
    },
    {
        id: 3,
        title: "Omletler",
        img: "/assets/img/product/kahvaltı.jpg",
        desc: "California Omlet, Karışık Omlet, Füme Etli Avokadolu Omlet, İtalyan Omlet, Fit Omlet.",
        price: "₺39,90"
    },
    {
        id: 4,
        title: "Sandviçler",
        img: "/assets/img/product/kahve1.jpg",
        desc: "Zeytin Ezmeli, Peynirli, Soğuk, Beyaz Etli Füme, Kavurmalı, Şarküteri Sandviçler ve daha fazlası...",
        price: "₺29,90"
    },
  
]; 