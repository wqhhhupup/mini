<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
    
</template>

<script>
    export default {
        name: "Toast",
      data(){
          return {
            message:'',
            isShow:false
          }
      },
      methods:{
          show(message,duration){
            this.message = message
            this.isShow = true
            setTimeout(()=>{
              this.isShow = false
              this.message = ''
            },duration)

          }
      }
    }
</script>

<style scoped>
.toast{
  position: absolute;
  background-color: rgba(0,0,0,0.7);
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: white;
}
</style>
