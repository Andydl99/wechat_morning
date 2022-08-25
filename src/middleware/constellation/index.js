const axios = require("axios");

const { tianapi_key } = require("../../../config/index");

async function getConstellation(ctx, next) {
  // const translationName = encodeURIComponent("狮子");
  // const { data } = await axios.get(
  //   `http://api.tianapi.com/xingzuo/index?key=${tianapi_key}&me=${translationName}`
  // );
  // ctx.constellation = data.newslist[0]

  const { data } = await axios.get(`http://api.tianapi.com/ensentence/index?key=${tianapi_key}`) 

  ctx.english = data.newslist[0]
    
  await next();
}

module.exports = getConstellation;
