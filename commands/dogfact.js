const axios = require("axios");

module.exports = async ({ ack, respond }) => {
  await ack();

  try {
    const { data } = await axios.get(
      "https://dogapi.dog/api/v2/facts"
    );

    await respond({
      text: `🐶 Dog Fact:\n${data.data[0].attributes.body}`
    });
  } catch (error) {
    console.error(error);

    await respond({
      text: "Failed to fetch a dog fact."
    });
  }
};