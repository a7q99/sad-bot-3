const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`سيبقى حذائي وكلام الناس أخوه للأبد')

});
client.login(process.env.BOT_TOKEN);
