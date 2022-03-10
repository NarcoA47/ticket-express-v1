import { collection, getDocs, orderBy, query, db } from "../../firebase";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { getProps } from "../../utilities/functions";

function WebEventsPage() {
   const [loading, setLoading] = useState(true);
   const [props, setProps] = useState([]);
 
   useEffect(() => {
     getProps('webevents', 10).then((value) => {
       setProps(value);
       setLoading(false);
     });
   }, []);

   return !loading ? (
      <Layout></Layout>
   ) : (
      <div>Ghost UI</div>
   )
}

export default WebEventsPage;

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
 