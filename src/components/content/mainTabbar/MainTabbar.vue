<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" active-color="deeppink">
        <img  slot="item-icon" src="~assets/img/home.png" alt="">
        <img  slot="item-active-icon" src="~assets/img/home_active.png" alt="">
        <div slot="item-text"  active-color="deeppink">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  active-color="deeppink">
        <img  slot="item-active-icon" src="~assets/img/category_active.png" alt="">
        <img  slot="item-icon" src="~assets/img/category.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart"  active-color="deeppink">
        <img  slot="item-icon" src="~assets/img/cart.png" alt="">
        <img  slot="item-active-icon" src="~assets/img/cart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile"  active-color="deeppink">
        <img  slot="item-active-icon" src="~assets/img/profile_active.png" alt="">
        <img  slot="item-icon" src="~assets/img/profile.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
        name: "mainTabbar",
      components:{
        TabBar,
        TabBarItem
      }
    }

</script>

<style scoped>

</style>
