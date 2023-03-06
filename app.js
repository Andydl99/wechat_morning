const Koa = require('koa')

const app = new Koa()
const schedule = require('node-schedule')
const axios = require('axios')
const { getToken, weChart, getWeather, getConstellation, getMoringInfo, formatData } = require('./src/middleware/index')

// 獲取token
app.use(getToken)

// 獲取天氣
app.use(getWeather)

// 獲取星座信息
app.use(getConstellation)

// 獲取早安問候
app.use(getMoringInfo)

// 數據格式化
app.use(formatData)

// 發送測試消息
app.use(weChart)

app.use(async (ctx, next) => {
    ctx.body = ctx.weChartMessage
    console.log(ctx.body)
    await next()
})

var rule = new schedule.RecurrenceRule()
rule.hour = 7 // 小时
// rule.minute = 40 // 分钟
// rule.second = 20 // 秒
schedule.scheduleJob(rule, function () {
    axios.get('http://127.0.0.1:3000')
})
app.listen(3000, () => {
    console.log('Server running http://127.0.0.1:3000')
})
