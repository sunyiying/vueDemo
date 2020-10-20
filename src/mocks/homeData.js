import Mock from "mockjs";

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'Spring boot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Vue',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }
                ]
            }
        }
    },
    /**
     * 模拟获取菜单数据
     */
    getMenuData: () => {
        return {
            code: 200,
            data: [
                {
                    path: "/",
                    icon: "menu",
                    name: "home",
                    label: "首页"
                },
                {
                    path: "/user",
                    icon: "menu",
                    name: "user",
                    label: "用户组织",
                    children: [
                        {
                            path: "/user",
                            icon: "location",
                            name: "userInfo",
                            label: "用户信息"
                        },
                        {
                            path: "/userRole",
                            icon: "location",
                            name: "userRole",
                            label: "用户角色"
                        }
                    ]
                },
                {
                    path: "/module",
                    icon: "menu",
                    name: "module",
                    label: "功能模块",
                    children: [
                        {
                            path: "/domain",
                            icon: "location",
                            name: "domain",
                            label: "应用域维护"
                        },
                        {
                            path: "/menu",
                            icon: "location",
                            name: "menu",
                            label: "菜单维护"
                        }
                    ]
                }, {
                    path: "/other",
                    icon: "menu",
                    name: "other",
                    label: "其它模块",
                    children: [
                        {
                            path: "/otherOne",
                            icon: "location",
                            name: "otherOne",
                            label: "测试模块一",
                            children: [
                                {
                                    path: "/o1",
                                    icon: "location",
                                    name: "otherOne",
                                    label: "测试1-1",
                                }
                            ]
                        },
                        {
                            path: "/otherTwo",
                            icon: "location",
                            name: "otherTwo",
                            label: "测试模块二"
                        }
                    ]
                }
            ]
        }
    }


}

