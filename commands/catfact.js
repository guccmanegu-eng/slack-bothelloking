const axios = require("axios");

module.exports = async ({ ack, respond }) => {
  await ack();

  try {
    const { data } = await axios.get(
      "https://catfact.ninja/fact"
    );

    await respond({
      text: `🐱 Cat Fact:\n${data.fact}`
    });
  } catch {
    await respond({
      text: "Failed to fetch cat fact."
    });
  }
};