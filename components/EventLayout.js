import { useRouter } from "next/router";
import { useFlutterwave } from "flutterwave-react-v3";
import { getDateString, getFlutterwaveConfig, getProps } from "../utilities/functions";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/EventLayout.module.css";

function EventLayout({ price, children, cinema }) {
  const [config, setConfig] = useState({});
  const [props, setProps] = useState([]);

  // Field and Path Logic
  const router = useRouter();
  const fieldArray = router.asPath.split("/");
  const field = fieldArray[fieldArray.length - 2];
  const pathArray = router.asPath.split("/");
  const path = pathArray[pathArray.length - 1];
  const title = path
    .split("-")
    .join(" ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  const fname = "Farai";
  const username = "Farai Rubvuta";
  const email = "farairubvuta@gmail.com";

  useEffect(() => {
    setConfig(getFlutterwaveConfig(username, email, title, price));
    getProps(`${field}`, `${path}`, 4).then((value) => setProps(value));
  }, [field, path, price, title]);

  const paymentHandler = useFlutterwave(config);

  function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: 54600,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "rose@unsinkableship.com",
        phone_number: "08102909304",
        name: "Rose DeWitt Bukater",
      },
      customizations: {
        title: "The Titanic Store",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  }

  return (
    <div className={styles.container}>
      {children}
      <div className="ticket">
        <script src="https://checkout.flutterwave.com/v3.js"></script>
        <button
          type="button"
          className="btn hover:bg-orange-500"
          onClick={makePayment}
        >
          Buy Ticket
        </button>
      </div>

      <div className="divider">
        <p>More Events</p>
      </div>

      <div className="card-container">
        {props.map((doc) => (
          <Link key={doc?.id} passHref href={`/${field}/${doc.path}`}>
            <div className="card-preview">
              <div
                className={`image ${cinema && 'cinema_image'} ${
                  styles.more_events_image
                }`}
              >
                <Image
                  src={doc.image}
                  alt="event preview image"
                  layout="fill"
                />
              </div>
              <div className={styles.preview_details}>
                <div className="date_and_time">
                  <p className="date">
                    {getDateString(doc.date)?.[0]}
                    <span>{getDateString(doc.date)?.[1]}</span>
                  </p>
                </div>
                <h2 className="title">{doc?.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventLayout;
