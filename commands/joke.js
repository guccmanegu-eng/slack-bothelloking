const axios = require("axios");

module.exports = async ({ ack, respond }) => {
  await ack();

  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    await respond({
      text: `${data.setup}\n\n${data.punchline}`,
    });
  } catch (error) {
    console.error(error);

    await respond({
      text: "Failed to fetch a joke.",
    });
  }
};