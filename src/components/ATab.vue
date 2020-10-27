<template>
    <div>
        <el-tag
        :key="tag.name"
        v-for="tag in tags"
        :closable="tag.name!=='home'"
        :disable-transitions="false"
        @click="handleClick(tag)"
        :effect="$route.name===tag.name?'dark':'plain'"
        @close="handleClose(tag)">
        {{tag.label}}
      </el-tag>

    </div>
</template>
<script>
    import { mapState, mapMutations } from "vuex"
    export default {
        computed: {
            ...mapState({
                tags: state => state.Tabs.tabList,
                curMenu:state=>state.Tabs.currentMenu
            }),
        },
        methods: {
            ...mapMutations({
                close: 'closeMenu'
            }),
            handleClose(tag) {
                console.log('tag closed', tag);
                this.$store.commit("closeMenu",tag);
                this.handleClick(this.$store.state.Tabs.currentMenu);
            },
            handleClick:function(tag) {
                console.log('tag clicked', tag);
                this.$store.commit("selectMenu", tag);
                this.$router.push({ name: tag.name });
            }            
        },
    };
</script>
<style lang="scss" scoped>
     .el-tag + .el-tag {
    margin-left: 3px;
    cursor:pointer;
  }
</style>