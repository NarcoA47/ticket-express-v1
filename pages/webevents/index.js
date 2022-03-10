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
}

// export async function getStaticProps() {
//    const props = await getProps("webevents", 10);
//    if (!props.length > 0) {
//      return {
//        notFound: true,
//      };
//    }
//    return {
//      props: { props },
//    };
// }

// export async function getStaticProps() {
//    const webevents = [];

//    const webeventsRef = await getDocs(
//      query(collection(db, "webevents"), orderBy("rating", "desc"))
//    );
//    webeventsRef.forEach((doc) => {
//      webevents.push({
//        id: doc.id,
//        ...doc.data(),
//      });
//    });

//    const data = { webevents };

//    return {
//      props: data,
//    };
//  }
