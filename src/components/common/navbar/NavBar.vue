<template>
    <div class="nav">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav{
    display: flex;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    line-height: 44px;
    color: white;
    /*position: relative;*/
  }
.left,.right{
  width: 60px;
  height: 44px;
  /*background-color: red;*/
}
.center{
  flex: 1;
  /*background-color: pink;*/
  text-align: center;

}
</style>
