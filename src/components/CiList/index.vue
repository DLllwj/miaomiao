<template>
  <div>
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        {{data.name}}
        <p style="font-size:12px">{{data.address}}</p>
        <p>{{data.Distance}}</p>
      </li>
    </ul>
    <!-- 小吃卡等项
    <div>
      <div v-for="(num,key) in data.tag" v-if="num==1" :key="key">{{key|formatCard}}</div>
    </div> -->
  </div>
</template>

<script>

import axios from "axios"
export default {
  name: "CiList",
  data() {
    return {
      cinemaList: []
    }
  },
  mounted() {
    var id = localStorage.getItem("cityId")
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=8349926`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16097211283979295789678593","bc":"410500"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas

    })
  },

  /* 将小吃卡等几项列出
  filters: {
    formatCard(key) {
      var card = [
        { key: "", value: "改签" }
      { key: "", value: "改签" }
      { key: "", value: "改签" }
      { key: "", value: "改签" }
      ……
      ]
      列出的key值与遍历的key相等时
      for (i = 0; i < card[i].length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ' ';
    }
  } */
}

</script>

<style lang="scss" scoped>
ul {
  li {
    height: 100px;
    border-bottom: 1px solid gainsboro;
  }
}
</style>