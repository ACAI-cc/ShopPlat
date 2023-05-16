<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <!-- 使用父组件传值：list -->
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  data() {
    return {};
  },
  props: ["list"],
  components: {},
  watch: {
    list: {
      // 立即监听:无论数据是否发生变化，一上来就监听一次
      // 因为list是从父亲那传来的，基本不发生变化
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
 


  methods: {},
};
</script>
<style scoped lang='less'>
</style>
