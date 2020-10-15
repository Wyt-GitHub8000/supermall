import {request} from "./request";
//减少代码的耦合度
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
