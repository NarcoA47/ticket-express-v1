import CinemaCard from "../../components/CinemaCard";
import Layout from "../../components/Layout";
import { getPaths, getPropData, getProps } from "../../utilities/functions";
import EventLayout from "../../components/EventLayout";

export default function cinemaDynamic({ props, moreProps, field }) {
  console.log(props, moreProps);
  return (
    <Layout>
      <EventLayout
        field={field}
        path={props.path}
        price={props.price}
        title={props.title}
        moreProps={moreProps}
      >
        <CinemaCard
          cinema
          cast={props.cast}
          desc={props.desc}
          duration={props.duration}
          genre={props.genre}
          image={props.image}
          rating={props.rating}
          title={props.title}
          price={props.price}
          likes={props.likes}
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
  const moreProps = await getProps("cinema", `${path}`, 4);

  const props = {
    props: { ...prop[0] },
    moreProps: { ...moreProps },
    field: "cinema",
  };
  return {
    // props: DummyData[0],
    props: { props },
  };
}

export async function getStaticPaths() {
  // fetch pages from firebase database
  const paths = await getPaths("cinema");
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
