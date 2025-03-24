const { createApp } = Vue;

createApp({
  data() {
    return {
      units: [], // Holds data from units.json
      currentPage: 1, // Tracks the current page
      perPage: 5, // Number of rows per page
    };
  },
  computed: {
    pageCount() {
      // Total number of pages
      return Math.ceil(this.units.length / this.perPage);
    },
    paginatedData() {
      // Data for the current page
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.units.slice(start, end);
    },
  },
  mounted() {
    // Fetch data from units.json
    fetch("8.2 units.json")
      .then((response) => response.json())
      .then((data) => {
        this.units = data;
      });
  },
}).mount("#app");
