import Layout from "../../components/Layout";
import { collection, getDocs, query, where, db } from "../../firebase";

const sportsDynamic = () => {
  return (
    <Layout>
      <div>Dynamic Page</div>
    </Layout>
  );
};

export default sportsDynamic;

export async function getStaticProps(context) {
  const document = [];

  const path = context.params.webId;

  const matchingDocs = await getDocs(
    query(collection(db, "sports"), where("path", "==", `${path}`))
  );
  matchingDocs.forEach((doc) => document.push({ ...doc.data() }));

  if (!document.length > 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: document[0],
  };
}

export async function getStaticPaths() {
  // fetch pages from firebase database
  const paths = await getPaths('webevents');
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}
