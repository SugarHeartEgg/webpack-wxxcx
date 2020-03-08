// 获取实例
const app = getApp();
// 导入$api
import $api from '../../utils/api'
Page({
  data: {
    name: "王大毛"
  },
  onLoad() {
    this.getSearch()
  },
  getSearch() {
    $api._get('search', {
      keywords: this.data.name
    }).then(res => {
      console.log(res);

    })
  }
})