const { getBirthday,randomHexColor } = require("../../utils");
async function formatData(ctx, next) {
  const { weather, morning, english } = ctx;
  const weChartMessage = {
    // 最低溫
    low: {
      value: `${weather.tempMin}°`,
      color: randomHexColor(),
    },
    // 最高溫
    high: {
      value: `${weather.tempMax}°`,
      color: randomHexColor(),
    },
   
    // 日期
    week: {
      value: `${weather.fxDate} ${weather.week} `,
      color: randomHexColor(),
    },
    textDay: {
      value: `${weather.textDay}`,
      color: randomHexColor(),
    },
    city: {
      value: `杭州市-萧山区`,
      color: randomHexColor(),
    },
    // //星座描述
    // constellation: {
    //   value: `${constellation.grade}${constellation.content}`,
    //   color: `#ff3b06`,
    // },
    // 早安心語
    morning: {
      value: `${morning.content}`,
      color: randomHexColor(),
    },
    birthday:{
      value:`${getBirthday()}`,
      color:randomHexColor()
    }, 
    en:{
      value:english.en,
      color:randomHexColor()
    },
    zh:{
      value:english.zh,
      color:randomHexColor()
    }
  };
  ctx.weChartMessage = weChartMessage;
  await next();
}

module.exports = formatData;
