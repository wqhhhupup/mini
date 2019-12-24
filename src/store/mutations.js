import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./state-type";
export default {
  // mutations的唯一职责就是修改state
  // 因为官方建议是单一职责  所以在mutation里只负责添加
  // 逻辑任务交给 action
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }


}
