<template>
    <div class="cart-bottom-bar">
      <div class="check-content">
        <item-check class="check-button" :is-check="isCheckAll" @click.native="checkClick"  />
        <span class="check-all" >全选</span>
      </div>
      <div class="price">
        合计：{{totalPrice}}
      </div>
      <div class="calculate">
        去计算:({{checkLength}})
      </div>
    </div>
</template>

<script>
  import ItemCheck from 'components/content/itemcheck/ItemCheck'
  import {mapGetters}from'vuex'
    export default {
        name: "CartBottomBar",
      components:{
        ItemCheck
      },
      computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
         return '￥'+ this.cartList.filter( item =>{
            return item.checked === true
          }).reduce((prevalue,item)=>{
              return  prevalue + item.realPrice * item.count
         },0).toFixed(2)
        },
        checkLength(){
          return this.cartList.filter(item=>item.checked === true).length
        },
        isCheckAll(){
          if (this.cartList.length ===0){
            return false
          }
          return !this.cartList.find(item => item.checked === false);
        }
      },
      methods:{
        checkClick(){
          // console.log('---');
          if (this.isCheckAll) {
            this.cartList.forEach(item=>{item.checked =false})
          }else{
            this.cartList.forEach(item=>{item.checked =true})
          }
        }
      }

    }
</script>

<style scoped>
.cart-bottom-bar{
  /*background-color: #999999;*/
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 55px;
  display: flex;
  padding: 0 5px;
  font-size: 14px;
  border-top: 1px solid #ccc;

}
.check-content{
    display: flex;
  height: 40px;
  align-items: center;
  }
.check-button{
  width: 20px;
  height: 20px;
}
.check-all{
  margin-left: 20px;
}
  .price{
    line-height: 40px;
    margin-left: 20px;
    color: orangered;
  }
  .calculate{

    width: 100px;
    position: absolute;
    right: 0;
    background-color: red;
    top: 0;
    bottom: 0;
    line-height: 40px;
    text-align: center;


  }
  .active{
    background-color: orangered;
  }

</style>
