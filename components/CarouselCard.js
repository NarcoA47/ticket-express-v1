import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

/* Capitalize every word: 
  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
*/

const CarouselCard = ({ path, title, image, rating, cinema }) => {
  return (
    <div className="flex flex-col text-clip">
      <Link passHref href={`/cinema/${path}`}>
        <div className="relative m-3 rounded-t-md max-w-[11.5rem] w-[36vw]">
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
            />
          </motion.div>
          {/* Rating */}
          {cinema && (
            <p className="absolute top-0 flex items-center p-1.5 bg-purple-50 text-xs rounded-br-md">
              <Icon
                icon="typcn:star"
                inline={false}
                className="pr-0.5 text-sm"
              />
              {rating}
            </p>
          )}
        </div>
      </Link>
      <Link passHref href={`/cinema/${path}`}>
        <p className="text-lm text-center font-semibold px-2 mb-4">{title}</p>
      </Link>
    </div>
  );
};

export default CarouselCard;