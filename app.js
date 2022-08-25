const Koa = require("koa");

const app = new Koa();

const {
  getToken,
  weChart,
  getWeather,
  getConstellation,
  getMoringInfo,
  formatData,
} = require("./src/middleware/index");

// 獲取token
app.use(getToken);

// 獲取天氣
app.use(getWeather);

// 獲取星座信息
app.use(getConstellation);

// 獲取早安問候
app.use(getMoringInfo);

// 數據格式化
app.use(formatData);

// 發送測試消息
app.use(weChart)

app.use(async (ctx, next) => {
  ctx.body = ctx.weChartMessage;
  await next();
});

app.listen(3000, () => {
  console.log("Server running http://127.0.0.1:3000");
});
