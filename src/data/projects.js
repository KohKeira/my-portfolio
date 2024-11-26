import digitalSage from "/src/assets/images/digital-sage.jpg";
import portfolioV1 from "/src/assets/images/portfolio_v1.jpg";
export const projects = [
  {
    title: "Shopify",
    link: "https://github.com/KohKeira/appsec-shopify",
    thumbnailType: "video",
    thumbnail: "https://www.youtube.com/embed/Q7_-Mh7Rr4g?si=fHQcS7PJag6DOwoK",
    description:
      "This is an E-commerce project with Role-Based Access Control (RBAC). It focuses on application security, mainly on OWASP pratices, including Broken Object Level Access and Broken Authenctication.",
    tags: ["laravel", "react", "tailwind", "mongodb"],
  },
  {
    title: "Movie Hunt",
    link: "",
    thumbnailType: "video",
    thumbnail: "https://www.youtube.com/embed/lsDgP5Zk62o?si=gcZZI4KS4-H7LeIf",
    description:
      "This is a movie review website that uses AWS services, including API Gateway and Simple Notification Service. It also uses WebSocket API for two-way communication between client and server.",
    tags: ["aws", "react", "bootstrap"],
  },
  {
    title: "FoodKaki",
    link: "",
    thumbnailType: "video",
    thumbnail: "https://www.youtube.com/embed/7UN-Wv8CQmk?si=a996R8lWkPejOvTa",
    description:
      "This mobile application promotes food sustainability by tracking food quantity and expiry date. It also allows neigbours to give away food items to reduce food wastage.",
    tags: ["flutter", "dart", "firebase"],
  },
  {
    title: "Digital Sage",
    link: "https://github.com/KohKeira/product-management.git",
    thumbnailType: "image",
    thumbnail: digitalSage,
    description:
      "This website allows admins to create, read, update and delete (CRUD) products so that they can take stock of what they have in the inventory.",
    tags: ["html", "css", "javascript", "mysql"],
  },
  {
    title: "First Portfolio",
    link: "https://github.com/KohKeira/KohKeira.github.io.git",
    thumbnailType: "image",
    thumbnail: portfolioV1,
    description:
      "This was my first website, created in Secondary Four for my EAE application to Temasek Polytechnic. It was an exciting introduction to web development.",
    tags: ["html", "css"],
  },
];
