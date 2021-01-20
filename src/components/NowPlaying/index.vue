<template>
  <div ref="movie_body">
    <Loading v-if="isLoading" />
    <!-- <Scroll :handleToScroll="ToScroll" :handleToTouchEnd="ToTouchEnd"> -->
    <!-- <Scroll> -->
    <ul>
      <!-- <li class="pullDown">{{pullDownMsg}}</li> -->
      <li v-for="data in datalist" :key="data.filmId">
        <div @click="handleToDetail(data.filmId)"><img :src="data.poster" alt=""></div>
        <h3 @click="handleToDetail(data.filmId)">{{data.name}}</h3>
        <p>观众评分<span>{{data.grade}}</span></p>
        <p>主演：{{data.actors | actorfilter}}</p>
        <p>类型：{{data.category }}</p>
      </li>
    </ul>
    <!-- </Scroll> -->
  </div>
</template>

<script>

import axios from "axios"
import Vue from "vue"

Vue.filter("actorfilter", function (data) {
  var newList = data.map(item => item.name)
  return newList.join(" ")
})
export default {
  name: "nowplaying",
  data() {
    return {
      datalist: [],
      pullDownMsg: "",  //下拉时候最顶部出现的正在更新等
      isLoading: true,  //加载
      prevCity: -1,   //上一个城市id
    }
  },
  //从城市跳转到正在热映执行该生命周期，让他刷新，从其他地方跳转到正在热映不执行
  activated() {
    var cityId = this.$store.state.city.cityId;
    if (this.prevCity === cityId) { return; }
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=1&pageSize=10&type=1&k=4470129`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16097211283979295789678593","bc":"341700"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films;
      this.isLoading = false;
      this.prevCity = cityId;

      /* 滚动更流畅
        this.$nextTick(() => {
        var scroll=new BScroll(this.$refs.movie_body, {
          tap: true,
          proteType: 1
        });
        滑动开始时的事件
        scroll.on("scroll", (pos) => {
          //console.log("scroll")
          if(pos.y>30){
            this.pullDownMsg="正在更新中" //表示手指触摸屏幕往下滑动时最上面出现的内容
          }
        })
        滑动结束时的事件
        scroll.on("touchEnd",(pos)=>{
          //console.log("touchend")
          if(pos.y>30){
            this.axios.()then(res=>{ //更新后的数据
              this.pullDownMsg="更新成功"
              setTimeout(()=>{    //加个定时器使内容变成空
                this.movieList=res.data.data.movieList;
                this.pullDownMsg=""
              })
            })
          }
        })
      }) */

    })
  },
  methods: {
    handleToDetail(id) {
      this.$router.push(`/movie/detail/${id}`)
    },
    /* ToScroll() {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新中" //表示手指触摸屏幕往下滑动时最上面出现的内容
      }
    },
    ToTouchEnd(){
      if (pos.y > 30) {
        this.axios.()then(res => { //更新后的数据
          this.pullDownMsg = "更新成功"
          setTimeout(() => {    //加个定时器使内容变成空
            this.movieList = res.data.data.movieList;
            this.pullDownMsg = ""
          })
        })
      }
    }  */
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 10px;
    overflow: hidden;
    border-bottom: 1px solid #ebe8e3;
    img {
      float: left;
      width: 100px;
      margin: 0 10px 10px 0;
    }
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 5px 0;
      font-size: 14px;
      color: rgb(80, 79, 79);
      span {
        color: orange;
        font-weight: 700;
        margin-left: 5px;
      }
    }
  }
  .pullDown {
    margin: 0;
    padding: 0;
    border: none;
  }
}
</style>