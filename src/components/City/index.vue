<template>
  <div>
    <mt-index-list ref="mylist">
      <h2>热门城市</h2>
      <!--  <ol>
        <li v-for="data in hotList" :key="data.cityId">{{hotList}}</li>
      </ol> -->
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div @click="handleClick(city.cityId);handleToCity(city.name,city.cityId)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      datalist: [],
      hotList: []
    }
  },
  mounted() {
    //console.log(this.$refs.mylist.$el)
    this.$refs.mylist.$el.style.height = document.documentElement.clientHeight - 148 + "px"
    axios({
      url: "https://m.maizuo.com/gateway?k=5633528",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16097211283979295789678593"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.datalist = this.handleCity(res.data.data.cities)
      this.hotList = hotList
    })

  },
  methods: {
    handleCity(datalist) {
      //console.log(datalist)
      //把26个字母传入编码转换为相应的字符
      var letterArr = []
      var hotList = [];

      for (var i = 0; i < datalist.length; i++) {
        if (datalist[i].isHot === 1) {
          hotList.push(datalist[i])
        }
      }
      //console.log(hotList)
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      //console.log(letterArr)

      //把全部数据的pinyin属性的第一个字符取出来和字母集的小写状态对比，一样的放在一个数组中，索引判断，过滤方法
      var newlist = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        //判断是否有空数组
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
        //console.log(newlist)
      }
      return newlist

    },
    handleClick(id) {
      localStorage.setItem("cityId", id)
      this.$router.push(`/movie`)
    },
    handleToCity(name, cityId) {
      this.$store.commit("city/CITY_INFO", { name, cityId });
      //本地存储，刷新后显示的还是该name和cityId
      window.localStorage.setItem("newNm", name);
      window.localStorage.setItem("newId", cityId)
    }
  }
}

</script>

<style lang="scss" scoped>
</style>