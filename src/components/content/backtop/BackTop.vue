<template>
    <div class="backtop">
      <img src="~assets/img/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",

    }
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 60px;
  right: 15px;

}
  .backtop img{
    height:43px;
    width:43px;
  }
</style>
