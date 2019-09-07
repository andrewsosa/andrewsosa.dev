const axios = require("axios").default;

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => {
  const resp = await axios.post(process.env.BUILD_HOOK_URL);
  if (resp.status !== 200) throw new Error("Netlify Build Hook Failed");
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "OK",
    }),
  };
};
