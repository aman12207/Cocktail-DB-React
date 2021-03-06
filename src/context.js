import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [cocktails,setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchData = async() =>{
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const {drinks} = await response.json();
      console.log(drinks)
      if(drinks){
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails);
      }
      else
        setCocktails([]);
    } catch (error) { 
      console.log(error);
    }
    setLoading(false);
  }
  // console.log(cocktails);
  useEffect(()=>{
    fetchData();
  },[searchTerm])
  return <AppContext.Provider value={{loading,cocktails,searchTerm,setSearchTerm,setCocktails}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
