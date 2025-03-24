const recipeApp = Vue.createApp({
    data() {
        return {
            query: "",
            selectedRecipe: null,
            recipes: {}, // Store recipe data dynamically
            obtainedIngredients: [],
            completedSteps: []
        };
    },
    mounted() {
        // Ensure recipeData is available
        if (window.recipeData) {
            this.recipes = window.recipeData;
            console.log("Recipes loaded:", this.recipes);
        } else {
            console.error("recipe_data.js not loaded correctly.");
        }
        // Get the selected dish from URL
        const params = new URLSearchParams(window.location.search);
        const dish = params.get("dish");

        if (dish && recipeData[dish]) {
            this.selectedRecipe = dish;
            this.recipe = recipeData[dish];
        }
    },    
    methods: {
        searchRecipe() {
            if (this.recipes[this.query]) {
                this.selectedRecipe = this.query;
                this.obtainedIngredients = []; // Reset selected ingredients
                this.completedSteps = []; // Reset completed steps
            } else {
                alert("Recipe not found");
                this.selectedRecipe = null;
            }
        },
        addRemoveIngredient(ingredient) {
            const index = this.obtainedIngredients.indexOf(ingredient);
            if (index > -1) {
                this.obtainedIngredients.splice(index, 1);
            } else {
                this.obtainedIngredients.push(ingredient);
            }
        },
        toggleStep(step) {
            const index = this.completedSteps.indexOf(step);
            if (index > -1) {
                this.completedSteps.splice(index, 1);
            } else {
                this.completedSteps.push(step);
            }
        }
    }
}).mount("#recipeApp");
