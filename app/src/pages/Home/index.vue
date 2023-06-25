<template>
  <div>
    <!-- 使用全局组件：三级联动组件 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- 父子通信:已经挂在完毕，传递数据 -->
    <Floor v-for="(floor) in floorList" :key='floor.id' :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";


export default {
  name:"home",
  components:{    
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,

  },
  
  mounted() {
    // 在home页面派发floor的数据，可以遍历floorList出现两个floor组件
    this.$store.dispatch('floorList');
  
  },
  computed: {
    ...mapState({
      floorList:(state)=>{
        return state.home.floorList;
      }
    })
  },

}
</script>

<style>

</style>