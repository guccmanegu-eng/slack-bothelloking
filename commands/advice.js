const axios = require("axios");

module.exports = async ({ ack, respond }) => {
  await ack();

  try {
    const { data } = await axios.get(
      "https://api.adviceslip.com/advice"
    );

    await respond({
      text: `💡 Advice:\n${data.slip.advice}`
    });
  } catch (error) {
    console.error(error);

    await respond({
      text: "Failed to fetch advice."
    });
  }
};