const Card = ({ country }) => {
  return (
    <div
      key={country.ccn3}
      className="card flex flex-col sm: lg:m-10 shadow-xl max-w-3xl rounded-lg w-1/4"
    >
      <img className="h-3/4" src={country.flags.png} />
      <div className="flex flex-col m-3 p-3">
        <h3 className="text-xl font-bold width-3/4">{country.name.common}</h3>
        <p className="">Population: {country.population}</p>
        <p className="">Region: {country.region}</p>
        <div className="">
          {country.capital.map((capital) => {
            return <p>Capital: {capital}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
