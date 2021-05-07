import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElPopover,
  ElTag,
  ElCard,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDialog,
  ElPopconfirm,
  ElUpload,
  ElLoading,
  ElSelect,
  ElOption,
  ElRadioGroup,
  ElRadio,
  ElCascader,
  ElCheckbox,
  ElInputNumber
} from 'element-plus'

// import 'element-plus/lib/theme-chalk/index.css'
import '~/theme/index.css'

const app = createApp(App)

const orderStatus = {
  0: '待支付',
  1: '已支付',
  2: '配货完成',
  3: '出库成功',
  4: '交易成功',
  '-1': '手动关闭',
  '-2': '超时关闭',
  '-3': '商家关闭'
}

// 全局方法
app.config.globalProperties.$filters = {
  prefix (url) {
    if (url && url.startsWith('http')) {
      // 当 url 以 http 开头时候，返回原路径
      return url
    } else {
      // 否则，我们给路径添加 host，如下
      url = `http://yeelei.top/mall-admin/upload/${url}`
      return url
    }
  },
  orderMap(status) {
    return orderStatus[status] || '未知状态'
  }
}
app.config.globalProperties.goTop = function() {
  const main = document.querySelector('.main')
  main.scrollTop = 0
}
app.use(router)
app.use(ElButton)
  .use(ElContainer)
  .use(ElAside)
  .use(ElHeader)
  .use(ElMain)
  .use(ElFooter)
  .use(ElMenu)
  .use(ElSubmenu)
  .use(ElMenuItemGroup)
  .use(ElMenuItem)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .use(ElPopover)
  .use(ElTag)
  .use(ElCard)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPagination)
  .use(ElDialog)
  .use(ElPopconfirm)
  .use(ElUpload)
  .use(ElLoading)
  .use(ElSelect)
  .use(ElOption)
  .use(ElRadioGroup)
  .use(ElRadio)
  .use(ElCascader)
  .use(ElCheckbox)
  .use(ElInputNumber)
app.mount('#app')
