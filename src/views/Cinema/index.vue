<template>
  <div>
    <Header title="喵喵影院" />
    <div>
      <ul>
        <router-link to="" tag="li" active-class="CinemaActive">全城</router-link>
        <router-link to="" tag="li" active-class="CinemaActive">品牌</router-link>
        <router-link to="" tag="li" active-class="CinemaActive">特色</router-link>
      </ul>
      <CiList />

    </div>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Tabbar from "@/components/Tabbar"
import CiList from "@/components/CiList"
export default {
  name: "Cinema",
  components: {
    Header,
    Tabbar,
    CiList
  },

}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  top: 0;
  left: 0;
  li {
    flex: 1;
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #ebe8e3;
    text-align: center;
  }
}
</style>  