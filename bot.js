const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`نتجاهل ليبقى الود بيننا ')

});
client.login(process.env.BOT_TOKEN);
