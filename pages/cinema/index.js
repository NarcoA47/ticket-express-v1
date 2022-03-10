import { db, collection, getDocs, orderBy, query } from "../../firebase";
import CarouselCard from "../../components/CarouselCard";
import Layout from "../../components/Layout";

const cinema = ({ cinema }) => {
  return (
    <Layout>
      <div className="grid grid-col-2">
        {cinema.map((item) => (
          <CarouselCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.desc}
            rating={item.rating}
            likes={item.likes}
          />
        ))}
      </div>
    </Layout>
  );
};

export default cinema;

export async function getStaticProps() {
  const cinema = [];

  const cinemaRef = await getDocs(
    query(collection(db, "cinema"), orderBy("rating", "desc"))
  );
  cinemaRef.forEach((doc) => {
    cinema.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const data = { cinema };

  return {
    props: data,
  };
}
