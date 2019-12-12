<template>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name: "HomeSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
          banners:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
          return{
            isLoad:false
          }

      },
      methods:{
        imageLoad(){
          if (!this.isLoad){
            // console.log('---');
            this.$emit('SwiperimageLoad')
            this.isLoad = true
            //这里做一个节流阀 防止他发送四次 没必要   设置变量 isLoad 为开关
      }
    }
      }
    }
</script>

<style scoped>

</style>
