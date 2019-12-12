<template>
  <van-swipe :autoplay="3000" indicator-color="deeppink" class="swiper-item" >
    <van-swipe-item v-for="item in topImages">
      <img :src="item" alt="">
    </van-swipe-item>

  </van-swipe>
</template>

<script>

    export default {
        name: "DetailSwiper",
      props:{
          topImages:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;


}
.swiper-item img{
  width: 100%;
}

</style>
