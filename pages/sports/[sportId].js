import Layout from "../../components/Layout";
import SportsCard from "../../components/SportsCard";
import EventLayout from "../../components/EventLayout";
import LoadingPage from "../../components/LoadingPage";
import { AnimatePresence, motion } from "framer-motion";

export default function WebEvent() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);
  // Router and PageName Logic
  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    getPropData("sports", `${path}`).then((value) => {
      setProps(value);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <SportsCard
                desc={props.desc}
                image={props.image ? props.image : "/fuck"}
                title={props.title}
                date={props.date}
                time={props.time}
                location={props.location}
                price={props.price}
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

// export async function getStaticProps(context) {
//   const path = context.params.webId;
//   const props = await getPropData("sports", `${path}`);
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
  const paths = await getPaths("sports");
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
