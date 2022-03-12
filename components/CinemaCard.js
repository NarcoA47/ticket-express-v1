import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";

function CinemaCard({
  cast,
  desc,
  duration,
  genre,
  image,
  rating,
  title,
  price,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>

      <div className="container">
        <div className="image">
          <Image
            src={image ? image : "/image"}
            alt="Web event image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="details">
          <h1 className="title">{title}</h1>
          <div className="date_and_time">
            <p className="genre">{genre}</p>
            <p className="rating flex items-center">
              <Icon icon="typcn:star" className="mr-1" />
              {rating}
            </p>
            <p className="duration flex items-center">
              {" "}
              <Icon icon="typcn:time" className="mr-1" />
              {duration} mins
            </p>
          </div>
          <p className="description">{desc}</p>
          <p className="cast">{cast}</p>
          <p className="price">
            Price: <span>{price}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default CinemaCard;
