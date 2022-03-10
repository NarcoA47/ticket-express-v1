import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getProps } from "../utilities/functions";
import CarouselCard from "../components/CarouselCard";
import LoadingPage from "../components/LoadingPage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cinemaProps, setCinemaProps] = useState([]);
  const [sportsProps, setSportsProps] = useState([]);
  const [webProps, setWebProps] = useState([]);
  const [eventsProps, setEventsProps] = useState([]);

  useEffect(() => {
    getProps("sports", 5).then((value) => setSportsProps(value));
    getProps("cinema", 5).then((value) => setCinemaProps(value));
    getProps("events", 5).then((value) => setEventsProps(value));
    getProps("web", 5).then((value) => {
      setWebProps(value);
      setLoading(false);
    });
  }, []);

  return !loading ? (
    <Layout>
      <div className="movie_carousel carousel p-5">
        <div className="border-b border-gray-200">
          <h2>Movies Currently airing in cinemas near you.</h2>
          <div className=" flex w-full overflow-x-scroll">
            {cinemaProps.map((item) => (
              <CarouselCard
                cinema
                  path={item.path}
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200">
          <h2>Latest Sports events from teams and players you love.</h2>
          <div className=" flex w-full overflow-x-scroll">
            {sportsProps.map((item) => (
              <CarouselCard
                path={item.path}
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200">
          <h2>House Parties and Concerts we think you&#39;d love.</h2>
          <div className=" flex w-full overflow-x-scroll">
            {eventsProps.map((item) => (
              <CarouselCard
                path={item.path}
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200">
          <h2>Webinars and web-events from influencers you know.</h2>
          <div className=" flex w-full overflow-x-scroll">
            {webProps.map((item) => (
              <CarouselCard
                path={item.path}
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <LoadingPage />
  );
}

// export async function getStaticProps() {
//   const cinema = [];
//   const events = [];
//   const sports = [];
//   const web = [];

//   const cinemaRef = await getDocs(
//     query(collection(db, "cinema"), orderBy("rating", "desc"))
//   );
//   cinemaRef.forEach((doc) => {
//     cinema.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });

//   // const eventsRef = await getDocs(
//   //   query(collection(db, "events"), orderBy("likes", "desc"))
//   // );
//   // eventsRef.forEach((doc) => {
//   //   events.push({
//   //     id: doc.id,
//   //     ...doc.data()
//   //   });
//   // });

//   const data = { cinema, events, sports, web };

//   return {
//     props: data,
//   };
// }
