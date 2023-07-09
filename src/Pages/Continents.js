import { useData } from "../Contexts/DataProvider";
import { data } from "../Database/data";

export const Continents = () => {
  const { dispatch } = useData();
  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <p>Top Continents for your next holiday</p>
      <div className="list">
        {data.continents.map(({ id, name, image }) => (
          <div
            className="image-divs"
            onClick={() => dispatch({ type: "SET_CONTINENT", payload: id })}
          >
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
