Component({
    data: {
        selected: 0,
        color: "#333333",
        selectedColor: "#d43a3c",
        backgroundColor: "#ffffff",
        list: [
            {
                pagePath: "/pages/ti-yan/fa-xian/index",
                iconPath: "/images/icon_component.png",
                selectedIconPath: "/images/icon_component_HL.png",
                text: "发现"
            },
            {
                pagePath: "/pages/ti-yan/dian-tai/dian-tai",
                iconPath: "/images/icon_API.png",
                selectedIconPath: "/images/icon_API_HL.png",
                text: "电台"

            }
        ]
    },
    attached() {
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})