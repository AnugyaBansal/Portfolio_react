//this file will act as a data file or you can say will act as a api and we will fetch our this api our this data inside our workcard.js file and we will import or render this file inside our work.js file 

import pro1 from "../assets/project1.jpeg"
import pro2 from "../assets/project2.jpeg"
import pro3 from "../assets/project3.jpeg"
import pro4 from "../assets/project4.jpeg"
import pro5 from "../assets/project5.jpeg"
const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "E-Commerce Website Design",
        text: "Tech Stack: Javascript, Node.js, MongoDB. Developed the backend of an E-commerce a website with Restful APIs like create user, add products, create and update orders. used JWT for authentication and authorization. Used AWS S3 for storing images, Bcrypt as a security tool.",
        view: "https://github.com/AnugyaBansal/Project5_Products-Management.git"
    },
    {
        imgsrc: pro2,
        title: "Book Management",
        text: "Tech Stack: Javascript, Node Js, MongoDB, AWS - S3 Developed the backend of a website like Bookswagon for user registration, user login, books publishing, book listing, book reviews book rating, after authorization the user can edit his books.",
        view: "https://github.com/AnugyaBansal/Project-3-Book-Management.git"
    },
    {
        imgsrc: pro3,
        title: "URL-Shortner",
        text: "Tech Stack: Javascript,Node.js, MongoDB Developed the backend of a website like TinyURL which shortens along URL using the npm package shortid. Used Redis, and cashing to improve user performance",
        view: "https://github.com/AnugyaBansal/Url-Shortner.git"
    },
    {
        imgsrc: pro4,
        title: "Open-to-Intern",
        text: "Tech Stack: Node.js, MongoDB, Javascript In this project, employers can select candidates based on colleges and students can register as OPEN TO INTERNSHIP.",
        view: "https://github.com/AnugyaBansal/Project2_Open-to-Intern.git"
    },
    {
        imgsrc: pro5,
        title: "Blogging Site",
        text: "Tech Stack: Node.js, MongoDB, Javascript This Project included login, Authentication, and authorization",
        view: "https://github.com/AnugyaBansal/Project1.git"
    }
]

export default ProjectCardData;