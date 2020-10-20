<template>
    <el-container style="height: 100vh;">
        <el-aside width="200px">
            <asider></asider>
        </el-aside>
        <el-container>
            <el-header>
                <Aheader></Aheader>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
    import Asider from "../components/menus/Asider";
    import Aheader from "../components/Aheader";

    export default {
        components: {
            Asider,
            Aheader
        },
    }
</script>
<style lang="scss" >  
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }
    .el-header,
    {
        background-color: #B3C0D1;
        color: #333;
        height: 80px !important;
        padding:0px;
    }
    .el-main {
        background-color: #ccc;
        color: #333;
        border: solid blue 1px;
    }
</style>