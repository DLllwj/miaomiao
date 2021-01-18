<template>
  <div>city
    <mt-index-list ref="mylist">
      <mt-index-section :index="data.index" v-for="data in cityList" :key="data.index">
        <div @click="formatCityList(city.cityId)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted() {
    this.axios({
      url: "https://m.maizuo.com/gateway?k=5633528",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16097211283979295789678593"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities
        var { cityList, hotList } = this.formatCityList(cities)
        this.cityList = cityList;
        this.hotList = hotList;
      }
    })
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];

      for (i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i])
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].pinyin.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({ index: firstLetter, list: [{ nm: cities[i].name, id: cities[i].cityId }] })//新添加index
        } else {//添加到已有的index中
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].name, id: cities[i].cityId })
            }
          }
        }
      }

      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1
        } else if (n1.index < n2.index) {
          return -1
        } else {
          return 0
        }
      })
      //做个判断，判断数组中是否已经存在该index
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.lengh; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }


      return {
        cityList,
        hotList
      }
    }

  }
}

</script>

<style lang="scss" scoped>
</style>