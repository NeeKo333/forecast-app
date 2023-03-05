import { createContext, useReducer } from "react";
import { cityReducer } from "./reducers/cityReducer";

export const context = createContext();

const initialValue = {
  name: "Your City",
  main: {
    temp: 0,
  },
  weather: [
    {
      main: "Sun",
    },
  ],
};

export const AppContextProvider = ({ children }) => {
  const [selectedCity, dispatch] = useReducer(cityReducer, initialValue);
  return (
    <context.Provider value={{ selectedCity, dispatch }}>
      {children}
    </context.Provider>
  );
};
