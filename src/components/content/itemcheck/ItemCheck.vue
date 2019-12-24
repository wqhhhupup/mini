<template>
    <div class="item-check" :class="{active:isCheck}">
      <img src="~assets/img/tick.svg" alt="" >
    </div>
</template>

<script>
    export default {
        name: "ItemCheck",
      props:{
        isCheck:{
          type:Boolean,
          default(){
            return false

          }
        }

      }

    }
</script>

<style scoped>
.item-check{
  border: 2px solid #aaa;
  border-radius: 50%;
}
  .active{
    background-color: red;
    border: 2px solid red;
  }
</style>
