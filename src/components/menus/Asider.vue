<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <menuItem v-for="item in menuData" :key="item.name" :menu="item">
        </menuItem>
    </el-menu>
</template>
<script>
    import menuItem from "./MenuItem"
    export default {
        components: {
            menuItem,
        },
        data() {
            return {
                menuData1: [
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
                                path: "/userInfo",
                                icon: "location",
                                name: "userInfo",
                                label: "用户信息"
                            },
                            {
                                path: "/",
                                icon: "location",
                                name: "userRole",
                                label: "用户角色"
                            }
                        ]
                    },
                    {
                        path: "/menu",
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
                    }
                ],
                menuData: []
            }
        },
        computed: {
            hasChild() {
                return this.menuData.filter(c => c.children);
            },
            hasNoChild() {
                return this.menuData.filter(c => c.children == undefined || c.children.length == 0 || !c.children);
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            this.$http.fetch('/home/getMenuData').then(res => {
                // console.log(res.code);
                // console.log(res.data);
                this.menuData=res.data;
            })
        },
    }
</script>
<style lang="scss" scoped>
    .el-menu {
        height: 100%;
        border: none;

    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>