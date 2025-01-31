export type PastaneProduct = {
    id: number;
    title: string;
    img: string;
    desc: string;
    price: string;
};

export const pastryProducts: PastaneProduct[] = [
    {
        id: 1,
        title: "Meyveli Pasta",
        img: "/assets/img/product/meyvelipasta.jpg",
        desc: "Taze mevsim meyveleriyle hazırlanmış nefis pasta",
        price: "₺149,90"
    },
    {
        id: 2,
        title: "Çikolatalı Sufle",
        img: "/assets/img/product/sufle.jpg",
        desc: "Sıcak çikolata sosuyla servis edilen sufle",
        price: "₺59,90"
    },
    {
        id: 3,
        title: "Çikolatalı Pasta",
        img: "/assets/img/product/pasta.jpg",
        desc: "Çikolata parçacıklı kremalı pasta",
        price: "₺59,90"
    },
    {
        id: 4,
        title: "Çilekli Pasta",
        img: "/assets/img/product/pasta1.jpg",
        desc: "Vanilya kremalı çilekli pasta",
        price: "₺59,90"
    },
   
]; 