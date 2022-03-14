import { useRouter } from "next/router";
import { useFlutterwave } from "flutterwave-react-v3";
import { getFlutterwaveConfig, getProps } from "../utilities/functions";
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
    .replaceAll("-", " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  const fname = "Farai";
  const username = "Farai Rubvuta";
  const email = "farairubvuta@gmail.com";

  useEffect(() => {
    setConfig(getFlutterwaveConfig(username, email, title, price));
    getProps(`${field}`, `${path}`, 4).then((value) => setProps(value));
  }, [field, path, price, title]);

  const paymentHandler = useFlutterwave(config);

  return (
    <div className={styles.container}>
      {children}
      <div className="ticket">
        <button
          type="button"
          className="btn hover:bg-orange-500"
          onClick={paymentHandler}
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
                className={`image ${cinema && styles.cinema_image} ${
                  styles.more_events_image
                }`}
              >
                <Image
                  src={doc.image}
                  alt="event preview image"
                  layout="fill"
                />
              </div>
              <div className="details preview-details">
                <div className="date_and_time">
                  <p className="date">{doc?.date}</p>
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
