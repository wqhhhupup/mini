<template>
   <div class="cart">
     <!--顶部导航栏-->
     <nav-bar class="nav-bar">
       <div slot="center">购物车({{cartLength}})</div>
     </nav-bar>
     <!--中间内容-->
     <cart-list></cart-list>
      <!--底部的结算-->
     <cart-bottom-bar/>
   </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import cartList from './chilidCart/CartList'
  import CartBottomBar from './chilidCart/CartBottomBar'


  import {mapGetters} from 'vuex'
    export default {
        name: "Cart",
      components:{
        NavBar,
        cartList,
        CartBottomBar
      },
      computed:{
          ...mapGetters({
            cartLength:'cartListLength'
          })
        // ...mapGetters['cartList','cartListLength']
      }
    }
</script>

<style scoped>
.nav-bar{
  background-color:var(--color-tint);
}

</style>
