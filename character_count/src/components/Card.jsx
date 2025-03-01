const Card = ({ bgColor, count, imageSource, cardDescription }) => {
  return (
    <div
      className=" card pl-5 rounded-2xl border border-black m-2 bg-contain bg-no-repeat "
      style={{
        backgroundImage: `url("${imageSource}")`,
        backgroundColor: `${bgColor}`,
        backgroundPosition: "right",
      }}
    >
      <div className="text-5xl pt-10">{count}</div>
      <div className="text-xl pt-5 pb-10">{cardDescription}</div>
    </div>
  );
};

export default Card;
