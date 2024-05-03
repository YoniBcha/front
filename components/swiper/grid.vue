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
      <div class="title" data-swiper-parallax="-300">{{ slide.title }}</div>
      <div class="text" data-swiper-parallax="-100">
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

import "./assets/css/style.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
      slides: [
        {
          id: 1,
          title: "Slide 1",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          parallaxTitle: "-300",
          parallaxSubtitle: "-200",
          parallaxText: "-100",
        },
        {
          id: 2,
          title: "Slide 2",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          parallaxTitle: "-300",
          parallaxSubtitle: "-200",
          parallaxText: "-100",
        },
        {
          id: 3,
          title: "Slide 3",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          parallaxTitle: "-300",
          parallaxSubtitle: "-200",
          parallaxText: "-100",
        },
      ],
    };
  },
};
</script>
