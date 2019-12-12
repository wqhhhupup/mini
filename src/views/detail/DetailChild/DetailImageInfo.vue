<template>
  <div v-if="Object.keys(detailImageInfo).length !==0" class="detail-image-info">
    <div class="top">
    <div class="start"></div>
    <div class="content">{{detailImageInfo.desc}}</div>
    <div class="end"></div>
    <div class="bottom" v-for="(item,index) in detailImageInfo.detailImage">
      <div class="des">{{item.key}}</div>
      <div class="image-list" >
        <img :src="image" alt="" @load="imgLoad" :key="imageIndex" v-for="(image,imageIndex) in item.list">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailImageInfo",
      props:{
        detailImageInfo:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      methods:{
        imgLoad(){
          this.$emit('detailImgLoad')

        }
      }
    }
</script>

<style scoped>
  .detail-image-info{
    padding: 20px 0px;
    border-bottom: 5px solid #f2f5f8;
  }
.top{
  position: relative;
}
  .top .start,.top .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }
  .top .start::before,.top .end::after{
    content: '';
    width: 5px;
    height: 5px;
    background-color: #000;
    position: absolute;
  }
  .top .end::after{
    right: 0;
  }
  .top .end{
    float: right;
  }
  .content{
    padding: 15px 0;
    font-size: 14px;
  }
  .des{
    margin: 10px 0 10px 15px;
    color: #333333;
    font-size: 15px;
  }
  .image-list img{
    width: 100%;
  }
</style>
