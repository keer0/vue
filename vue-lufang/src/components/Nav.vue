<template>
    <Nav class="Nav-img">
        <img src="./assets/title-right1.png">
        <router-link to="/richang"><img src="./assets/title-right2.png"></router-link>
        <router-link to="/youxuan"><img src="./assets/title-right3.png"></router-link>
        <router-link to="/youxuan"><img src="./assets/title-right4.png"></router-link>
        <router-view></router-view>
    </Nav>
</template>
<script>
import youxuan from './views/youxuan'
import richang from './views/richang'
export default {
    
}
</script>
<style scoped>
.Nav-img{width: 176px;float: right;}
.Nav-img:first-child{margin-right:0px;}
a{width: 176px;margin-right: 20px;}
</style>