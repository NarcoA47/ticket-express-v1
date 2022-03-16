import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/CarouselCard.module.css";

/* Capitalize every word: 
  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
*/

const CarouselCard = ({ field, path, title, image, rating, cinema }) => {
  const link = `/${field}/${path}`;
  return (
    <Link href={link} passHref>
      <div className={styles.master_container}>
        <div className={styles.container}>
          {/* Image */}
          <motion.div
            className={`image ${styles.card_face} ${cinema && "cinema_image"}`}
            whileHover={{ scale: 1.01, transition: { delay: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              priority
              // placeholder="blur"
            />
          </motion.div>
          {/* Rating */}
          {cinema && (
            <p className={styles.rating}>
              <Icon
                icon="typcn:star"
                inline={false}
                className="pr-0.5 text-sm"
              />
              {rating}
            </p>
          )}
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
};

export default CarouselCard;
