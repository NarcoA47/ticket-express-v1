import Head from "next/head";
import Image from "next/image";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";

function CinemaCard({
  cast,
  desc,
  duration,
  genre,
  image,
  path,
  rating,
  title,
  price,
}) {
  const fname = "Farai";
  const username = "Farai Rubvuta";
  const email = "farairubvuta@gmail.com";

  const paymentHandler = useFlutterwave(config);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>

      <div className="container">
        <div className="image">
          <Image src={image} alt="Web event image" layout="fill" />
        </div>
        <div className="details">
          <h1 className="title">{title}</h1>
          <div className="flex">
            <p className="genre">{genre}</p>
            <p className="rating">{rating}</p>
            <p className="duration">{duration}</p>
          </div>
          <p className="description">{desc}</p>
          <p className="cast">{cast}</p>
          <p className="price">
            Price: <span>{price}</span>
          </p>
        </div>
        <div className="ticket">
          <button
            type="button"
            className="btn hover:bg-orange-500"
            onClick={() => {
              paymentHandler({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal;
                },
              });
            }}
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
}
export default CinemaCard;
