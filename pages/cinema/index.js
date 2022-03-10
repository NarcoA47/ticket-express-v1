import { db, collection, getDocs, orderBy, query } from "../../firebase";
import CarouselCard from "../../components/CarouselCard";
import Layout from "../../components/Layout";
import { getProps } from "../../utilities/functions";

const cinema = ({ props }) => {
  return (
    <Layout>
      <div className="two_column_grid">
        {props.map((prop) => (
          <CarouselCard
            cinema
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
  );
};

export default cinema;

export async function getStaticProps() {
  const props = await getProps("cinema", 10);
  if (!props.length > 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { props },
  };
}
