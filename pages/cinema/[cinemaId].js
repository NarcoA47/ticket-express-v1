import Image from "next/image";
import CinemaCard from "../../components/CinemaCard";
import Layout from "../../components/Layout";
import { getPaths, getPropData } from "../../utilities/functions";
import { db, getDocs, collection, query, where } from "../../firebase";

export default function cinemaDynamic({
  image,
  title,
  genre,
  rating,
  duration,
  desc,
  cast,
  path,
  likes,
  price,
}) {
  return (
    <Layout>
      <CinemaCard
        image={image}
        title={title}
        genre={genre}
        path={path}
        duration={duration}
        cast={cast}
        description={desc}
        rating={rating}
        likes={likes}
        price={price}
      />

      <div className="divider">
        <p>More Events</p>
      </div>

      <div className="card-container">
        <div className="card-preview">
          <div className="image">
            <Image
              src="/img/event5.jpg"
              alt="event preview image"
              layout="fill"
            />
          </div>
          <div className="details preview-details">
            <div className="date_and_time">
              <p className="date">
                26 <span> Dec </span>
              </p>
            </div>
            <h2 className="title">Secret House Party</h2>
          </div>
        </div>

        <div className="card-preview">
          <div className="image">
            <Image
              src="/img/event5.jpg"
              alt="event preview image"
              layout="fill"
            />
          </div>
          <div className="details preview-details">
            <div className="date_and_time">
              <p className="date">
                26 <span> Dec </span>
              </p>
            </div>
            <p className="title">Secret House Party</p>
          </div>
        </div>

        <div className="card-preview">
          <div className="image">
            <Image
              src="/img/event5.jpg"
              alt="event preview image"
              layout="fill"
            />
          </div>
          <div className="details preview-details">
            <div className="date_and_time">
              <p className="date">
                26 <span> Dec </span>
              </p>
            </div>
            <p className="title">Secret House Party</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const path = context.params.cinemaId;
  const props = await getPropData("webevents", `${path}`);
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  if (props[0] === {}) {
    return {
      notFound: true,
    };
  }
  return {
    // props: DummyData[0],
    props: props[0],
  };
}

export async function getStaticPaths() {
  // fetch pages from firebase database
  const paths = await getPaths("cinema");
  console.log('====================================');
  console.log(paths);
  console.log('====================================');
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
