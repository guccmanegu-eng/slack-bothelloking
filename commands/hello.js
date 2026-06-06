module.exports = async ({ ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `Hi!\nLatency: ${latency}ms`,
  });
};