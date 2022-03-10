import styles from "../styles/UploadModal.module.css";

const cinemaObject = {
  title: "",
  //Lowercase name of Movie. Used for indexing and checking for duplicate movies
  path: "",
  image: "",
  desc: "",
  rating: 1,
  duration: 1, //in minutes
  genre: "",
  director: "",
  cast: "",
  airingAt: [], //Cinemas currently airing the movie
  // Price of the movie depends on which cinema it is airing at
  likes: 1,
  purchases: 1,
};

function Modal({
  type,
  title,
  rating,
  duration,
  genre,
  desc,
  director,
  cast,
  airing,
  price,
  date,
  time,
  location,
}) {
  return (
    <div>
      {type === "cinema" && (
        <>
          <div className={styles.flexed_details}>
            <input ref={rating} type="text" placeholder="Rating" className="" />
            <input
              ref={duration}
              type="text"
              placeholder="Length (mins)"
            />
          </div>
          <label htmlFor="genre">Genres:</label>
          <input
            ref={genre}
            type="text"
            placeholder="Action / Adventure"
            className="w-full"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            ref={desc}
            type="text"
            name="description"
            placeholder="There once was a young lass..."
            style={{ resize: "none" }}
            className="w-full h-28"
          />

          <label htmlFor="director">Director:</label>
          <input
            ref={director}
            type="text"
            placeholder="Robert Freeman"
            className="border-none w-full"
          />

          <label htmlFor="cast">Cast:</label>
          <input
            ref={cast}
            type="text"
            placeholder="Ryan Reynolds, Will Smith, Nikita Harris"
            className="border-none w-full"
          />

          <label htmlFor="title">Airing at:</label>
          <select
            ref={airing}
            name="supportedCinemas"
            id="supportedCinemas"
            className="w-full p-2"
          >
            <option value="nu-metro">Nu Metro</option>
            <option value="ster-kinekor">Ster-Kinekor</option>
          </select>
        </>
      )}
    </div>
  );
}

// function CinemaModal({
//   titleRef,
//   ratingRef,
//   durationRef,
//   descRef,
//   genreRef,
//   castRef,
//   directorRef,
// }) {
//   return (
//     <form className="flex flex-col items-center">
//       <label htmlFor="title">Title</label>
//       <input
//         ref={titleRef}
//         type="text"
//         placeholder="Enter post title..."
//         className="m-2 border-none focus:ring-0"
//       />
//       <div className="m-2 flex justify-between">
//         <input
//           ref={ratingRef}
//           type="text"
//           placeholder="Rating"
//           className="border-none focus:ring-0 m-2 w-1/3"
//         />
//         <input
//           ref={durationRef}
//           type="text"
//           placeholder="Duration (mins)"
//           className="border-none focus:ring-0 m-2 w-2/3"
//         />
//         <input
//           ref={genreRef}
//           type="text"
//           placeholder="Genre"
//           className="border-none focus:ring-0 w-1/3"
//         />
//       </div>
//       <textarea
//         ref={descRef}
//         type="text"
//         placeholder="Description..."
//         style={{ resize: "none" }}
//         className="w-full mt-2 p-2 h-28"
//       />
//       <label htmlFor="director">Director</label>
//       <input
//         ref={directorRef}
//         type="text"
//         placeholder="Director"
//         className="border-none focus:ring-0 w-full ml-2 mt-2"
//       />
//       <label htmlFor="cast">Cast</label>
//       <input
//         ref={castRef}
//         type="text"
//         placeholder="Cast"
//         className="border-none focus:ring-0 w-full ml-2 mt-2"
//       />
//       <label htmlFor="title">Title</label>
//       <select name="supportedCinemas" id="supportedCinemas">
//         <option value="nu-metro">Nu Metro</option>
//         <option value="ster-kinekor">Ster-Kinekor</option>
//       </select>
//     </form>
//   );
// }

export default Modal;
