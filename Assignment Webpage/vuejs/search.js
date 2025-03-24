const app = Vue.createApp({
    data() {
        return {
            // User's search input
            query: "",

            // Navigation links for different sections of the website
            navLinks: [
                { name: "Homepage", url: "homepage.html" },
                { name: "Origin", url: "origin.html" },
                { name: "Cuisine", url: "cuisine.html" },
                { name: "Recipe", url: "recipe.html" }
            ],

            // List of cuisines with corresponding images and links
            cuisines: [
                { name: "China", image: "images/chinese_cuisine.jpg", link: "origin/china.html" },
                { name: "Japan", image: "images/japanese_cuisine.jpg", link: "origin/japan.html" },
                { name: "India", image: "images/indian_cuisine.jpg", link: "origin/india.html" },
                { name: "Vietnam", image: "images/vietnam_cuisine.jpg", link: "origin/vietnam.html" }
            ],

            // Search map: keyword → corresponding page URL
            searchMap: {
                // Recipes
                "sushi": "recipe/sushi.html",
                "ramen": "recipe/ramen.html",
                "kimchi": "recipe/kimchi.html",
                "bibimbap": "recipe/bibimbap.html", 
                "pho": "recipe/pho.html",
                "banh mi": "recipe/banhmi.html",
                "chicken rice": "recipe/chickenrice.html",
                "chilli crab": "recipe/chillicrab.html",
                "biryani": "recipe/biryani.html",
                "butter chicken": "recipe/butterchicken.html",
                "adobo": "recipe/adobo.html",
                "sinigang": "recipe/sinigang.html",

                // Origins (Countries)
                "china": "origin/china.html",
                "japan": "origin/japan.html",
                "thailand": "origin/thai.html",
                "korea": "origin/korea.html",
                "philippines": "origin/philippines.html",
                "vietnam": "origin/vietnam.html",
                "singapore": "origin/singapore.html",
                "india": "origin/india.html"
            }
        };
    },

    computed: {
        /**
         * Returns the image source for a cuisine.
         * If the cuisine does not have an image, a placeholder is used.
         */
        getImageSrc() {
            return (origin) => origin.image ? origin.image : 'https://via.placeholder.com/150';
        }
    },

    methods: {
        /**
         * Searches for a matching dish or country in the search map.
         * - Converts user input to lowercase for case-insensitive search.
         * - If a match is found, redirects to the corresponding page.
         * - If no match is found, an alert is displayed.
         */
        search() {
            let queryLower = this.query.toLowerCase(); // Convert input to lowercase
            if (this.searchMap[queryLower]) {
                window.location.href = this.searchMap[queryLower]; // Redirect to the matching page
            } else {
                alert("No matching results found. Try searching for a dish or country.");
            }
        }
    }
}).mount("#app"); // Mount the Vue instance to the element with id="app"
