import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Database/data";

export const SingleContinent = () => {
  const { continentId } = useParams();
  const findContinent = data.continents.find(
    (continent) => continent.id === Number(continentId)
  );

  const navigate = useNavigate();
  return (
    <>
      <i class="fa-solid fa-arrow-left arrow" onClick={() => navigate("/")}></i>
      <h1>Top Countries in {findContinent?.name} for your next holiday</h1>
      <div className="list">
        {findContinent.countries.map(({ id, name, image }) => (
          <div
            className="image-divs"
            onClick={() => navigate(`/${findContinent?.id}/country/${id}`)}
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
