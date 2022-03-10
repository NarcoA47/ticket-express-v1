import React from "react";

function EventsModal() {
  return (
    <div className="mt-2">
      <input
        ref={titleRef}
        type="text"
        placeholder="Enter post title..."
        className="w-full mx-3 text-center pl-5 border-none focus:ring-0"
      />
      <textarea
        ref={descRef}
        type="text"
        placeholder="Description ..."
        style={{ resize: "none" }}
        className="w-full mt-2 p-2 h-28"
      />
    </div>
  );
}

export default EventsModal;
