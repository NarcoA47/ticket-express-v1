import Layout from "../../components/Layout";
import EventCard from "../../components/EventCard";
import EventLayout from "../../components/EventLayout";
import LoadingPage from "../../components/LoadingPage";
import { getPropData } from "../../utilities/functions";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function WebEvent() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);
  // Router and PageName Logic
  const router = useRouter();
  const path = router.asPath.split("/").at(-1);

  useEffect(() => {
    getPropData("events", `${path}`).then((value) => {
      setProps(value[0]);
      setLoading(false);
    });
  }, [path]);

  useEffect(() => {
    if (props.image === undefined) return;
    setLoading(false);
  }, [props.image]);

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
            <EventLayout price={props.price}>
              <EventCard
                desc={props.description}
                image={props.image}
                title={props.title}
                date={props.date}
                time={props.time}
                price={props.price}
                location={props.location}
              />
            </EventLayout>
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
