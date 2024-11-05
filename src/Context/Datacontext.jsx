import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Ali Hassan",
  age: 28,
  startCount: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function Dataprovider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  
  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName});
  };

  const  changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge});
  }; 

  const  increaseBy1 = (newCount) => {
    dispatch({ type: "INCREASE", newValue: newCount});
  }; 

  const  toggleTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme});
  }; 

  return (
    <ThemeContexttt.Provider value={{ ...firstState,changeName,increaseBy1,toggleTheme,changeAge }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
