import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Database/data";

export const DestinationDetail = () => {
  const { continentId, countryId, destinationId } = useParams();

  const findContinent = data.continents.find(
    (continent) => continent.id === Number(continentId)
  );

  const findCountry = findContinent.countries.find(
    (country) => country.id === Number(countryId)
  );

  const findDestination = findCountry.destinations.find(
    (destination) => destination.id === Number(destinationId)
  );

  const navigate = useNavigate();

  return (
    <>
      <i
        class="fa-solid fa-arrow-left arrow"
        onClick={() =>
          navigate(`/${findContinent.id}/country/${findCountry.id}`)
        }
      ></i>
      <h1 className="heading">{findDestination?.name}</h1>
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
