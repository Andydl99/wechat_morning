async function formatData(ctx, next) {
  const { weather, morning, constellation } = ctx;
  const weChartMessage = {
    // 最低溫
    low: {
      value: `${weather.tempMin}°`,
      color: `#9ff`,
    },
    // 最高溫
    high: {
      value: `${weather.tempMax}°`,
      color: `#694`,
    },
    // 日期
    day: {
      value: `${weather.fxDate}`,
      color: `#3366FF`,
    },
    // 星期
    week: {
      value: `${weather.week}`,
      color: `#448`,
    },
    textNight: {
      value: `${weather.textNight}`,
      color: `#f49`,
    },
    city: {
      value: `杭州市-萧山区`,
      color: `#669`,
    },
    //星座描述
    constellation: {
      value: `${constellation.grade}${constellation.content}`,
      color: `#990`,
    },
    // 早安心語
    morning: {
      value: `${morning.content}`,
      color: `#3366FF`,
    },
  };
  ctx.weChartMessage = weChartMessage;
  console.log(weChartMessage);
  await next();
}

module.exports = formatData;
