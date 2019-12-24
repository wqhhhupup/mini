<template>
    <div class="cart-list" >
      <scroll class="content">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>
      </scroll>
    </div>
</template>

<script>
  import { mapGetters }from'vuex'

  import Scroll  from 'components/common/scroll/Scroll'
  import CartListItem from 'views/cart/chilidCart/CartListItem'

    export default {
        name: "CartList",
      components:{
        Scroll,
        CartListItem
      },
      computed:{
        ...mapGetters(['cartList'])
      },

    }
</script>

<style scoped>

  .cart-list{
    height: 100%;
    width: 100%;

  }
.content{
  position: absolute;
  top: 44px;
  bottom: 99px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
