import { StaticImageData } from "next/image";

export interface Product {
     id: string | number
     name: string;
     subtitle?: string;
     image1: StaticImageData | string;
     image2: StaticImageData | string;
     image3: StaticImageData | string;
     image4: StaticImageData | string;
     color?: string;
     path: string;
}