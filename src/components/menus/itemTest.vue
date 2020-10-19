<template>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">{{this.item.label}}</span>
    </el-menu-item>
</template>
<script >
    export default{
        props: {
            item: {
                type: Object,
                functional:true,
                required:true
            },
        },
    }
</script>
<style lang="scss" scoped>
    
</style>