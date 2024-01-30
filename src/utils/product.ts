
import { Product } from "@/types/Product";
import image1_1 from "../assets/product/1.1.jpg"
import image1_2 from "../assets/product/1.2.jpg"
import image2_1 from "../assets/product/2 (1).jpg"
import image2_2 from "../assets/product/2 (2).jpg"
import image2_3 from "../assets/product/2 (3).jpg"
import image3_1 from "../assets/product/3 (1).jpg"
import image3_2 from "../assets/product/3 (2).jpg"
import image3_3 from "../assets/product/3 (3).jpg"

export const products: Product[] = [
     {
          id: 1,
          name: "VENEZIA SPORT COAT",
          subtitle: "Flannel Plaid Slim Sport Coats",
          image1: image1_1,
          image2: "",
          image3: "",
          image4: "",
          color: "Brown Plaid",
          path: '/',
     },
     {
          id: 2,
          name: "VANES COAT",
          subtitle: "Wool Blend Overcoat",
          image1: image2_1,
          image2: image2_2,
          image3: image2_3,
          image4: "",
          color: " Vicuna",
          path: '/',
     },
     {
          id: 3,
          name: "VENEZIA SPORT COAT",
          subtitle: "lannel Plaid Slim Sport Coats",
          image1: image3_1,
          image2: image3_2,
          image3: image3_3,
          image4: "",
          color: "Brown Plaid",
          path: '/',
     },
];
