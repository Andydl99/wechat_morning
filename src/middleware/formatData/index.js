async function formatData(ctx, next) {
  const { weather, morning, constellation } = ctx;
  const weChartMessage = {
    // 最低溫
    low: {
      value: `${weather.tempMin}°`,
      color: `#3366FF`,
    },
    // 最高溫
    high: {
      value: `${weather.tempMax}°`,
      color: `#3366FF`,
    },
    // 日期
    day: {
      value: `${weather.fxDate}`,
      color: `#3366FF`,
    },
    // 星期
    week:{
        value: `${weather.week}`,
        color: `#3366FF`,
    },
    //星座描述
    constellation:{
        value:`${constellation.grade}${constellation.content}`,
        color:"red"
    },
    // 早安心語
    morning:{
        value:`${morning.content}`
    }
  };
  ctx.weChartMessage = weChartMessage
  console.log(weChartMessage)
  await next()
}

module.exports = formatData;
