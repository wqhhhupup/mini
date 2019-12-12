<template>
   <div class="detail">
     <detail-child @itemClick="titleClick" ref="nav"></detail-child>
     <scroll class="content" ref="scroll" @scroll="contentScroll">
     <detail-swiper :top-images="topImages"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
       <detail-shop-info :shopInfo="shopInfo" ref="shopInfo"></detail-shop-info>
       <detail-image-info :detailImageInfo="imagesInfo" @detailImgLoad="detailImgLoad"
       ></detail-image-info>
       <detail-parms-info :paramInfo="goodsParms" ref="param"></detail-parms-info>
       <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
       <good-list :goods="recommendInfo" ref="recommend"></good-list>
    </scroll>
     <detail-bottom-bar></detail-bottom-bar>
   </div>
</template>

<script>
    import DetailChild from './DetailChild/DetailChild'
    import {getDetail,Goods,GoodsParams,getRecommend} from "network/detail";
    import DetailSwiper from './DetailChild/DetailSwiper'
    import DetailBaseInfo from './DetailChild/DetailBaseInfo'
    import Scroll from "components/common/scroll/Scroll"
    import DetailShopInfo from './DetailChild/DetailShopInfo'
    import DetailImageInfo from './DetailChild/DetailImageInfo'
    import DetailParmsInfo from './DetailChild/DetailParmsInfo'
    import DetailCommentInfo from './DetailChild/DetailCommentInfo'
    import GoodList from 'components/content/goods/GoodList'
    import {debounce} from "common/until";
    import {itemImgMixin} from "common/mixin";
    import DetailBottomBar from './DetailChild/DetailBottomBar'


    export default {
        name: "Detail",
      components:{
        DetailChild,
        DetailSwiper,
        DetailBaseInfo,
        Scroll,
        DetailShopInfo,
        DetailImageInfo,
        DetailParmsInfo,
        DetailCommentInfo,
        GoodList,
        DetailBottomBar
      },
      mixins:[itemImgMixin],
      data(){
          return{
            iid:null,
            topImages: [],
            goods:{},
            shopInfo:{},
            imagesInfo:{},
            goodsParms:{},
            commentInfo:{},
            recommendInfo:[],
            themeTopY:[],
            getThemeY:null,
            currentIndex:0


          }
      },
      created() {
          this.iid = this.$route.params.iid
          getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result
            this.topImages = data.itemInfo.topImages

            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // 继续请求详情页面的信息
            this.shopInfo = data.shopInfo
            // 请求接下来的图片的信息
            this.imagesInfo = data.detailInfo
            // 请求尺寸数据
            this.goodsParms = new GoodsParams(data.itemParams.info,data.itemParams.rule)
            // 评论信息
          if (data.rate.cRate !==0){
            this.commentInfo = data.rate.list[0]
          }

          })
          getRecommend().then(res=>{
            console.log(res);
            this.recommendInfo = res.data.list
          })
        this.getThemeY = debounce(()=>{
          this.themeTopY=[]
          this.imgRefresh()
          this.themeTopY.push(0)
          this.themeTopY.push(this.$refs.param.$el.offsetTop)
          this.themeTopY.push(this.$refs.comment.$el.offsetTop)
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
          this.themeTopY.push(Number.MAX_VALUE)
          console.log(this.themeTopY)

        },100)
      },
      mounted() {
      },
      destroyed() {
        this.$bus.$off('itemImgLoad',this.itemImgListener)
      },
      methods:{
        detailImgLoad(){
          this.getThemeY()


        },
        titleClick(index){
          this.$refs.scroll.scroll.scrollTo(0,-this.themeTopY[index],200)
        },
        contentScroll(position){
          const positionY = -(position.y)
          for (let i=0 ; i<this.themeTopY.length-1;i++){
            if (this.currentIndex !==i && positionY >=this.themeTopY[i] && positionY<=this.themeTopY[i+1]){
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex


            }
          }
        }
      }
    }
</script>

<style scoped>
  .detail{
    height:100vh;
    position: relative;
    background-color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    background-color: #ffffff

   }
</style>
