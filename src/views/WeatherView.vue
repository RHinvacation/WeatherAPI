<template>
  <el-container>
    <el-main>
      <div class="search-container">
        <el-input v-model="city" placeholder="请输入城市" @keydown.enter="weatherQuery" @click="weatherQuery"
          class="city-input" />
        <el-button round @click="weatherQuery">查询</el-button>
      </div>
      <div v-if="weatherInfo.city" class="weather-info">
        <div class="current-weather">
          <div class="weather-summary">
            <h3>{{ weatherInfo.city }} {{ formatWeaInfoDate(weatherInfo.date) }} {{ weatherInfo.week }}</h3>
            <p>{{ weatherInfo.wea }}&nbsp;&nbsp;&nbsp;{{ weatherInfo.tem1 }}°C/{{ weatherInfo.tem2 }}°C {{ weatherInfo.win
            }}</p>
            <p class="temperature">{{ weatherInfo.tem }}°C</p>
            <div class="additional-info">
              <span>空气质量：{{ weatherInfo.aqi.air_level }}</span>&nbsp;
              <span>湿度：{{ weatherInfo.humidity }}</span>
            </div>
            <p>{{ weatherInfo.wea_day }} / {{ weatherInfo.wea_night }}</p>
          </div>
          <div class="weather-card-container">
            <!-- 循环显示一周天气信息 -->
            <el-card v-for="(day, index) in formattedWeeklyWeather" :key="index" class="weather-card"
              :class="{ 'current-card': index === 0 }" shadow="hover">
              <p slot="header"><span style="font-size: 24px;">{{ day.dateLabel }}</span> {{ day.week }}</p>
              <div>
                <p>{{ day.wea }}</p>
                <p>{{ day.tem1 }}°C / {{ day.tem2 }}°C</p>
                <p>{{ day.win.join(' / ') }}</p>
                <p>{{ day.win_speed }}</p>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="weather-info">
        <h3>24小时天气预报</h3>
        <div class="current-weather">
          <el-table :data="weatherInfo.hours" class="weather-table" height="250" style="width: 100%">
            <el-table-column prop="hours" label="时间"></el-table-column>
            <el-table-column prop="wea" label="天气"></el-table-column>
            <el-table-column prop="tem" label="温度 (°C)"></el-table-column>
            <el-table-column prop="win" label="风向"></el-table-column>
            <el-table-column prop="aqi" label="空气质量"></el-table-column>
          </el-table>
        </div>
      </div>
    </el-main>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      city: '',
      weatherInfo: {}, // 保存当前天气信息
      weeklyWeather: [] // 保存一周天气信息
    }
  },
  mounted() {
    this.getCityWeather(), // 获取当前天气信息
    this.getWeeklyWeather()// 获取一周天气信息
  },
  computed: {
    formattedWeeklyWeather() {
      return this.weeklyWeather.map((day, index) => {
        if (index === 0) {
          day.dateLabel = '今天'
        } else if (index === 1) {
          day.dateLabel = '明天'
        } else {
          day.dateLabel = this.formatWeeklyDate(day.date)
        }
        return day
      })
    }
  },
  methods: {
    getCityWeather() {
      this.axios
        .get("http://v1.yiketianqi.com/api", {
          params: {
            unescape: 1,
            version: 'v63',
            appid: '29921563',
            appsecret: '3XssBXUp',
            city: this.city
          }
        })
        .then(response => {
          this.weatherInfo = response.data
          console.log(this.weatherInfo)
          this.getWeeklyWeather()
        })
        .catch(error => {
          console.error('获取天气信息时出错:', error)
        })
    },
    getWeeklyWeather() {
      this.axios
        .get("http://v1.yiketianqi.com/api", {
          params: {
            unescape: 1,
            appid: '29921563',
            appsecret: '3XssBXUp',
            city: this.city
          }
        })
        .then(response => {
          this.weeklyWeather = response.data.data
          console.log(this.weeklyWeather)
        })
        .catch(error => {
          console.error('获取一周天气信息时出错:', error)
        })
    },
    // 格式化一周天气信息的时间
    formatWeeklyDate(dateString) {
      const date = new Date(dateString)
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${month}月${day}日`
    },
    // 格式化当前天气信息的时间
    formatWeaInfoDate(dateString) {
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}年${month}月${day}日`
    },
    weatherQuery() {
      this.getCityWeather()
    }
  }
}
</script>

<style scoped>
.el-container {
  background-color: #409eff;
}

.el-header {
  background-color: #409eff;
  color: white;
}

.el-main {
  background-color: #409eff;
  padding: 20px;
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.city-input {
  width: 300px;
  border-radius: 25px;
  overflow: hidden;
}

.city-input .el-input__inner {
  border-radius: 25px;
  padding-left: 40px;
}

.weather-info {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.current-weather {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.weather-summary {
  font-size: 18px;
}

.temperature {
  font-size: 48px;
  color: #409eff;
}

.additional-info {
  font-size: 14px;
  color: #606266;
}

.weather-table {
  margin-top: 20px;
}

.weather-card-container {
  display: flex;
  overflow-x: auto;
}

.weather-card {
  margin-right: 20px;
}

.current-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #034eff;
  color: aliceblue;
}</style>

