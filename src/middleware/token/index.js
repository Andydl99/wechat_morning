const axios = require("axios");
const { appid, secret } = require("../../../config/index");

async function getToken(ctx,next) {
  const { data } = await axios.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
  );
  ctx.access_token =  data.access_token
  await next()
}

module.exports = getToken;
