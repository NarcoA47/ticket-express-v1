import Image from "next/image";
import CinemaCard from "../../components/CinemaCard";
import Layout from "../../components/Layout";
import { getMoreDocs, getPaths, getPropData } from "../../utilities/functions";
import { db, getDocs, collection, query, where } from "../../firebase";
import EventLayout from "../../components/EventLayout";

export default function cinemaDynamic({ props, moreProps }) {
  console.log(props, moreProps);;
  return (
    <Layout>
      <EventLayout
        field="cinema"
        path={props.path}
        price={props.price}
        title={props.title}
        moreProps={moreProps}
      >
        <CinemaCard
          image={props.image}
          title={props.title}
          genre={props.genre}
          path={props.path}
          duration={props.duration}
          cast={props.cast}
          description={props.desc}
          rating={props.rating}
          likes={props.likes}
          price={props.price}
        />
      </EventLayout>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const path = context.params.cinemaId;
  const prop = await getPropData("cinema", `${path}`);
  if (!prop.length > 0) {
    return {
      notFound: true,
    };
  }
  const moreProps = await getMoreDocs("cinema", `${path}`, 4);

  const props = { props: { ...prop[0] }, moreProps: { ...moreProps } };
  return {
    // props: DummyData[0],
    props: { props },
  };
}

export async function getStaticPaths() {
  // fetch pages from firebase database
  const paths = await getPaths("cinema");
  console.log("====================================");
  console.log(paths);
  console.log("====================================");
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
