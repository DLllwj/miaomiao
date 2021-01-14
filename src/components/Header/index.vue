<template>
  <header>
    {{title}}
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "喵喵电影"
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  width: 100%;
  background-color: #e54847;
  color: white;
  line-height: 50px;
  border-bottom: 1px solid#e54847;
  text-align: center;
  font-size: 18px;
}
</style>