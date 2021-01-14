<template>
  <div>
    <Header title="喵喵电影" />
    <ul>
      <router-link to="/movie/city" tag="li" activeClass="MovieClass">大连\/</router-link>
      <router-link to="/movie/nowPlaying" tag="li" activeClass="MovieClass">正在热映</router-link>
      <router-link to="/movie/comingSoon" tag="li" activeClass="MovieClass">即将上映</router-link>
      <router-link to="/movie/search" tag="li" activeClass="MovieClass">搜索</router-link>
    </ul>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Tabbar from "@/components/Tabbar"
export default {
  name: "Movie",
  components: {
    Header,
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
.MovieClass {
  color: #e54847;
  border-bottom: 2px solid #e54847;
}
ul {
  display: flex;
  top: 0;
  li {
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #ebe8e3;
    text-align: center;
  }
}
</style>