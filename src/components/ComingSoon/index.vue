<template>
  <div>

  </div>
</template>

<script>

import axios from "axios"
export default {
  name: "ComingSoon",
  mounted() {
    axios.get('http://39.97.33.178/api/searchList?cityId=10&kw=a').then(res => {
      console.log(res.data)
    })
  }

}
</script>

<style lang="scss" scoped>
</style>