// Home Component
const Home = {
  template: `
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of our application.</p>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name:</label>
          <input type="text" id="firstName" class="form-control" v-model="firstName" />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" id="lastName" class="form-control" v-model="lastName" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p v-if="welcomeMessage" class="mt-3">{{ welcomeMessage }}</p>
      <div>
        <label>
          <input type="radio" value="mountain" v-model="selectedImage" /> Mountain
        </label>
        <label>
          <input type="radio" value="ocean" v-model="selectedImage" /> Ocean
        </label>
      </div>
      <div v-if="selectedImage" class="mt-3">
        <img
          :src="selectedImage === 'mountain' ? mountainImage : oceanImage"
          :alt="selectedImage"
          width="300"
        />
      </div>
    </div>
  `,
  data() {
    return {
      firstName: '',
      lastName: '',
      welcomeMessage: '',
      selectedImage: '',
      mountainImage: 'https://via.placeholder.com/300x200?text=Mountain',
      oceanImage: 'https://via.placeholder.com/300x200?text=Ocean',
    };
  },
  methods: {
    submitForm() {
      this.welcomeMessage = `Welcome, ${this.firstName} ${this.lastName}!`;
    },
  },
};

// Tasks Component
const Tasks = {
  template: `
    <div>
      <h2>Tasks Page</h2>
      <p>Manage your tasks here.</p>
    </div>
  `,
};

// Units Component
const Units = {
  template: `
    <div>
      <h2>Units Page</h2>
      <p>View and manage units here.</p>
    </div>
  `,
};

// Vue Router Configuration
const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
  { path: '/units', component: Units },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

// Create Vue App
const app = Vue.createApp({});
app.use(router);
app.mount('#app');
