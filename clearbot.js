const Discord = require('discord.js');
const bot = new Discord.Client({)}

bot.on('ready', () => {
	console.log(`Zalogowany jako ${bot.user.tag}!`);
	bot.user.setStatus(`Idle`)
});

bot.login(WPISZTUTAJHIPERDUPERSEKRETNYKOD);
