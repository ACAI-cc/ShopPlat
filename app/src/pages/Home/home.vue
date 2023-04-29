<template>
  <div>
    <!-- 使用全局组件：三级联动组件 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
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


export default {
  name:"Home",
  components:{    
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,

  },

}
</script>

<style>

</style>