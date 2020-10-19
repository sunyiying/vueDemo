<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
       <!--直接写菜单数据-->
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>选项1</span>
            </el-menu-item>
            <el-submenu index="1-4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>选项4</span>
                </template>
                <el-menu-item index="1-4-1">
                    <i class="el-icon-location"></i>
                    <span>选项4-1</span>
                </el-menu-item>  
                <el-submenu index="1-4-2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>选项1-4-2</span>
                    </template>
                    <el-menu-item index="1-4-2-1">
                        <i class="el-icon-location"></i>
                        <span>选项1-4-2-1</span>
                    </el-menu-item>                
                </el-submenu>              
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item> -->

        <!--动态直接绑定数据-->
        <!-- <el-submenu :index="item.path" v-for="item in hasChild" :key="item.name">
            <template slot="title">
                <i :class="'el-icon-'+item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.name" >
                <i :class="'el-icon-'+subItem.icon"></i>
                <span>{{subItem.label}}</span>
            </el-menu-item>    
        </el-submenu>
        <el-menu-item :index="item.path" v-for="item in hasNoChild" :key="item.name">
            <i class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item> -->

        <!--自定义组件实现菜单-->               
        <menuItem v-for="item in menuData" :key="item.name" :menu="item" />
        
    </el-menu>

    <!-- <itemTest></itemTest> -->
</template>
<script>
    import menuItem from "./MenuItem"
    // import itemTest from "./itemTest"
    export default {
        components: {
            menuItem,
            // itemTest
        },
        data() {
            return {
                menuData: [
                    {
                        path: "/",
                        icon: "location",
                        name: "",
                        label: "首页"
                    },
                    {
                        path: "/user",
                        icon: "location",
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
                        path: "/",
                        icon: "location",
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
                                path: "/",
                                icon: "location",
                                name: "menu",
                                label: "菜单维护"
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            hasChild() {
                return this.menuData.filter(c=>c.children); 
            },
            hasNoChild(){
                return this.menuData.filter(c=>c.children==undefined ||c.children.length==0 ||!c.children);
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