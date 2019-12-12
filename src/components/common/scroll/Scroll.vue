<template>
    <div  class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
      props: {
        pullUpLoad: {
          type: Boolean,
          default() {
            return false
          }
        }
      },
      data(){
          return{
            scroll:null
          }
      },
      mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:3,
            pullUpLoad: this.pullUpLoad,
            click:true

          }),
        this.scroll.on('scroll',position=>{
          this.$emit('scroll',position)
        }),
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp') //对应的是上边的pullUpLoad，pullingUp为检测是否到达底部
        })

      },
      methods:{
          backtop(x,y,time=500){
            this.scroll.scrollTo(x,y,500)

          },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
          // console.log('----');
        },
        getScrollY(){
            return this.scroll.y

        }
      }
    }
</script>

<style scoped>

</style>
