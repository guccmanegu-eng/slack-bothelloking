require("dotenv").config();

const { App } = require("@slack/bolt");

const hello = require("./commands/hello");
const joke = require("./commands/joke");
const catfact = require("./commands/catfact");
const quote = require("./commands/quote");
const roll = require("./commands/roll");
const coinflip = require("./commands/coinflip");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.command("/helloking", hello);
app.command("/helloking-joke", joke);
app.command("/helloking-catfact", catfact);
app.command("/helloking-quote", quote);
app.command("/helloking-roll", roll);
app.command("/helloking-coinflip", coinflip);

(async () => {
  try {
    await app.start();
    console.log("Bot is running on Slack!");
  } catch (error) {
    console.error("Failed to start the bot:", error);
  }
})();