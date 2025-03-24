const recipeApp = Vue.createApp({
    data() {
        return {
            query: "",
            selectedRecipe: null,
            recipes: {}, // Will store fetched data
            obtainedIngredients: [],
            completedSteps: []
        };
    },
    mounted() {
        // Fetch recipes from external JSON file
        fetch("recipes.json")
            .then(response => response.json())
            .then(data => {
                this.recipes = data;
                console.log("Recipes loaded:", this.recipes);

                // Auto-select recipe if query exists
                const params = new URLSearchParams(window.location.search);
                const dish = params.get("dish");
                if (dish && this.recipes[dish]) {
                    this.selectedRecipe = dish;
                }
            })
            .catch(error => console.error("Error loading recipes:", error));
    },
    methods: {
        searchRecipe() {
            if (this.recipes[this.query]) {
                this.selectedRecipe = this.query;
                this.obtainedIngredients = [];
                this.completedSteps = [];
            } else {
                alert("Recipe not found");
                this.selectedRecipe = null;
            }
        }
    }
}).mount("#recipeApp");
