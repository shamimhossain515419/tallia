import { StaticImageData } from "next/image";
import image1 from "../assets/collections/summer/image1.jpg"
import image2 from "../assets/collections/summer/image2.jpg"
import image3 from "../assets/collections/summer/image3.jpg"
import image4 from "../assets/collections/summer/image4.jpg"
import image5 from "../assets/collections/summer/image5.jpg"
import image6 from "../assets/collections/summer/image6.jpg"
import image7 from "../assets/collections/summer/image7.jpg"
import image8 from "../assets/collections/summer/image8.jpg"
import image9 from "../assets/collections/summer/image9.jpg"
import image10 from "../assets/collections/summer/image10.jpg"
import image11 from "../assets/collections/summer/image11.jpg"
import image12 from "../assets/collections/summer/image12.jpg"
import image13 from "../assets/collections/summer/image13.jpg"
import image14 from "../assets/collections/summer/image14.jpg"
import image15 from "../assets/collections/summer/image15.jpg"

interface Summer {
     image: StaticImageData,
     call?: number

}
export const summer: Summer[] = [
     { image: image1, call: 1 },
     { image: image2, call: 1 },
     { image: image3 },
     { image: image4 },
     { image: image5, call: 1 },
     { image: image6, call: 1 },
     { image: image7, call: 1 },
     { image: image8, call: 1 },
     { image: image9, call: 1 },
     { image: image10, call: 1 },
     { image: image11, call: 1 },
     { image: image12, call: 1 },
     { image: image13, call: 1 },
     { image: image14, call: 1 },
     { image: image15, call: 1 },
]