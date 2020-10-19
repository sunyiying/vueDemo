<template>
    <div>
        <template v-if="!hasChild">
            <el-menu-item :index="this.menu.path">
                <i :class="'el-icon-'+this.menu.icon"></i>
                <span slot="title">{{this.menu.label}}</span>
            </el-menu-item>
        </template>
        <template v-if="hasChild">
            <el-submenu :index="this.menu.path">
                <template slot="title">
                    <i :class="'el-icon-'+this.menu.icon"></i>
                    <span>{{this.menu.name}}</span>
                </template>
                <menuItem v-for="subItem in this.menu.children" :key="subItem.name" :menu="subItem"/>
            </el-submenu>
        </template>
    </div>
    <!-- <div>
        <template v-if="hasChild">
            <el-submenu :index="menu.path" :key="menu.name">
                <template slot="title">
                    <i :class="'el-icon-'+menu.icon"></i>
                    <span>{{menu.label}}</span>
                </template>
                <menuItem :item="subItem" v-for="subItem in menu.children" :key="subItem.name" >
                </menuItem>    
            </el-submenu>
        </template> 
         <template>
            <el-menu-item :index="menu.path"   :key="menu.name">
                <i class="'el-icon-'+menu.icon"></i>
                <span slot="title">{{menu.label}}</span>
            </el-menu-item>
        </template>     

    </div> -->
</template>
<script>
    export default {
        name: "menuItem",
        props: {
            menu: {
                type: Object,
                functional: true,
                required: true
            },
        },
        components: {           
        },
        data() {
            return {
                item: this.menu
            }
        },
        computed: {
            hasChild() {
                return this.menu.children !== undefined && this.menu.children.length > 0;
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>