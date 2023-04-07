import { response } from "msw";
import { createContext, useMemo, useState } from "react";

export const initialState = { theme: "light", data: [] }

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  const otraData = useMemo(()=>{
    const getDentists = async() =>{
      const data = await fetch ('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
    return response.json()
      })
      return(data)
  }
  return getDentists()
  },[])

  const [theme, setTheme] =useState('')
  const [data, setData] = useState ([])


return (
  <ContextGlobal.Provider value={{theme, setTheme, setData}}>
    {children}
  </ContextGlobal.Provider>
);
};
