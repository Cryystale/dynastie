const Discord = require('discord.js');
const bot = new Discord.Client();

//importation
const config = require("./config.json");

var prefix = "!"

bot.on('ready', function() {
	bot.user.setStatus('online')
	bot.user.setActivity("Protéger la dynastie", {type: 1})
	console.log("Bot connecté !")
})

bot.on('message', message => {
	if(message.content === prefix + "help"){
		message.channel.send("**Cette commande n'est pas encore prête !** :frowning:")
	}

	if(message.content === prefix + "salut"){
		message.reply("Salut jeune tigre(sse) !");
	}
});

bot.login(config.token);
