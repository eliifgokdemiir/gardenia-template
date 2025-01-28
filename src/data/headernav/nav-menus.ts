const nav_menus_list = [
  {
    id:1,
    link: '/',
    title: 'Anasayfa',
    hasDropdown: false,
    megamenu: false,
    /*dropdownItems: [
      { link: '/', title: 'Home Style 01' },
      { link: '/home-2', title: 'Home Style 02' },
      { link: '/home-3', title: 'Home Style 03' },
      { link: '/home-4', title: 'Home Style 04' },
      { link: '/home-5', title: 'Home Style 05' },
    ]*/
  },
  {
    id:2,
    link: '/service',
    title: 'Hizmetler',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/service', title: 'Döner' },
      { link: '/service-details', title: 'Pastane' },
    ]
  },
  {
    id:3,
    link: '/shop',
    title: 'Ürünler',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Shop' },
      { link: '/shop-details', title: 'Shop Details' },
      { link: '/wishlist', title: 'Wishlist' },
      { link: '/cart', title: 'Cart' },
      { link: '/checkout', title: 'Checkout' },
    ]
  },
  {
    id:4,
    link: '/about',
    title: 'Hakkımızda',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/blog', title: 'Blog' },
      { link: '/blog-details', title: 'Blog Details' },
    ]
  },
  /*{
    id:5,
    link: '/about',
    title: 'Pages',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/about', title: 'About' },
      { link: '/portfolio', title: 'Portfolio' },
      { link: '/portfolio-details', title: 'Portfolio Details' },
      { link: '/team', title: 'Team' },
      { link: '/team-details', title: 'Team Details' },
      { link: '/faq', title: 'FAQ' },
      { link: '/login', title: 'Login' },
      { link: '/register', title: 'Register' },
      { link: '/error-page', title: '404 Page' },
    ]
  },*/
  {
    id:6,
    link: '/contact',
    title: 'İletişim',
  },
]

export default nav_menus_list;