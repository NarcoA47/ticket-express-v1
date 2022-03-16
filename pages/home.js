import { useEffect, useState } from "react";
import { getProps } from "../utilities/functions";
import Layout from "../components/Layout";
import CarouselCard from "../components/CarouselCard";
import LoadingPage from "../components/LoadingPage";
import { AnimatePresence, motion } from "framer-motion";
import NoItems from "../components/NoItems";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cinemaProps, setCinemaProps] = useState([]);
  const [sportsProps, setSportsProps] = useState([]);
  const [webProps, setWebProps] = useState([]);
  const [eventsProps, setEventsProps] = useState([]);

  useEffect(() => {
    getProps("sports", " ", 5).then((value) => setSportsProps(value));
    getProps("cinema", " ", 5).then((value) => setCinemaProps(value));
    getProps("events", " ", 5).then((value) => setEventsProps(value));
    getProps("webevents", " ", 5).then((value) => {
      setWebProps(value);
      setLoading(false);
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {!loading ? (
        webProps.length === 0 &&
        sportsProps.length === 0 &&
        cinemaProps.length === 0 &&
        eventsProps.length === 0 ? (
          <NoItems />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Layout>
              <div className="movie_carousel carousel p-5">
                {cinemaProps.length > 0 && (
                  <div className="border-b border-gray-200">
                    <h2>Movies Currently airing in cinemas near you.</h2>
                    <div className="scrollable_grid">
                      {cinemaProps.map((item) => (
                        <CarouselCard
                          cinema
                          field="cinema"
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
                )}

                {sportsProps.length > 0 && (
                  <div className="border-b border-gray-200">
                    <h2>
                      Latest Sports events from teams and players you love.
                    </h2>
                    <div className="scrollable_grid">
                      {sportsProps.map((item) => (
                        <CarouselCard
                          field="sports"
                          path={item.path}
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {eventsProps.length > 0 && (
                  <div className="border-b border-gray-200">
                    <h2>House Parties and Concerts we think you&#39;d love.</h2>
                    <div className="scrollable_grid">
                      {eventsProps.map((item) => (
                        <CarouselCard
                          field="events"
                          path={item.path}
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {webProps.length > 0 && (
                  <div className="border-b border-gray-200">
                    <h2>Webinars and web-events from influencers you know.</h2>
                    <div className="scrollable_grid">
                      {webProps.map((item) => (
                        <CarouselCard
                          field="webevents"
                          path={item.path}
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Layout>
          </motion.div>
        )
      ) : (
        <motion.div
          key="loadingPage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
