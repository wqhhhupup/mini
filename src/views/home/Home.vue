<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles = "['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                  class="tabControl-a" v-show="isFixed"></tab-control>
      <scroll class="content" ref="scroll" @scroll="scroll"
              :pull-up-load="true"
              @pullingUp="loadMore"
              >
        <home-swiper :banners = "banners"@SwiperimageLoad="SwiperimageLoad" ></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles = "['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl"></tab-control>
        <good-list :goods = "goods[currentType].list"></good-list>

      </scroll>
      <back-top @click.native="backClick" v-show="isShow"></back-top>


    </div>
</template>

<script>
  import BackTop from 'components/content/backtop/BackTop'
  import Scroll from '@/components/common/scroll/Scroll'

  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodList from 'components/content/goods/GoodList'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import {getHomeMutidata,getHomeGoods} from "network/home";

  import {itemImgMixin} from "common/mixin";


  export default {
        name: "Home",
      components:{
        NavBar,
        BackTop,
        Scroll,
        TabControl,
        HomeSwiper,
        RecommendView,
        FeatureView,
        GoodList

      },
    mixins:[itemImgMixin],
    data(){
          return{
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShow:false,
            tabBarOffset:0,
            isFixed:false,
            saveY:0,

          }

    },
    created() {
          this.getHomeMutidata()
          this.getHomeGoods('sell')
          this.getHomeGoods('pop')
          this.getHomeGoods('new')



    },
    mounted(){

    },

    activated(){
      // console.log('huoyuede');
      this.$refs.scroll. backtop(0,this.saveY,0)

    },
    deactivated(){
      // console.log('likaide');
      this.saveY = this.$refs.scroll.getScrollY()



      this.$bus.$off('itemImgLoad',this.itemImgListener)

    },
    methods:{
      SwiperimageLoad(){
        // 通过this.$refs.tabControl获取的是整个组件  不是div标签
        // 所以如果要获取标签 就应该使用$el 来获取他的标签
        this.tabBarOffset = this.$refs.tabControl.$el.offsetTop
      },
      loadMore(){
        // console.log('已经滚动到底部了');
        this.getHomeGoods(this.currentType)
      },
      scroll(postion){
        // console.log(postion)
        this.isShow = -(postion.y) > 1000
        this.tabBarOffset = -(postion.y)>590?this.isFixed = true:this.isFixed = false


      },
      backClick(){
        console.log('点击了');
        this.$refs.scroll.backtop(0,0)
      },

      tabClick(index){
            switch (index) {
              case 0 :
                this.currentType = 'pop'
                    break
              case 1:
                this.currentType = 'new'
                    break
              case 2:
                this.currentType = 'sell'
                    break

            }
            this.$refs.tabControl1.currentIndex = index // 为了让两个组件保持同步
            this.$refs.tabControl.currentIndex = index
            console.log(index);
          },
          /*
          *
          * 网络请求
          * */
          getHomeMutidata(){
            getHomeMutidata().then(res=>{
              console.log(res);
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            })
          },
          getHomeGoods(type){
            getHomeGoods(type,1).then(res=>{
              const page = this.goods[type].page + 1
              console.log(res);
              this.goods[type].list.push(...res.data.list)
              this.goods[type].page+=1
              //由于只会调用一次 所以应该每次加载更多后使用 finishPullUp函数
              this.$refs.scroll.finishPullUp()
            })
          }

    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  /*position: relative;*/



}
  #home{
    /*padding-top: 44px;*/
    position: relative;
    height: 100vh;

  }
  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom:30px;
    left: 0;
    right: 0;
  }
  .tabControl-a{
    position: relative;
    z-index: 9;
  }
</style>
