import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 1. 第一步 先创建组件构造器
  const toastConstructor = Vue.extend(toast)
  // 2. 通过new的方法 通过组件构造器 创建一个组件
  const toast = new toastConstructor()
  //3.通过$mount 的方法 把 组件挂载到一个新创建的div上   不能这么通过toast.$el 的方式拿  拿不到
 toast.$mount(document.createElement('div'))
  //4. 把组件添加到body上边
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = Toast
}

export default obj
