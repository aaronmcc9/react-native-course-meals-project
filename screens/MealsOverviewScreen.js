import { FlatList, View, StyleSheet } from "react-native";
import { MEALS } from '../data/dummy-data'
import MealItem from "../components/MealItem";

//route prop by default like navigation screen
function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        //match over 0
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })

    function renderMealItem(itemData) {
        console.log("hey")

        const item = itemData.item;
        console.log("hey", item)
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        };

        return <MealItem {...mealItemProps}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})