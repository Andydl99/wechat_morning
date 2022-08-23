const axios = require("axios");
const { template_id, touser } = require("../../../config/index");
async function weChart(ctx, next) {
  const data = await axios.post(
    "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" +
      ctx.access_token,
    {
      touser: touser,
      template_id: template_id,
      data: {},
    }
  );
  await next();
}

module.exports = weChart;
