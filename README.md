# DragonBot
DragonForgeNEXUS' Official Discord Bot
to build and run:
1. make a `config.json` file:

`config.json`:
```json
{
	"token": "{replace with your bot token}",
  "clientId": "{replace with your bot client id}"
}
```

2. run `npm i`
3. run `node deploy-commands.js`
4. run `node .`

If you see:
```sh
PATH/TO/FILE> node .
Ready! Logged in as {BOT NAME}
```
you're good to go, the bot should be live.

built off of https://discordjs.guide/