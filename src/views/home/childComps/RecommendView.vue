<template>
    <div class="recommend-view">
      <div v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "RecommendView",
      props:{
        recommends:{
            type:Array,
            default() {
              return [];
            }
        }
      }
    }
</script>

<style scoped>
.recommend-view{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommend-view div{
  flex: 1;
}
.recommend-view div img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;

}
</style>
