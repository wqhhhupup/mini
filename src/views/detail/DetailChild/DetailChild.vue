<template>
  <div class="detail-child">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item"  @click="itemClick(index)"
             :class="{isActive:currentIndex === index }">{{item}}</div>
      </div>
      
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "DetailChild",
      data(){
          return{
            titles:["商品","参数","评论","推荐"],
            currentIndex:0
          }
      },
      components:{
        NavBar
      },
      methods:{
        itemClick(index){
          this.currentIndex = index
          this.$emit('itemClick',index)
        },
        backClick(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
.detail-child{
  background-color: white;
}
  .title{
    display: flex;
    color: black;
    font-size: 12px;
  }
  .title-item{
    flex: 1;
  }
  .isActive{
    color: var(--color-tint);;
  }
  .back{
    color: black;
    text-align: center;
    font-size: 30px;
    /*line-height: 44px;*/
  }
</style>
