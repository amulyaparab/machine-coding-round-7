import { createContext, useContext, useReducer } from "react";
import { data } from "../Database/data";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_CONTINENT":
        return {
          ...state,
          continent: data.continents.find(
            (continent) => continent.id === action.payload
          ),
        };
      default:
        return state;
    }
  };
  const initialState = {
    data: data,
    continent: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
