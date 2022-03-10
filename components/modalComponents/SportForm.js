import styles from "./styles/WebForm.module.css";
function SportForm({ type, title, desc, date, time, location, duration }) {
  return (
    <>
      <label htmlFor="sport-type">Sport:</label>
      <select ref={type} name="sport-type" defaultValue={"soccer"}>
        <option value="soccer">Soccer</option>
        <option value="tennis">Tennis</option>
        <option value="basketball">Basketball</option>
      </select>

      <label htmlFor="title">Title:</label>
      <input
        ref={title}
        type="text"
        placeholder="Zesco United vs. Napsa Stars"
        className="w-full"
        required
      />
      <div className={styles.flexed_details}>
        <label htmlFor="date">Date:</label>
        <input ref={date} type="date" name="date" className="date" required />

        <label htmlFor="time">Time:</label>
        <input ref={time} type="time" />
      </div>
      {/* <small>Leave blank if no time is given</small> */}

      {/* <label htmlFor="duration">Duration: (minutes)</label>
      <input ref={duration} type="text" placeholder="180" /> */}

      <label htmlFor="description">Description:</label>
      <textarea
        ref={desc}
        name="description"
        id="description"
        type="text"
        placeholder="Join us this Sunday in a vibrant virtual Event..."
        className="w-full"
        required
      />

      <label htmlFor="location">Location: </label>
      <input ref={location} type="text" placeholder="Showgrounds" />
    </>
  );
}

export default SportForm;
