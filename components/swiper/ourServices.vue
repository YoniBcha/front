User
<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div
      slot="container-start"
      class="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>
    <swiper-slide v-for="service in services.services" :key="service.id">
      <div class="title mb-5" :data-swiper-parallax="service.parallaxTitle">
        {{ service.service_title }}
      </div>
      <div class="text" :data-swiper-parallax="service.parallaxText">
        <p>{{ service.service_definition }}</p>
      </div>
    </swiper-slide>
  </swiper>
  <div>
    <div v-if="error">Error fetching data: {{ error }}</div>
    <div v-else>
      <div v-for="service in services" :key="service.id">
        <div class="title mb-5">{{ service.service_title }}</div>
        <div class="text">{{ service.service_definition }}</div>
      </div>
    </div>
  </div></template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import serviece Data data from external file (optional)
// import { servieceData } from "../global/data/serviece_data.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      services: [], // Array to store API response data
      error: null, // Store any error message
      modules: [Parallax, Pagination, Navigation], // Swiper modules
    };
  },
  created() {
    this.fetchData(); // Fetch data on component creation
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/ourservices");
        const data = await response.json();
        this.services = data;
        console.log(this.services.services);
      } catch (error) {
        console.error("Error fetching data:", error);
        this.error = error.message; // Set error message
      }
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.swiper-slide {
  font-size: 18px;
  color: white;
  font-style: bold;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("assets/img/enterprise_photo.jpg");
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 600;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>
