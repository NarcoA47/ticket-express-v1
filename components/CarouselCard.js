import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

/* Capitalize every word: 
  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
*/

const CarouselCard = ({ title, image, rating, cinema }) => {
  return (
    <div>
      <div className="carousel_container">
        {/* Image */}
        <motion.div
          className={`image rounded-md cursor-pointer overflow-hidden ${
            cinema && "cinema_image"
          }`}
          whileHover={{ scale: 1.01, transition: { delay: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="rounded-md"
            objectFit={cinema && "contain"}
            priority
            // placeholder="blur"
          />
        </motion.div>
        {/* Rating */}
        {cinema && (
          <p className="absolute top-0 flex items-center p-1.5 bg-purple-50 text-xs rounded-br-md">
            <Icon icon="typcn:star" inline={false} className="pr-0.5 text-sm" />
            {rating}
          </p>
        )}
      </div>
      <p className="text-lm text-center font-semibold px-2 mb-4">{title}</p>
    </div>
  );
};

export default CarouselCard;
