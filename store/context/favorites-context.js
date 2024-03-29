import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
    const [favoritesMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id){
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id){
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId != id))
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    //value in {} refers to above value
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
