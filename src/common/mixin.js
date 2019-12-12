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

  }
}
