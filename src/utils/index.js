export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

export const pathMap = {
  login: '登录',
  introduce: '系统介绍',
  dashboard: '大盘数据',
  addGood: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  category: '分类管理',
  level2: '分类二级管理',
  level3: '分类三级管理',
  goods: '商品管理',
  guest: '会员管理',
  order: '订单管理',
  order_detail: '订单详情',
  account: '修改账户'
}

// 单张图片上传
export const uploadImgServer = 'http://localhost:8082/manage-api/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://localhost:8082/manage-api/upload/files'