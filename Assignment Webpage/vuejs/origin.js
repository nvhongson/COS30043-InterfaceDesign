let app = Vue.createApp({
    // Data function: Returns the reactive state of the app
    data() {
        return {
            // Stores the user’s search input
            query: "", 

            // Navigation links for the website's menu
            navLinks: [
                { name: "Homepage", url: "homepage.html" },
                { name: "Origin", url: "origin.html" },
                { name: "Cuisine", url: "cuisine.html" },
                { name: "Recipe", url: "recipe.html" }
            ],

            // List of cuisines and their respective images & links
            origins: [
                { name: "China", image: "images/chinese_cuisine.jpg", link: "origin/china.html" },
                { name: "Japan", image: "images/japanese_cuisine.jpg", link: "origin/japan.html" },
                { name: "Thai", image: "images/thai_cuisine.jpg", link: "origin/thai.html" },
                { name: "Korea", image: "images/korean_cuisine.jpg", link: "origin/korea.html" },
                { name: "Vietnam", image: "images/vietnam_cuisine.jpg", link: "origin/vietnam.html" },
                { name: "Singapore", image: "images/singapore_cuisine.jpg", link: "origin/singapore.html" },
                { name: "India", image: "images/indian_cuisine.jpg", link: "origin/india.html" },
                { name: "Phillipines", image: "images/filo_cuisine.jpg", link: "origin/phillippines.html" } 
            ]
        };
    },

    // Computed properties: Automatically updates when dependent data changes
    computed: {
        /**
         * Returns the image source for an origin.
         * If an image is not provided, it defaults to a placeholder image.
         */
        getImageSrc() {
            return (origin) => origin.image ? origin.image : 'https://via.placeholder.com/150';
        }
    },

    // Lifecycle Hook: Runs after the Vue instance is mounted to the DOM
    mounted() {
        console.log("Vue is mounted!");  // Debugging message to confirm Vue is running
        console.log("Origins:", this.origins);  // Logs the origins array to verify data
    },

    // Methods: Functions that handle user interactions
    methods: {
        /**
         * Search function to find a matching cuisine in the origins array.
         * - Converts user query to lowercase for case-insensitive search.
         * - Finds a matching cuisine based on user input.
         * - Redirects to the cuisine's page if found.
         * - Alerts the user if no match is found.
         */
        search() {
            let queryLower = this.query.toLowerCase(); // Convert query to lowercase
            let found = this.origins.find(origin => origin.name.toLowerCase().includes(queryLower));

            if (found) {
                window.location.href = found.link; // Redirect to the corresponding page
            } else {
                alert("No matching results found. Try searching for a country or cuisine.");
            }
        }
    }
}).mount("#app");  // Mounts the Vue instance to the element with id="app"
