<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-active-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
            // isActive:true
          }
      },
      computed:{
          isActive(){
            //home,cart,category,profile
             return this.$route.path.indexOf(this.path)!== -1
          },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
      },
      methods:{
          itemClick(){
            // console.log('itemClick');
            this.$router.replace(this.path)
          }
      },

    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;

  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;

  }
  /*.active{*/
    /*color:red;*/
  /*}*/
</style>
