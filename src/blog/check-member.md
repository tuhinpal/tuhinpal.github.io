---
title: "Check Member"
time: 10
date: 2021-02-17
description: "In this Blog let's talk about how to check someone is channel member or not before using your bot. We will verify User Id from your channel member's database"
category: "Telegram"
author: "Tuhin Kanti Pal"
imgurl: "https://telegra.ph/file/29989b0f6efe81fed5da2.png"
---

**In** this Blog let's talk about how to check someone is channel member or not before using your bot. If someone use a bot, bot will recieve the User ID of that user. We will verify that id from your channel member's database.

### Process :
**Firstly**, have to create a Bot from BotFather. After a successfull creation you will recieve a Bot API token.

**Afterthat**, make that bot an admin of your channel.

**Now**, Grab your channel id using [this bot](https://telegram.dog/username_to_id_bot "this bot").

**When**, someone message to your bot you have to call an api (GET)
```shell
https://api.telegram.org/bot{BOY_API_KEY}/getChatMember?chat_id={CHANNEL_ID}&user_id={USER_ID}
```

**You** will recieve some status from response

```
If "ok" object of that response is false, that means user not in channel.


If "ok" object of that response is true there is some possibilities, you have to check "status" object in "result" of that response.

Possiblities are given below 👇
```

|  Reason | Meaning  |
| :------------: | :------------: |
| left  | User previously joined and later leave your channel (Not in channel) |
|  kicked | He is kicked by admin of your channel (Not in channel) |
| creator  | Creator of channel (In channel)  |
| administrator  | Admin of channel (In channel)  |
| member  | Member of channel (In channel)  |



## This Node Snippet can help you 

```javascript
const axios = require("axios");
const telegramApiKey = process.env.TELEGRAM_BOT_TOKEN || "";

async function main() {
  var channelId = "-1001262388958";
  var userId = "981558170";

  var inChannel = await checkMember({ channelId, userId });
  console.log(inChannel);
}

async function checkMember({ channelId, userId }) {
  var inChannel = {
    in_channel: null,
    type: null,
  };

  try {
    var reqUrl = `https://api.telegram.org/bot${telegramApiKey}/getChatMember?chat_id=${channelId}&user_id=${userId}`;
    var response = (await axios.get(reqUrl)).data;

    inChannel.type = response.result.status;

    if (response.ok) {
      switch (response.result.status) {
        case "left":
          inChannel.in_channel = false;
          break;

        case "kicked":
          inChannel.in_channel = false;
          break;

        case "restricted":
          inChannel.in_channel = false;
          break;

        default:
          inChannel.in_channel = true;
          break;
      }
    } else {
      inChannel.in_channel = false;
      inChannel.type = "notjoined";
    }
  } catch (error) {
    inChannel.in_channel = false;
    inChannel.type = "error";
  }

  return inChannel;
}

main();
```
