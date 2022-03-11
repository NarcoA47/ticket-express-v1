import { useEffect, useState } from "react";
import { getProps } from "../../utilities/functions";
import Layout from "../../components/Layout";
import LoadingPage from "../../components/LoadingPage";
import CarouselCard from "../../components/CarouselCard";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function SportsPage() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);

  useEffect(() => {
    getProps("sports", " ", 10).then((value) => {
      setProps(value);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Catch all local stadium games and events of the sports you love.</h2>
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
                  <Link key={prop.id} passHref href={`/sports/${prop.path}`}>
                    <CarouselCard image={prop.image} title={prop.title} />
                  </Link>
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
    </>
  );
}
