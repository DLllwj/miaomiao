<template>
  <div>
    <Header title="喵喵电影" />
    <ul>
      <router-link to="/movie/city" tag="li" activeClass="MovieClass">{{$store.state.city.name}}\/</router-link>
      <router-link to="/movie/nowPlaying" tag="li" activeClass="MovieClass">正在热映</router-link>
      <router-link to="/movie/comingSoon" tag="li" activeClass="MovieClass">即将上映</router-link>
      <router-link to="/movie/search" tag="li" activeClass="MovieClass">搜索</router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar />
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Tabbar from "@/components/Tabbar"
import { messageBox } from "@/components/JS/index.js"
export default {
  name: "Movie",
  components: {
    Header,
    Tabbar
  },
  mounted() {

    setTimeout(() => {
      this.axios.get().then((res) => {
        var msg = res.data.msg;
        if (msg === 'ok') {
          var nm = res.data.data.name;
          var id = res.data.data.id;
          if (this.$store.state.city.id == id) { return; }//id一样不弹窗
          messageBox({
            title: '定位',
            content: "沈阳",
            cancel: "取消",
            ok: "切换定位",
            handleOk() {
              window.localStorage.setItem('nowNm', nm);
              window.localStorage.setItem('nowId', id);
              window.localtion.reload()
            }
          })
        }
      })
    })

  }
}
</script>

<style lang="scss" scoped>
.MovieClass {
  color: #e54847;
  border-bottom: 1px solid #e54847;
}
ul {
  display: flex;
  top: 0;
  li {
    flex: 1;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    border-bottom: 1px solid #ebe8e3;
    text-align: center;
    color: #666;
  }
}
</style>