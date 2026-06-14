class ProductService {

    async getProducts() {

        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );

        const data = await response.json();

        return data.meals.map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            price: Math.floor(Math.random() * 40) + 15,
            image: meal.strMealThumb
        }));

    }

}

export default new ProductService();