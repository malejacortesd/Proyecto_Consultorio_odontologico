import { useContext, useReducer } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";


const ContextGlobal = createContext();

//export const initialState = {theme: "", data: []}
const themes = {
  dark: {
    theme: false,
    bgColor: 'black',
    color: 'white',
    icon: "☼",
    background: "rgb(72, 201, 176)",
    colorf: "rgb(0, 0, 0)"
  },
  light: {
    theme: true,
    bgColor: 'white',
    color: 'black',
    icon: "☾",
    background: "rgb(129, 140, 248)",
    colorf: "rgb(0, 0, 0)"

  }
}
const initialThemeState = themes.light

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'Switch-Dark':
      return state = themes.dark
    case 'Switch-Light':
      return state = themes.light
    default:
      return state = themes.dark
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context.
  const [themeState, setDispatch] = useReducer(themeReducer, initialThemeState)
  const [dentists, setDentists] = useState([{}])


  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDentists(data))
  }, [])

  //console.log(dentists)



  return (
    <ContextGlobal.Provider value={{ dentists, setDentists, themeState, setDispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
