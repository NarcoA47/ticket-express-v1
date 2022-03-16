import styles from "./styles/CinemaForm.module.css";
function CinemaForm({ title, rating, duration, desc, genre, cast, director }) {
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        ref={title}
        type="text"
        placeholder="Spiderman: No Way Home"
        required
      />

      <div className={styles.flexed_details}>
        <input ref={rating} type="text" placeholder="Rating" />
        <input
          ref={duration}
          type="text"
          placeholder="Length (mins)"
          required
        />
      </div>
      <label htmlFor="genre">Genres:</label>
      <input
        ref={genre}
        type="text"
        placeholder="Action / Adventure"
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        ref={desc}
        type="text"
        name="description"
        placeholder="There once was a young lass..."
        required
      />

      <label htmlFor="director">Director:</label>
      <input
        ref={director}
        type="text"
        placeholder="Robert Freeman"
      />

      <label htmlFor="cast">Cast:</label>
      <input
        ref={cast}
        type="text"
        placeholder="Tom Holland, Zendaya, Nikita Harris"
        required
      />
    </>
  );
}

export default CinemaForm;
