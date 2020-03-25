const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

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

	if(message.content === prefix + "creation"){
		message.reply("Création du bot le __23-03-2020__");
	}

	if(message.content === prefix + "developpeur"){
		message.reply("Développé par **Cryystale#0919**");
	}

	if (message.content === prefix + "embed"){
		 const embed = new Discord.MessageEmbed()
			.setTitle("Embed")
			.setDescription("Ceci est un embed")
			.addField(".help, page d'aide", true)
			.addField("Embed01", "Embed 01 ! test de Cryystale", true)
			.setColor("0x#2E64FE")
			.setFooter("Bon moment parmis nous !")
		message.channel.send(embed);
	}

	
	
});

bot.login(config.token);
