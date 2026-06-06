const axios = require("axios");

module.exports = async ({ ack, respond }) => {
  await ack();

  try {
    const { data } = await axios.get(
      "https://api.quotable.io/random"
    );

    await respond({
      text: `💡 "${data.content}"\n— ${data.author}`
    });
  } catch (error) {
    console.error(error);

    await respond({
      text: "Failed to fetch a quote."
    });
  }
};