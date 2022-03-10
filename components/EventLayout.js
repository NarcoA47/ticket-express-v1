import Image from "next/image";
import Link from "next/link";
import { useFlutterwave } from "flutterwave-react-v3";
import { getMoreDocs } from "../utilities/functions";

function EventLayout({ path, price, title }) {
  const [moreDocs, setMoreDocs] = useState([]);
  const [config, setConfig] = useState({});

  const fname = "Farai";
  const username = "Farai Rubvuta";
  const email = "farairubvuta@gmail.com";

  useEffect(() => {
    setConfig(getFlutterwaveConfig(username, email, title, price));
    setMoreDocs(getMoreDocs("webevents", `${path}`, 4));
  }, [path, price, title]);

  const paymentHandler = useFlutterwave(config);

  return (
    <>
      <div className="ticket">
        <input
          type="button"
          value="Buy Ticket"
          className="btn hover:bg-orange-500"
          onClick={paymentHandler}
        />
      </div>

      <div className="divider">
        <p>More Events</p>
      </div>

      <div className="card-container">
        {moreDocs?.map((doc) => (
          <Link key={doc.id} passHref href={doc.path}>
            <div className="card-preview">
              <div className="image">
                <Image
                  src={doc.image}
                  alt="event preview image"
                  layout="fill"
                />
              </div>
              <div className="details preview-details">
                <div className="date_and_time">
                  <p className="date">{doc.date}</p>
                </div>
                <h2 className="title">{doc.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default EventLayout;
