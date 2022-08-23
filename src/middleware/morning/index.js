const axios = require("axios");

const { tianapi_key } = require("../../../config/index");

async function getMoringInfo(ctx, next) {
  const { data } = await axios.get(
    `http://api.tianapi.com/zaoan/index?key=${tianapi_key}`
  );
  ctx.morning = data.newslist[0];
  await next();
}

module.exports = getMoringInfo;
