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
      <div class="flex flex-col">
        <div
          class="font-bold text-4xl mb-10"
          :data-swiper-parallax="service.parallaxTitle"
        >
          {{ service.service_title }}
        </div>
        <div
          class="max-w-[700px] text-gray-300"
          :data-swiper-parallax="service.parallaxText"
        >
          <p>{{ service.service_definition }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Parallax, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        const response = await fetch("http://127.0.0.1:8000/api/services");
        const data = await response.json();
        this.services = data;
        console.log(this.services);
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
</style>
