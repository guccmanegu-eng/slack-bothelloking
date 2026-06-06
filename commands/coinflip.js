module.exports = async ({ ack, respond }) => {
  await ack();

  const result =
    Math.random() < 0.5 ? "Heads" : "Tails";

  await respond({
    text: `🪙 ${result}`
  });
};