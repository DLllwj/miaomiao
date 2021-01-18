<template>
  <footer>
    <ul>
      <router-link to="/movie" tag="li" activeClass="myactive">
        <i class="icomoon icon-camera"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="icomoon icon-lock"></i>
        <p>影院</p>
      </router-link>
      <router-link to="/mine" tag="li" activeClass="myactive">
        <i class="icomoon icon-shopping-cart"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style lang="scss" scoped>
.myactive {
  color: #e54847;
}
footer {
  position: fixed;
  bottom: -5px;
  left: 0px;
  background-color: white;
  width: 100%;
  height: 50px;
  border-top: 2px solid #ebe8e3;
  ul {
    display: flex;
    text-align: center;
    align-items: center;
    li {
      flex: 1;
      height: 40px;
      margin: 5px 0;
      p {
        font-size: 12px;
        font-weight: 400;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>