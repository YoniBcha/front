<template>
  <swiper
    :slidesPerView="5"
    :grid="{
      rows: 3,
      gap: 100,
    }"
    :spaceBetween="0"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="grid_data in grid_datas" :key="grid_data.id">
      <serviece-card>
        <template v-slot:discount-percentage>
          -{{ grid_data.discount_rate }}%
        </template>
        <template v-slot:image>
          <img
            :src="grid_data.image_url"
            alt="Product Image"
            class="w-[80%] !h-36 object-contain my-auto mx-auto relative mt-2"
          />
        </template>
        <template v-slot:product-name>{{ grid_data.product_name }}</template>
        <template v-slot:product-price>
          ${{ grid_data.product_price }}
        </template>
        <template v-slot:previous-price>
          <span>${{ grid_data.product_price }}</span>
        </template>
      </serviece-card>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "@/style/style.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { grid_datas } from "@/global/data/grid";

export default {
  name: "GridView",
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  data() {
    return {
      grid_datas: grid_datas,
      modules: [Grid, Pagination],
    };
  },
};
</script>
