import { useEffect, useState } from "react";
import { getProps } from "../../utilities/functions";
import Layout from "../../components/Layout";
import LoadingPage from "../../components/LoadingPage";
import CarouselCard from "../../components/CarouselCard";
import { AnimatePresence, motion } from "framer-motion";

export default function WebEventsPage() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);

  useEffect(() => {
    getProps("cinema", " ", 10).then((value) => {
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
                  cinema
                  field="cinema"
                  path={prop.path}
                  key={prop.id}
                  image={prop.image}
                  title={prop.title}
                  rating={prop.rating}
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
}
// export async function getStaticProps() {
//   const props = await getProps("cinema", " ", 10);
//   if (!props.length > 0) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { props, field: "cinema" },
//   };
// }