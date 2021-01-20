<template>
  <div id="detailContrainer">
    <Header title="影片详情">
      <span @touchstart="handleToBack">></span>
    </Header>
    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.poster" alt="">
          </div>
          <div class="detail_list_info">
            <h2>{{detailMovie.name}}</h2>
            <p>评分：{{detailMovie.grade}}</p>
            <p>{{detailMovie.category}}</p>
            <p>{{detailMovie.nation}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{detailMovie.synopsis}}</p>
      </div>
      <h3>演职人员</h3>
      <div class="swiper-container detail_player" ref="detail_player">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="data in detailMovie.actors" :key="data.name">
            <img :src="data.avatarAddress" />
            <p>{{data.name}}</p>
            <p>饰演:{{data.role}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.scss'
import axios from "axios"
import Header from "@/components/Header"
export default {
  name: "detail",
  props: ["myid"],
  components: {
    Header
  },
  data() {
    return {
      detailMovie: {}
    }
  },
  methods: {
    handleToBack() {
      this.$router.back();
    }
  },
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=9844457`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16097211283979295789678593","bc":"410500"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.detailMovie = res.data.data.film
        console.log(this.detailMovie)
        this.$nextTick(() => {
          new Swiper(this.$refs.detail_player, {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
          })
        })

      }
    })

  }
}

</script>

<style lang="scss" scoped>
#detailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list {
  .detail_list_bg {
    width: 100%;
    height: 100%;
    background: gray;
    filter: blur(20px);
  }
  .detail_list_filter {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #40454d;
    opacity: 0.5;
  }
  .detail_list_content {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .detail_list_img {
    width: 108px;
    height: 150px;
    border: solid 1px #f0f2f3;
    margin: 20px;
  }
  .detail_list_img img {
    width: 100%;
    height: 100%;
  }
  .detail_list_info {
    margin-top: 20px;
  }
  .detail_list_info h2 {
    font-size: 20px;
    color: white;
    font-weight: normal;
    line-height: 40px;
  }
  .detail_list_info p {
    color: white;
    line-height: 20px;
    font-size: 14px;
    color: #ccc;
  }
}
.swiper-slide img {
  width: 100px;
  height: 100px;
}
</style>