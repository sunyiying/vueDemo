 <template>
  <div><span>AAA</span><span>bbbb</span></div>
</template>
 <script>
 import {mapState,mapMutations}  from "vuex"
export default {
  name: "tags",
  computed: {
      ...mapState({
          tags:state=>state.Tags.tabList
      }),
      methods: {
          ...mapMutations({
              close:'closeMenu'
          }),
          closeTag(tag) {
             console.log('tag closed',tag) ;
          },
          clickTag(tag){
              console.log('tag clicked',tag);
          }
      },
  },
};
</script>
 <style lang="scss" scoped>
</style>