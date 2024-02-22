import { useContext } from "react";
import MealList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
function FavoritesScreen() {
  //   const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter((m) =>
    // favoriteMealsContext.ids.includes(m.id)
    favoriteMealIds.includes(m.id)
  );

  if (favoritesMeals.length > 0) {
    return <MealList items={favoritesMeals} />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
