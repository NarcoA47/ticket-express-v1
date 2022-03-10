import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CarouselCard from "../../components/CarouselCard";
import Layout from "../../components/Layout";
import LoadingPage from "../../components/LoadingPage";
import { getProps } from "../../utilities/functions";

function Sports() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);

  useEffect(() => {
    getProps("webevents", 10).then((value) => {
      setProps(value);
      setLoading(false);
    });
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      {!loading ? (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Layout>
            <div className="two_column_grid">
              {props.map((prop) => (
                <CarouselCard
                  key={prop.id}
                  id={prop.id}
                  image={prop.image}
                  title={prop.title}
                  description={prop.desc}
                  rating={prop.rating}
                  likes={prop.likes}
                />
              ))}
            </div>
          </Layout>
        </motion.div>
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

  !loading ? (
    <Layout>
      <div className="movie_carousel carousel p-5">
        <div className="border-b border-gray-200">
          <h2>
            Catch all local stadium games and events of the sports you love.
          </h2>
          <div className=" flex w-full overflow-x-scroll">
            {sportsProps.map((item) => (
              <CarouselCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
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

export default Sports;
