import Layout from "../../components/Layout";
import WebCard from "../../components/WebCard";
import {
  getPaths,
  getPropData,
} from "../../utilities/functions";
import { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage";
import EventLayout from "../../components/EventLayout";

const DummyData = [
  {
    image: "/img/event5.jpg",
    title: "Come Dine With Me",
    date: "6th Dec, 2022",
    time: "09:00",
    path: "come-dine-with-me",
    price: 2,
    desc: `This is a get-together activity spiced with lessons from Bank of
  Zambia facilitators on financial discipline and music from our
  beloved singers including Agents of Hope, Nathando, and Assurance
  Accapella`,
  },
];

export default function WebEvent({
  image,
  title,
  date,
  time,
  path,
  price,
  desc,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (image === undefined) return;
    setLoading(false);
  }, [image]);

  return !loading ? (
    <Layout>
      <EventLayout field='webevents' path={path} price={price} title={title}>
        <WebCard
          desc={desc}
          image={image ? image : "/fuck"}
          title={title}
          date={date}
          time={time}
          price={price}
        />
      </EventLayout>
    </Layout>
  ) : (
    <LoadingPage />
  );
}

export async function getStaticProps(context) {
  const path = context.params.webId;
  const props = await getPropData("webevents", `${path}`);
  if (!props.length > 0) {
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
  const paths = await getPaths("webevents");
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
