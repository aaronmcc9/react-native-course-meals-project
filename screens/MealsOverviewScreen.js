import { Text, View, StyleSheet } from "react-native";

//route prop by default like navigation screen
function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
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