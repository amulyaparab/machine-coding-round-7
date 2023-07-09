import { useParams } from "react-router-dom";
import { data } from "../Database/data";

export const DestinationDetail = () => {
  const { continentId, countryId, destinationId } = useParams();
  const findContinent = data.continents.find(
    (continent) => continent.id === Number(continentId)
  );
  console.log(findContinent);
  const findCountry = findContinent.countries.find(
    (country) => country.id === Number(countryId)
  );
  console.log(findCountry);
  const findDestination = findCountry.destinations.find(
    (destination) => destination.id === Number(destinationId)
  );

  return (
    <>
      <h1>{findDestination?.name}</h1>
      <div className="detail">
        <img
          className="image"
          src={findDestination?.image}
          alt={findDestination?.name}
        />
        <div>
          <p>
            <span>Description: </span>
            {findDestination?.description}
          </p>
          <p>
            <span>Ratings: </span>
            {findDestination?.ratings}
          </p>
          <p>
            <span>Reviews: </span>
            {findDestination?.reviews}
          </p>
          <p>
            <span>Location: </span>
            {findDestination?.location}
          </p>
          <p>
            <span>Opening Hours: </span>
            {findDestination?.openingHours}
          </p>
          <p>
            <span>Ticket Price: </span>
            {findDestination?.ticketPrice}
          </p>
          <a href={`${findDestination?.website}`} target="blank">
            Website
          </a>
        </div>
      </div>
    </>
  );
};
