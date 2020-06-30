<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
import Todo from './views/Todo.vue'
export default {
  components: {
    Header,
    Footer,
    Todo,
  }
}
</script>
<style lang="scss">
html,body{margin: 0;padding: 0;width: 100%;height: 100%;}
body{background-image: url(assets/bg.jpg);
background-size: cover;background-position: center;
font: 14px;color: #4d4d4d;-webkit-font-smoothing: antialiased;
font-weight: 300;
}
#app {
position: absolute;left: 0;right: 0;top: 0;bottom: 0;
}
#cover{position: absolute;left: 0;right: 0;top: 0;bottom: 0;
background-color: #999;opacity: 0.8;z-index: -1;
}
</style>
