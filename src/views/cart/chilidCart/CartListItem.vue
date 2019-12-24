<template>
  <div class="shop-item">
    <div class="item-selector">
     <item-check :is-check="product.checked" @click.native="itemCheckClick"></item-check>
    </div>

    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述:{{product.desc}}</div>
      <div class="info-bottom">
        <div class="info-bottom">
          <div class="item-price left">¥{{ product.realPrice }}</div>
          <div class="item-count right">x{{ product.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemCheck from 'components/content/itemcheck/ItemCheck'
  import {mapGetters}from'vuex'
    export default {
        name: "CartListItem",
      components:{
        ItemCheck
      },
      props:{
        product:{
          type:Object,
          defualt() {
            return {};
          }
        },
      },
      computed:{
          ...mapGetters(['cartList']),

      },
      methods:{
        itemCheckClick(){
          this.product.checked = !this.product.checked

        }
      }
    }
</script>

<style scoped>
.shop-item{
display: flex;
  width: 100%;
  /*background-color: pink;*/
  padding: 5px;
  border-bottom: 2px solid #ccc;
 }
  .item-selector{
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
    display: block;
  }
  .item-title,
  .item-desc{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item-desc{
    margin-top: 20px;
  }
.item-info {
  font-size: 17px;
  color: #333333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  width: 88%;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
