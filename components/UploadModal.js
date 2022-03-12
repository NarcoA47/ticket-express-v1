import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { postTo } from "../utilities/functions";
import { serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import CinemaForm from "./modalComponents/CinemaForm";
import WebForm from "./modalComponents/WebForm";
import styles from "./styles/UploadModal.module.css";
import EventForm from "./modalComponents/EventForm";
import SportForm from "./modalComponents/SportForm";
import { AnimatePresence, motion } from "framer-motion";

const DataModel = {
  cinemaObject: {
    title: "",
    //Lowercase name of Movie. Used for indexing and checking for duplicate movies
    path: "",
    image: "",
    desc: "",
    duration: 1, //in minutes
    rating: 1,
    genre: "",
    director: "",
    cast: "",
    airingAt: [], //Cinemas currently airing the movie
    // Price of the movie depends on which cinema it is airing at
    likes: 1,
    purchases: 1,
  },

  webObject: {
    title: "",
    //Lowercase name of Movie. Used for indexing and checking for duplicate movies
    path: "",
    image: "",
    desc: "",
    date: "", // Date and Time
    time: 1,
    link: "",
    price: 1,
    likes: 1,
    purchases: 1,
  },

  sportsObject: {
    title: "",
    //Lowercase name of Movie. Used for indexing and checking for duplicate movies
    path: "",
    image: "",
    desc: "",
    location: "",
    date: "", // Date and Time
    time: 1,
    price: 1,
    likes: 1,
    purchases: 1,
  },

  eventsObject: {
    type: "", //concert, house-party, event e.g color-fest etc
    title: "",
    //Lowercase name of Movie. Used for indexing and checking for duplicate movies
    path: "",
    image: "",
    desc: "",
    location: "",
    date: "", // Date and Time
    time: 1,
    price: 1,
    likes: 1,
    purchases: 1,
  },
};

export default function UploadModal() {
  //   Global Field Refs
  const filePickerRef = useRef(null);
  const titleRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  //   Cinema Field Refs
  const ratingRef = useRef(null);
  const durationRef = useRef(null);
  const genreRef = useRef(null);
  const castRef = useRef(null);
  const directorRef = useRef(null);
  const airingRef = useRef(new Array());
  //   Event Field Refs
  const typeRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const locationRef = useRef(null);
  //   Web Event Field Refs
  const linkRef = useRef(null);

  //   Post Management states
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fieldValue, setFieldValue] = useState("cinema");

  const uploadPost = async (e) => {
    e.preventDefault();
    if (loading) return;

    //   Post Management Variables
    const title = titleRef?.current?.value;
    const description = descRef?.current?.value;
    const price = Number(priceRef?.current?.value);
    const postedOn = serverTimestamp();
    const path = title?.split(" ").join("-").toLowerCase();
    setLoading(true);

    // Depending on the value, set the Object
    // And Upload it
    switch (fieldValue) {
      case "cinema":
        {
          const object = {
            path,
            title,
            description,
            price,
            postedOn,
            airingAt: airingRef.current.value,
            rating: Number(ratingRef.current.value),
            duration: Number(durationRef.current.value),
            genre: genreRef.current.value,
            cast: castRef.current.value,
            director: directorRef.current.value,
          };
          await postTo(`${fieldValue}`, { ...object }, selectedFile);
          setLoading(false);
          setSelectedFile(null);
        }
        break;

      case "sports":
        {
          const object = {
            path,
            title,
            description,
            price,
            postedOn,
            // date: serverTimestamp(dateRef.current.value),
            date: dateRef.current.value,
            time: timeRef.current.value,
            location: locationRef.current.value,
          };
          await postTo(`${fieldValue}`, { ...object }, selectedFile);
          setLoading(false);
          setSelectedFile(null);
        }
        break;

      case "events":
        {
          const object = {
            path,
            title,
            description,
            price,
            postedOn,
            type: typeRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value,
            location: locationRef.current.value,
            duration: Number(durationRef.current.value),
          };
          await postTo(`${fieldValue}`, { ...object }, selectedFile);
          setLoading(false);
          setSelectedFile(null);
        }
        break;

      case "webevents":
        {
          const object = {
            path,
            title,
            description,
            price,
            postedOn,
            // date: serverTimestamp(dateRef.current.value),
            date: dateRef.current.value,
            time: timeRef.current.value,
            duration: Number(durationRef.current.value),
            link: linkRef.current.value,
          };
          await postTo(`${fieldValue}`, { ...object }, selectedFile);
          setLoading(false);
          setSelectedFile(null);
        }
        break;
      default:
        console.log("====================================");
        console.log("Field Value was invalid => ", fieldValue);
        console.log("====================================");
        break;
    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            onClick={() => setFieldValue("cinema")}
            className={fieldValue === "cinema" ? styles.active : undefined}
          >
            Cinema
          </li>
          <li
            onClick={() => setFieldValue("sports")}
            className={fieldValue === "sports" ? styles.active : undefined}
          >
            Sports
          </li>
          <li
            onClick={() => setFieldValue("events")}
            className={fieldValue === "events" ? styles.active : undefined}
          >
            Events
          </li>
          <li
            onClick={() => setFieldValue("webevents")}
            className={fieldValue === "webevents" ? styles.active : undefined}
          >
            Web
          </li>
        </ul>
      </nav>

      <div className={styles.card}>
        {/*This element is to trick the browser into centering the modal contents.  */}
        <span className="hidden" aria-hidden="true">
          &#8203;
        </span>
        <div className={styles.container}>
          {/* Image Section */}
          <AnimatePresence exitBeforeEnter>
            {selectedFile ? (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="image"
              >
                <Image
                  src={selectedFile}
                  onClick={() => setSelectedFile(null)}
                  layout="fill"
                  alt=""
                  objectFit={fieldValue === "cinema" ? "contain" : "cover"}
                />
              </motion.div>
            ) : (
              <motion.div
                key="cinema"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.iconContainer}
                onClick={() => filePickerRef.current.click()}
              >
                <Icon
                  icon="heroicons-outline:camera"
                  className={styles.icon}
                  aria-hidden="true"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Header */}
          <h3 className={styles.inputHeader}>
            <span>
              <Icon icon="heroicons-outline:arrow-circle-up" inline={true} />
            </span>
            Upload a Photo{" "}
          </h3>

          {/* Upload Logic *THIS IS HIDDEN */}
          <input
            ref={filePickerRef}
            type="file"
            accept="image/*"
            hidden
            onChange={addImageToPost}
          />

          {/* Field Selection */}
          {/* Inputs */}

          <form onSubmit={uploadPost}>
            <AnimatePresence exitBeforeEnter>
              {fieldValue === "cinema" && (
                <motion.div
                  key="cinema"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CinemaForm
                    title={titleRef}
                    rating={ratingRef}
                    duration={durationRef}
                    desc={descRef}
                    genre={genreRef}
                    cast={castRef}
                    director={directorRef}
                    price={priceRef}
                    airing={airingRef}
                  />
                </motion.div>
              )}
              {fieldValue === "sports" && (
                <motion.div
                  key="sports"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SportForm
                    title={titleRef}
                    desc={descRef}
                    date={dateRef}
                    time={timeRef}
                    location={locationRef}
                    price={priceRef}
                  />
                </motion.div>
              )}
              {fieldValue === "events" && (
                <motion.div
                  key="events"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <EventForm
                    type={typeRef}
                    title={titleRef}
                    desc={descRef}
                    date={dateRef}
                    time={timeRef}
                    location={locationRef}
                    duration={durationRef}
                    price={priceRef}
                  />
                </motion.div>
              )}
              {fieldValue === "webevents" && (
                <motion.div
                  key="webevents"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <WebForm
                    title={titleRef}
                    date={dateRef}
                    time={timeRef}
                    desc={descRef}
                    duration={durationRef}
                    link={linkRef}
                    price={priceRef}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.price}>
              <label htmlFor="price">Price: </label>
              <span>K</span>
              <input
                ref={priceRef}
                type="number"
                placeholder="10"
                className="border-none price_input"
              />
            </div>

            <div className={styles.uploadBtnContainer}>
              <button
                type="submit"
                disabled={!selectedFile}
                className={styles.uploadBtn}
              >
                {loading ? "Uploading" : "Upload Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
