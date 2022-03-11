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
  const addCinema = () => {
    const createOption = (name) => {
      const value = name.replace(" ", "-").toLowerCase();
      const option = document.createElement("option");
      option.setAttribute("value", `${value}`);
      option.innerHTML = name;
      return option;
    };
    const div = document.querySelector("[data-airing]");
    const option1 = createOption("Ster-Kinekor");
    const option2 = createOption("Nu Metro");
    const options = [option1, option2];

    const select = document.createElement("select");
    select.classList.add("w-full", "p-2");
    select.append(...options);
    div.append(select);
  };
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

      <label htmlFor="title">Airing at:</label>
      <div className="airing_at" data-airing>
        <select
          ref={airing}
          name="supportedCinemas"
          id="supportedCinemas"
          className="w-full p-2"
          required
        >
          <option value="nu-metro">Nu Metro</option>
          <option value="ster-kinekor">Ster-Kinekor</option>
        </select>
      </div>

      <button type="button" onClick={addCinema}>
        <b>+</b> Add Cinema
      </button>
    </>
  );
}

export default CinemaForm;
