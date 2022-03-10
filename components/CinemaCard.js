import Head from "next/head";
import Image from "next/image";

function CinemaCard({
  cinema,
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
            src={image}
            alt="Web event image"
            layout="fill"
            objectFit={cinema && "contain"}
            priority
          />
        </div>
        <div className="details">
          <h1 className="title">{title}</h1>
          <div className="flex justify-between">
            <p className="genre">{genre}</p>
            <p className="rating">{rating}</p>
            <p className="duration">{duration}</p>
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
