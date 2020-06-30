<template>
  <div id="footer">
    <span>Written by {{author}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'Coco'
    }
  }
}
</script>

<style>
#footer{
margin: 40px;text-align: center;color: #bfbfbf;
font-size: 10px;text-shadow: 0 1px 0 #999;
}
</style>