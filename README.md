# Helloking Slack Bot 🤖

A custom Slack bot built with Node.js and Slack Bolt that provides fun and interactive slash commands.

## Features

### Commands

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `/helloking`          | Displays a greeting and response latency |
| `/helloking-joke`     | Returns a random joke                    |
| `/helloking-catfact`  | Returns a random cat fact                |
| `/helloking-quote`    | Returns an inspirational quote           |
| `/helloking-roll`     | Rolls a six-sided die                    |
| `/helloking-coinflip` | Flips a coin and returns Heads or Tails  |

---

## Technologies Used

* Node.js
* Slack Bolt Framework
* Axios
* Slack API
* Socket Mode

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/slack-bothelloking.git
cd slack-bothelloking
```

### Install dependencies

```bash
npm install
```

### Create a .env file

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
```

### Run locally

```bash
node app.js
```

---

## Project Structure

```text
slack-bothelloking/
│
├── app.js
├── package.json
├── .env
│
└── commands/
    ├── hello.js
    ├── joke.js
    ├── catfact.js
    ├── quote.js
    ├── roll.js
    └── coinflip.js
```

---

## Deployment

This bot is deployed on a Nest virtual machine and runs 24/7 using a systemd service.

### Start the service

```bash
systemctl start slackbot.service
```

### Check service status

```bash
systemctl status slackbot.service
```

### View logs

```bash
journalctl -u slackbot.service -f
```

---

## Example Usage

```text
/helloking
```

Response:

```text
Hi!
Latency: 4ms
```

```text
/helloking-joke
```

Response:

```text
Why did the scarecrow win an award?

Because he was outstanding in his field.
```

```text
/helloking-roll
```

Response:

```text
🎲 You rolled a 5!
```

---

## Author

Created by Helloking as a custom Slack bot project.

## License

This project is intended for educational purposes.

## Acknowledgements

This project was developed as part of a Slack bot assignment using Node.js and the Slack Bolt framework.

During development, ChatGPT was used as a learning and support tool. It helped explain the basics of Slack bot development, Node.js, GitHub deployment, and Linux server management. It also suggested organizing commands into separate files rather than placing everything in a single file, which made the codebase cleaner, easier to maintain, and more scalable as new commands were added.

All code was reviewed, tested, and integrated into the final project by me.
