<template>
  <div>
    <div class="search-header">
      <input type="text" placeholder="搜电影/搜影院" v-model="message">
      <span>取消</span>
    </div>
    <div>
      <div class="type">
        电影/电视剧/综艺
      </div>
      <ul>
        <li v-for="data in moviesList" :key="data.filmId">
          <img :src="data.poster" alt="">
          <h3>{{data.name}}</h3>
          <p>观众评分<span>{{data.grade}}</span></p>
          <p>主演：{{data.actors | actorfilter}}</p>
          <p>类型：{{data.category }}</p>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      message: "",
      moviesList: []
    }
  },
  watch: {
    //监听输入的信息改变后，获取的数据随之改变
    message(newVal) {
      this.axios.get("https://m.maoyan.com/ajax/search?kw=a&cityId=134&stype=-1").then(res => {
        var msg = res.data.msg
        var movies = res.data.data.movies;
        if (msg && movies) {   //匹配的数据都存在
          this.moviesList = res.data.data.movies.list
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-header {
  width: 100%;
  height: 45 px;
  background-color: rgb(243, 239, 239);
  border-bottom: 1px solid #ebe8e3;
}
span {
  color: red;
}
input {
  width: calc(100%-40px);
  height: 25px;
  font-size: 14px;
  margin: 10px;
  padding-right: 120px;
  outline: none;
  border: 1px solid rgb(190, 188, 188);
  border-radius: 3px;
}
.type {
  border-bottom: 1px solid#ebe8e3;
  color: gray;
  font-size: 14px;
  padding: 10px;
  font-weight: 700;
}
</style>