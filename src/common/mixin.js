import {debounce} from "./until";

export const itemImgMixin = {
  data(){
    return{
      itemImgListener: null,
      imgRefresh:null
    }
  },
  mounted(){
    this.imgRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener =()=>{
      this.imgRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:1000
    })

  }
}
