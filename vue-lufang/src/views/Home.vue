<template>
    <div class="home">
        <div class="imgHeader">
            <img src="../assets/logo-bg1.gif">
            <img src="../assets/logo-bg2.gif">
            <img src="../assets/logo.png" class="logo">
        </div>
        <div class="biaoti">
            <router-link :to="{ path: 'mengqu' }" tag="a" alt="萌趣有爱"><img src="../assets/title-right1.png" ></router-link>
            <router-link :to="{ path: 'richang' }" tag="a" alt="日常芳香"><img src="../assets/title-right2.png" ></router-link>
            <router-link :to="{ path: 'yuanchuang' }" tag="a" alt="原创配方"><img src="../assets/title-right3.png" ></router-link>
            <!-- <a href="../views/xiangqing.vue" title="_blank" alt="优选原料"><img src="../assets/title-right4.png"></a> -->
            <router-link :to="{ path: 'youxuan' }" tag="a" alt="优选原料"><img src="../assets/title-right4.png"></router-link>
        </div>
        <img src="../assets/xiaolu1.png" class="xiaolu">
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
   name: 'Home',
   components: {
       Footer,
   }
}
</script>
<style scoped>
.imgHeader{width: 400px; height: 320px; margin: 0 auto;position: relative;}
.imgHeader img{display: block;}
.logo{position: absolute;right: 20px;top: 37px;}
.biaoti{width: 176px;float: right;}
.biaoti >a:last-child{margin-right:0px;}
.biaoti>a{width: 29px;margin-right: 20px;}
.xiaolu{ display: block;margin-top: 78px;}
</style>