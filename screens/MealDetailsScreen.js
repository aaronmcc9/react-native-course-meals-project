import { useContext, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailsScreen({ route, navigation }) {
  //   const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  //   const mealIsFavorite = favoriteMealContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStateHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          ></IconButton>
        );
      },
    });
  }, [changeFavoriteStateHandler, navigation]);

  //   function changeFavoriteStateHandler() {
  //     mealIsFavorite
  //       ? favoriteMealContext.removeFavorite(mealId)
  //       : favoriteMealContext.addFavorite(mealId);
  //   }

  function changeFavoriteStateHandler() {
    mealIsFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
