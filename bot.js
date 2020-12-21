const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} giriş yaptı !`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
  }
});

client.login('NzkwNTk2OTkzMDIxNzcxODI3.X-C60w.Z9adHNgzxqMkcnAl7AsEwsG9Vek');