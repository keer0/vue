<template>
  <div class="yuanchuang">
    <span @click="prev" class="prev">返回 ></span>
    <h1>原创配方</h1>
  </div>
</template>
<script>
export default {
  methods:{
    prev(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.prev{cursor: pointer;}
</style>