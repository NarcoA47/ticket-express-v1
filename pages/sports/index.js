import { useEffect, useState } from "react";
import CarouselCard from "../../components/CarouselCard";
import Layout from "../../components/Layout";
import LoadingPage from "../../components/LoadingPage";
import { getProps } from "../../utilities/functions";

function Sports() {
  const [loading, setLoading] = useState(true);
  const [sportsProps, setSportsProps] = useState([]);

  useEffect(() => {
    getProps("sports", 10).then((value) => {
      setSportsProps(value);
      setLoading(false);
    });
  }, []);

  return !loading ? (
    <Layout>
      <div className="movie_carousel carousel p-5">
        <div className="border-b border-gray-200">
          <h2>Catch all local stadium games and events of the sports you love.</h2>
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
