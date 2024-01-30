
import { StaticImageData } from "next/image"
import image1 from "../assets/collections/winter/image (1).jpg"
import image2 from "../assets/collections/winter/image (2).jpg"
import image3 from "../assets/collections/winter/image (3).jpg"
import image4 from "../assets/collections/winter/image (4).jpg"
import image5 from "../assets/collections/winter/image (5).jpg"
import image6 from "../assets/collections/winter/image (6).jpg"
import image7 from "../assets/collections/winter/image (7).jpg"
import image8 from "../assets/collections/winter/image (8).jpg"
import image9 from "../assets/collections/winter/image (9).jpg"
import image10 from "../assets/collections/winter/image (10).jpg"
import image11 from "../assets/collections/winter/image (11).jpg"
import image12 from "../assets/collections/winter/image (12).jpg"
import image13 from "../assets/collections/winter/image (13).jpg"

interface Winter {
     image: StaticImageData,
     call?: number,
}
export const winterProduct: Winter[] = [
     { image: image1 },
     { image: image2, },
     {
          image: image12,
          call: 1,
     },
     { image: image4 },
     { image: image5 },
     { image: image6 },
     { image: image7 },
     { image: image8, call: 1, },
     { image: image9 },
     { image: image10 },
     { image: image11, call: 1, },
     { image: image3 },
     { image: image13 },
]