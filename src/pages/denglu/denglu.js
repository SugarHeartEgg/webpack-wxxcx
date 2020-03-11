// 获取实例
const app = getApp();
// 导入$api
import $api from '../../utils/api'
Page({
  data: {
    name: "周杰伦"
  },
  onLoad() {
    // this.getSearch()
  },
  toDengLu() {
    // 去登陆
    wx.navigateTo({
      url: '../zhen-shi/zhen-shi'
    })
  },
  toTiYan() {
    // 去体验
    wx.reLaunch({
      url: '../ti-yan/ti-yan'
    });
  },
  getSearch() {
    // 搜索
    $api._get('search', {
      keywords: this.data.name
    }).then(res => {
      console.log(res);

    })
  }
})