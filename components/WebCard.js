import Image from "next/image";

function WebCard({ desc, image, date, time, price, title }) {
  return (
    <>
      <div className="container">
        <div className="image">
          <Image src={image} alt="Web event image" layout="fill" priority />
        </div>
        <div className="details">
          <h1 className="title">{title}</h1>
          <div className="date_and_time">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <p className="description">{desc}</p>
          <p className="price">
            <span>Price: </span>K {price}
          </p>
        </div>
      </div>
    </>
  );
}

export default WebCard;
