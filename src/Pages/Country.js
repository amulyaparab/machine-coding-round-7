import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Database/data";

export const Country = () => {
  const { continentId, countryId } = useParams();
  const navigate = useNavigate();

  const findContinent = data.continents.find(
    (continent) => continent.id === Number(continentId)
  );

  const findCountry = findContinent.countries.find(
    (country) => country.id === Number(countryId)
  );

  return (
    <>
      <i
        class="fa-solid fa-arrow-left arrow"
        onClick={() => navigate(`/continent/${findContinent.id}`)}
      ></i>
      <h1 className="heading">
        Top Places in {findCountry?.name} for your next holiday
      </h1>
      <div className="list">
        {findCountry.destinations.map(({ id, name, image }) => (
          <div
            className="image-divs"
            onClick={() =>
              navigate(
                `/${findContinent.id}/country/${findCountry.id}/destination/${id}`
              )
            }
          >
            <img src={image} alt={name} />
            <div className="name-of-place">
              <i class="fa-solid fa-location-dot"></i>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
