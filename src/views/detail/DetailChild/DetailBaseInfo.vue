<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="item-info-title">{{goods.title}} </div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span
        v-if="goods.discount"
        :style="{discountBgColor:goods.discountBgColor}"
        class="discount"
      ></span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        :key="index"
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        v-if="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DetailBaseInfo",
      props:{
       goods:{
         type:Object,
         default(){
           return{}
         }
       }

      }
    }
</script>

<style scoped>
  @import "../../../assets/css/base.css";
.base-info{
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
}
.item-info-title{
  color: #222222;
  text-align: justify;
}
  .price{
    margin-top: 10px;
  }
  .price .new-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .price .old-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
  .price .discount{
  font-size: 12px;
  padding: 3px 6px;
  color: #ffffff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -4px;
}
  .columns{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    justify-content: space-between;
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333333;
    margin-left: 5px;
  }
</style>
