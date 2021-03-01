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