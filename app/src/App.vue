<template>
  <div>
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
  
</template>

<script>
import Header from './components/Header/header.vue'
import Footer from './components/Footer/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    // 优化typenav发送请求的次数，在根组件内请求服务器，只请求一次
    //通过vuex发送请求，获取数据，存储在仓库中
    // 派发仓库action
    this.$store.dispatch("categoryList");
  }

}
</script>

<style>

</style>
