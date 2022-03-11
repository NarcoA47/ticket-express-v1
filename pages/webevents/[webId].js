import Layout from "../../components/Layout";
import WebCard from "../../components/WebCard";
import EventLayout from "../../components/EventLayout";
import LoadingPage from "../../components/LoadingPage";
import { getPaths, getPropData } from "../../utilities/functions";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// const DummyData = [
//   {
//     image: "/img/event5.jpg",
//     title: "Come Dine With Me",
//     date: "6th Dec, 2022",
//     time: "09:00",
//     path: "come-dine-with-me",
//     price: 2,
//     desc: `This is a get-together activity spiced with lessons from Bank of
//   Zambia facilitators on financial discipline and music from our
//   beloved singers including Agents of Hope, Nathando, and Assurance
//   Accapella`,
//   },
// ];

// const staticProps = {
//   image,
//   title,
//   date,
//   time,
//   path,
//   price,
//   desc,
// }

export default function WebEvent() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);
  // Router and PageName Logic
  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    getPropData("webevents", `${path}`).then((value) => {
      setProps(value);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.image === undefined) return;
    setLoading(false);
  }, [props.image]);

  return !loading ? (
    <Layout>
      <EventLayout price={props.price}>
        <WebCard
          desc={props.desc}
          image={props.image ? props.image : "/fuck"}
          title={props.title}
          date={props.date}
          time={props.time}
          price={props.price}
        />
      </EventLayout>
    </Layout>
  ) : (
    <LoadingPage />
  );
}

// export async function getStaticProps(context) {
//   const path = context.params.webId;
//   const props = await getPropData("webevents", `${path}`);
//   if (!props.length > 0) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     // props: DummyData[0],
//     props: props[0],
//   };
// }

export async function getStaticPaths() {
  // fetch pages from firebase database
  const paths = await getPaths("webevents");
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
