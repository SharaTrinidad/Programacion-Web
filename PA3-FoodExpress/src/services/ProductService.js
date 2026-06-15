class ProductService {

    async getProducts() {

        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );

        const data = await response.json();

        const categoryPrices = {
            Dessert: 12,
            Breakfast: 15,
            Side: 10,
            Chicken: 25,
            Beef: 30,
            Seafood: 35,
            Vegetarian: 18,
            Miscellaneous: 20
        };

        return data.meals.map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory,
            price: categoryPrices[meal.strCategory] || 20,
            image: meal.strMealThumb
        }));
    }
}

export default new ProductService();