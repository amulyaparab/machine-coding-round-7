import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Database/data";

export const Country = () => {
  const { continentId, countryId } = useParams();
  const findContinent = data.continents.find(
    (continent) => continent.id === Number(continentId)
  );
  console.log(findContinent);
  const findCountry = findContinent.countries.find(
    (country) => country.id === Number(countryId)
  );
  console.log(findCountry);
  const navigate = useNavigate();
  return (
    <>
      <h1>Top Places in {findCountry?.name} for your next holiday</h1>
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
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
