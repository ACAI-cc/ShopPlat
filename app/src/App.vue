<template>
  <div>
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
  
</template>

<!-- 自己账号 ：13101425322 密码： 123456
    有数据的：13700000000 密码：111111
-->
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
    // 通过vuex发送请求，获取数据，存储在仓库中
    // 派发仓库action
    this.$store.dispatch("categoryList");

    
    //判断浏览器是否支持popstate
    // history允许访问浏览器的曾经在标签页或者框架里访问的会话历史记录。
    //  history.pushState方法向浏览器的会话历史栈增加了一个条目。
    if(window.history && window.history.pushState){
      history.pushState(null,null,document.URL);
      window.addEventListener('popstate',this.cancel,false);
    }
    
  },
  methods: {
    // 浏览器回退按钮
    cancel(){
      this.$router.go(-1)
    }
  },

}
</script>

<style>

</style>
