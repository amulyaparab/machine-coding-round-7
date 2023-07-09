import { useNavigate } from "react-router-dom";
import { data } from "../Database/data";

export const Continents = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <h2 className="purple heading">Top Continents for your next holiday</h2>
      <div className="list">
        {data.continents.map(({ id, name, image }) => (
          <div
            className="image-divs"
            onClick={() => navigate(`/continent/${id}`)}
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
