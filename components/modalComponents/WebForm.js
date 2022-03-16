import styles from "./styles/WebForm.module.css";

function WebForm({ title, date, time, desc, duration, link }) {
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        ref={title}
        type="text"
        placeholder="Zoomtopia"
        required
      />

      <div className={styles.flexed_details}>
        <label htmlFor="date">Date:</label>
        <input ref={date} type="date" name="date" className="date" required />

        <label htmlFor="time">Time:</label>
        <input ref={time} type="time" />
      </div>
      {/* <small>Leave blank if no time is given</small> */}

      <label htmlFor="duration">Duration: (minutes)</label>
      <input ref={duration} type="text" placeholder="180" />

      <label htmlFor="description">Description:</label>
      <textarea
        ref={desc}
        name="description"
        id="description"
        type="text"
        placeholder="Join us this Sunday in a vibrant virtual Event..."
        required
      />

      <label htmlFor="link">Link Of Event:</label>
      <input
        ref={link}
        type="text"
        placeholder="https://zoom.us/j/5551112222"
        required
      />
    </>
  );
}

export default WebForm;
