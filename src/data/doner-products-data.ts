export type DonerProduct = {
    id: number;
    title: string;
    img: string;
    desc: string;
    price: string;
};

export const donerProducts: DonerProduct[] = [
    {
        id: 1,
        title: "Tavuk Döner",
        img: "/assets/img/product/doner.jpg",
        desc: "Geleneksel usul hazırlanmış tavuk döner",
        price: "₺89,90"
    },
    {
        id: 2,
        title: "Et Döner",
        img: "/assets/img/product/doner1.jpg",
        desc: "Özel soslu iskender döner",
        price: "₺74,90"
    },
    {
        id: 3,
        title: "Tavuk Döner",
        img: "/assets/img/product/doner.jpg",
        desc: "Geleneksel usul hazırlanmış tavuk döner",
        price: "₺89,90"
    },
    {
        id: 4,
        title: "Et Döner",
        img: "/assets/img/product/doner1.jpg",
        desc: "Özel soslu iskender döner",
        price: "₺74,90"
    },
    {
        id: 5,
        title: "Et Döner",
        img: "/assets/img/product/doner1.jpg",
        desc: "Özel soslu iskender döner",
        price: "₺74,90"
    },
]; 