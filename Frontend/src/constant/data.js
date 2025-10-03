// For Navabr & Sidebar

const navLinks = [
    {
        text: "Home",
        path: "/"
    },
    {
        text: "Shop",
        path: "/shop"
    },
    {
        text: "Blog",
        path: "/blog"
    },
]

// For Navabr & Sidebar

// For Cart box
const links = [
    {
        text: "Cart",
        path: "/cart",
    },
    {
        text: "Checkout",
        path: "/checkout",
    },
];

// For Cart box-

// For Quick-filterSection

import quickFilterSecCardImg1 from "/assets/homePage/Quick-Filter-Section/1ea724daba78a72e8bec8a6eb2b3e0ed.png";
import quickFilterSecCardImg2 from "/assets/homePage/Quick-Filter-Section/9ad20a7c4b99291aa671c436f669d740 1.png";
import quickFilterSecCardImg3 from "/assets/homePage/Quick-Filter-Section/different-ceramic-empty-plates-bowls 1.png";
import quickFilterSecCardImg4 from "/assets/homePage/Quick-Filter-Section/e9cd8f3425b80812a1e1e9aaaa4d0fb4.png";

const quickFilterSecCardData = [
    {
        image: quickFilterSecCardImg3,
        title: "TableWare",
        value: "tableware",
    },
    {
        image: quickFilterSecCardImg4,
        title: "Home decor",
        value: "homedecor",
    },
    {
        image: quickFilterSecCardImg1,
        title: "Holiday",
        value: "holiday",
    },
    {
        image: quickFilterSecCardImg2,
        title: "Collection",
        value: "collection",
    },
];

// For Quick-Filter-Section

// Best-Seller-Section

import cardImage1 from '/assets/homePage/Best-Sellers-Section/alura-cream-tall-vase.png'
import cardImage2 from '/assets/homePage/Best-Sellers-Section/e327c66bdd7299132da8f4531c54cda7.png'
import cardImage3 from '/assets/homePage/Best-Sellers-Section/holden-vase.png'
import cardImage4 from '/assets/homePage/Best-Sellers-Section/marin-blue-salad-plate.png'
import cardImage5 from '/assets/homePage/Best-Sellers-Section/mercer-grey-bowl.png'
import cardImage6 from '/assets/homePage/Best-Sellers-Section/mercer-low-bowl.png'
import cardImage7 from '/assets/homePage/Best-Sellers-Section/OpheliaVase17inWhiteAVSSS22.png'
import cardImage8 from '/assets/homePage/Best-Sellers-Section/WarrickVase20inWhiteAVSSS22.png'

const cardData = [
    {
        id: 0,
        title: "Small Ecru Ceramic Compote",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage1,
        price: 49.00
    },
    {
        id: 1,
        title: "Warrick White Vase 14",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage2,
        price: 49.00
    },
    {
        id: 2,
        title: "Porcelain Dinner Plate",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage3,
        price: 49.00
    },
    {
        id: 3,
        title: "Warrick White Vase 20",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage4,
        price: 49.00
    },
    {
        id: 4,
        title: "Rounded Dual Handled Vase",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage5,
        price: 49.00
    },
    {
        id: 5,
        title: "Marin White Dinner Plate",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage6,
        price: 49.00
    },
    {
        id: 6,
        title: "Tall Cream Ceramic Vase",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage7,
        price: 49.00
    },
    {
        id: 7,
        title: "Luana Bowl",
        description: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
        image: cardImage8,
        price: 49.00
    },
]

// Best-Seller-Section

// For Blog Post Data

import postCardImage1 from "/assets/blogPage/image 156.png";
import postCardImage2 from "/assets/blogPage/image 154.png";
import postCardImage4 from "/assets/blogPage/image 161.png";
import postCardImage5 from "/assets/blogPage/image 162.png";
import postCardImage6 from "/assets/blogPage/image 168.png";
import postCardImage7 from "/assets/blogPage/image 170.png";
import personIcon from "/assets/Icons/person.svg";

const tags = [
    {
        tag: "Ceramic",
    },
    {
        tag: "Kitchen",
    },
    {
        tag: "Gifts sets",
    },
    {
        tag: "Flower vase",
    },
    {
        tag: "Plate",
    },
    {
        tag: "Kitchen",
    },
];

const categories = [
    {
        text: "Dinnerware",
        totalPosts: 3,
    },
    {
        text: "Ceramic",
        totalPosts: 3,
    },
    {
        text: "Furniture",
        totalPosts: 3,
    },
    {
        text: "Decor Art",
        totalPosts: 3,
    },
];

const postData = [
    {
        postImage: postCardImage1,
        title: "How Can I Use Ceramic When I Decorate?",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
    {
        postImage: postCardImage2,
        title: "The secrets to a Living Room set?",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
    {
        postImage: postCardImage4,
        title: "How to Style a Beautiful House",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
    {
        postImage: postCardImage5,
        title: "The secrets to a Living Room set?",
        description: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
    {
        postImage: postCardImage6,
        title: "Chocolate Clementine Cake Recipe",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
    {
        postImage: postCardImage7,
        title: "Holiday Food Traditions With Moon Family",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
        postOwnerAvatar: personIcon,
        postTime: "Jan 24, 2024",
        postOwnerName: "Brian Clark",
    },
]

// For Blog Post Data

// For Cart Products

import cartItem1 from '/assets/cartPage/c4335f5f330dbeec64ad59bf6a0b4fd4.png'
import cartItem2 from '/assets/cartPage/julo-blue-salad-plate.png'
import cartItem3 from '/assets/cartPage/valo-matte-white-vase.png'


const cartItems = [{
    id: 3,
    image: cartItem3,
    name: "Porcelain Dinner Plate",
    price: 70,
},
{
    id: 1,
    image: cartItem1,
    name: "Porcelain Dinner Plate (27cm)",
    price: 59,
},
{
    id: 2,
    image: cartItem2,
    name: "Ophelia Matte Natural  Vase",
    price: 168,
},

];

// For Cart Products

// For Dropdown

const sortOptions = [
    {
        text: "High-To-Low",
        value: "high"
    },
    {
        text: "Low-To-high",
        value: "low"
    },
    {
        text: "Latest",
        value: "latest"
    },
]

// For Dropdown

// For Shop Page
const priceRange = [
    {
        text: "$0 - $10",
    },
    {
        text: "$10 - $50",
    },
    {
        text: "$50 - $100",
    },
    {
        text: "$100 - $200",
    },
    {
        text: "> $200",
    },
];
// For Shop Page

// For Footer

const footerLinks = [
    {
        title: "About us",
        links: ["Mission", "Our team", "Awards", "Testimonials", "Privacy policy"],
    },
    {
        title: "Services",
        links: [
            "Web design",
            "Web development",
            "Mobile design",
            "UI/UX design",
            "Branding design",
        ],
    },
    {
        title: "Portfolio",
        links: [
            "Corporate websites",
            "E-commerce",
            "Mobile apps",
            "Landing pages",
            "UI/UX projects",
        ],
    },
];

// For Footer


export { navLinks, footerLinks, links, quickFilterSecCardData, cardData, tags, categories, postData, cartItems, priceRange, sortOptions }