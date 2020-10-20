<template>
    <header>
        <div class="h-top">
            <div class="l-left"><span><i class="el-icon-menu"></i>   首页</span></div>

            <div class="l-right">
                <el-dropdown trigger="click">
                    <span class="el-icon-user">
                        张三<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-check">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </div>
        <div class="h-bottom">
            <menuTags></menuTags>
        </div>
    </header>
</template>
<script>
import menuTags from "./ATab"
    export default {
        name: "AHeader",
        data() {
            return {
            }
        },
        components: {
            menuTags,
        },
    }
</script>
<style lang="scss" scoped>
    header {
        display: flex;
        flex-direction: column;
        padding: 0px;
        justify-content:space-around;

        .h-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 10px;
            /* background-color: red; */

            .l-left {
                width: 100px;
                padding-left: 5px;
                /* background-color: bisque; */
            }

            .l-right {
                width: 100px;
                /* background-color: chocolate; */
            }
        }

        .h-bottom {
            background-color:cornsilk;
            margin-top: 25px;
            height: 25px;
        }
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>