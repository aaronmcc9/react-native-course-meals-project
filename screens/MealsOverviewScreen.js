import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

//route prop by default like navigation screen
function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    //match over 0
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find((c) => c.id === categoryId).title;
    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}
export default MealsOverviewScreen;
