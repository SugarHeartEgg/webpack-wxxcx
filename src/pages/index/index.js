import { flow } from 'lodash';
// const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));

// 获取应用实例
const app = getApp(); //  eslint-disable-line no-undef

Page({
	data: {
		motto: 'Hello 原生小程序',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	// 事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../logs/logs',
		});
	},
	onLoad() {

		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
		// await delay();
		// const log = flow(() => {
		// 	console.log('is wechat mini program: ', __WECHAT__);
		// 	console.log('is alipay mini program: ', __ALIPAY__);
		// 	console.log('DEV: ', __DEV__);
		// });
		// log();
		// 调用应用实例的方法获取全局数据
		// app.getUserInfo((userInfo) => {
		// 	console.log(userInfo);
		// 	// 更新数据
		// 	this.setData({ userInfo });
		// });
	},
	getUserInfo(e) {
		console.log(e);
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
