<template>
  <header>
    <slot></slot>
    <h1>{{title}}</h1>
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
  border-bottom: 1px solid#e54847;
  position: relative;
  h1 {
    color: white;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
  }
  span {
    position: absolute;
    left: 5px;
    color: white;
    font-size: 26px;
    margin-top: 9px;
  }
}
</style>