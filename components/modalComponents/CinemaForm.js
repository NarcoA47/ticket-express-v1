import styles from "./styles/CinemaForm.module.css";
function CinemaForm({
  title,
  rating,
  duration,
  desc,
  genre,
  cast,
  director,
  airing,
}) {
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        ref={title}
        type="text"
        placeholder="Spiderman: No Way Home"
        className="w-full"
        required
      />

      <div className={styles.flexed_details}>
        <input ref={rating} type="text" placeholder="Rating" className="" />
        <input
          ref={duration}
          type="text"
          placeholder="Length (mins)"
          className=""
          required
        />
      </div>
      <label htmlFor="genre">Genres:</label>
      <input
        ref={genre}
        type="text"
        placeholder="Action / Adventure"
        className="w-full"
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        ref={desc}
        type="text"
        name="description"
        placeholder="There once was a young lass..."
        className="w-full h-28"
        required
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
        placeholder="Tom Holland, Zendaya, Nikita Harris"
        className="border-none w-full"
        required
      />
    </>
  );
}

export default CinemaForm;
