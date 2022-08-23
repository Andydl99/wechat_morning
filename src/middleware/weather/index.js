const axios = require("axios");

const { weather_key } = require("../../../config/index");

const week = "日一二三四五六".charAt(new Date().getDay());

async function getWeather(ctx, next) {
  const { data } = await axios.get(
    `https://devapi.qweather.com/v7/weather/3d?key=${weather_key}&location=101210102`
  );
  data.daily[0].week = `星期${week}` 
  ctx.weather = data.daily[0];
  await next()
}

module.exports = getWeather;
