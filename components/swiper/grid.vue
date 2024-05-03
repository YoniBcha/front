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
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <div class="title mb-5" :data-swiper-parallax="slide.parallaxTitle">
        {{ slide.title }}
      </div>
      <div class="text" :data-swiper-parallax="slide.parallaxText">
        <p>{{ slide.text }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

// Import slide data from external file
import { servieceData } from "../global/data/serviece_data.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
      slides: servieceData, // Use imported slide data
    };
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
