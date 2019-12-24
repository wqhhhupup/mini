import {request} from "./require";
export function getDetail(iid) {
  return request({
    url:"/detail",
    params:{
      iid
    }
  })

}
export class Goods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor

  }
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
  
}
// 尺寸数据
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

