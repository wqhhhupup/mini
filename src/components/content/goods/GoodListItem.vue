<template>
    <div class="good-list-item" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imgLoad" >
      <div class="info">
        <p>{{goodlist.title}}</p>
        <span class="price">{{goodlist.price}}</span>
        <span class="collect">{{goodlist.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodListItem",
      props:{
        goodlist:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      computed:{
        showImage(){
          return this.goodlist.image || this.goodlist.show.img
        }
      },

      methods:{
        imgLoad(){
          this.$bus.$emit('itemImgLoad')//非父子组件之间的传值  用事件总线
        },
        itemClick(){
          this.$router.push('/detail/'+this.goodlist.iid)
          console.log(this.goodlist.iid)
        }
    },

    }
</script>

<style scoped>
.good-list-item{
  width: 48%;
  /*padding-bottom: 40px;*/
}
.good-list-item img{
  width: 100%;
  border-radius: 5px;
}
.info{
  text-align: center;
  font-size: 14px;
}
.info p{
  overflow: hidden;
 text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info .price{
    color:var(--color-tint) ;
  margin-right: 20px;
  }
.collect{
  position: relative;
}
.collect::before{
  display: block;
  position: absolute;
  content: '';
  width: 14px;
  height: 14px;
  left: -15px;
  top: -1px;
  background: url("./favor.png")0 0/14px 14px;
}
</style>
